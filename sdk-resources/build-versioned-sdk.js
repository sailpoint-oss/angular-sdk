#!/usr/bin/env node
/**
 * build-versioned-sdk.js
 *
 * Angular adaptation of the TypeScript-axios versioned SDK builder.
 * Builds one Angular SDK sub-directory per resource partition found in
 * the apis/ directory.  New partitions are discovered automatically — no
 * script updates required when new endpoints are added.
 *
 * Pipeline for each partition:
 *   1. Copy apis/ to .sdk-build-tmp/  (git-ignored, so source files stay clean)
 *   2. Apply prescript YAML fixes to the temp copy
 *   3. Bundle the partition openapi.yaml with redocly (resolves shared/ $refs)
 *   4. Run openapi-generator-cli with typescript-angular and a dynamically generated config
 *   5. Run postscript.js on the generated output
 *
 * After all partitions are built:
 *   6. Regenerate sdk-output/index.ts to re-export from every partition package
 *
 * On failure, structured error logs are written to build-errors/:
 *   build-errors/summary.md              — overview of all failures
 *   build-errors/<partition>-error.md    — self-contained per-partition report
 *                                          with error output + spec file contents
 *                                          (designed to be fed directly to an AI)
 *
 * Usage:
 *   node sdk-resources/build-versioned-sdk.js <path-to-apis-dir> [--partition <name>] [--keep-tmp]
 *
 * Options:
 *   --partition <name>   Build only the named partition (default: all)
 *   --keep-tmp           Do not delete .sdk-build-tmp after the build
 */

"use strict";

const fs   = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const SDK_ROOT    = path.resolve(__dirname, "..");
const SDK_OUTPUT  = path.join(SDK_ROOT, "sdk-output");
const TEMP_DIR    = path.join(SDK_ROOT, ".sdk-build-tmp");
const BUNDLED_DIR = path.join(TEMP_DIR, "bundled");
const ERROR_DIR   = path.join(SDK_ROOT, "build-errors");
const JAR         = path.join(SDK_ROOT, "openapi-generator-cli.jar");
const POSTSCRIPT  = path.join(__dirname, "postscript.js");

const NPM_NAME    = "sailpoint-angular-sdk";
const NPM_VERSION = "1.0.0";
const NG_VERSION  = "22";

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
if (args.length === 0 || args[0].startsWith("--")) {
  console.error("Usage: node sdk-resources/build-versioned-sdk.js <path-to-apis-dir> [--partition <name>] [--keep-tmp]");
  process.exit(1);
}

const apisDir       = path.resolve(args[0]);
const keepTmp       = args.includes("--keep-tmp");
const partitionIdx  = args.indexOf("--partition");
const onlyPartition = partitionIdx !== -1 ? args[partitionIdx + 1] : null;

// ---------------------------------------------------------------------------
// Utility: copy directory recursively
// ---------------------------------------------------------------------------

function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath  = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// ---------------------------------------------------------------------------
// Utility: walk directory, return all file paths
// ---------------------------------------------------------------------------

function walkSync(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkSync(full, files);
    } else {
      files.push(full);
    }
  }
  return files;
}

// ---------------------------------------------------------------------------
// Utility: read a file safely (returns empty string if missing)
// ---------------------------------------------------------------------------

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return "";
  }
}

// ---------------------------------------------------------------------------
// Prescript fixes (applied to the temp copy of apis/)
// ---------------------------------------------------------------------------

function applyPrescriptFixes(tempApisDir) {
  const files = walkSync(tempApisDir);
  let fixed = 0;

  for (const file of files) {
    if (!file.endsWith(".yaml") && !file.endsWith(".yml")) continue;

    let rawdata = fs.readFileSync(file, "utf8");
    let lines   = rawdata.split("\n");
    let out     = [];
    let changed = false;

    // Fix X-SailPoint-Experimental headers
    const experimentalFixed = rawdata.replace(
      /(- name: X-SailPoint-Experimental[\s\S]*?required: )true/g,
      "$1false"
    );
    if (experimentalFixed !== rawdata) {
      rawdata = experimentalFixed;
      lines   = rawdata.split("\n");
      changed = true;
    }

    // Fix transforms and sources transform schemas
    if (file.includes(path.join("transforms", "schemas", "transform.yaml")) ||
        file.includes(path.join("sources",    "schemas", "transform.yaml"))) {
      for (let line of lines) {
        if (line.includes("oneOf")) { line = line.replaceAll("oneOf:", "type: object"); changed = true; }
        if (!line.includes("- $ref:")) out.push(line);
      }
      lines = out; out = [];
    }

    // Fix workflow trigger schemas
    if (file.includes(path.join("workflows", "schemas", "workflowtrigger.yaml"))) {
      for (let line of lines) {
        if (line.includes("anyOf")) { line = line.replaceAll("anyOf:", "type: object"); changed = true; }
        if (!line.includes("- $ref:")) out.push(line);
      }
      lines = out; out = [];
    }

    // Fix search document schemas (Angular generator also struggles with discriminated unions)
    if (file.includes(path.join("search", "schemas", "searchdocument.yaml")) ||
        file.includes(path.join("search", "schemas", "searchdocuments.yaml"))) {
      lines = ["type: object"];
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(file, lines.join("\n"), "utf8");
      fixed++;
    }
  }

  console.log(`  prescript: fixed ${fixed} file(s) in temp copy`);
}

// ---------------------------------------------------------------------------
// Bundle a single partition's openapi.yaml with redocly
// ---------------------------------------------------------------------------

function bundlePartition(partitionName, tempApisDir) {
  const inputSpec  = path.join(tempApisDir, partitionName, "openapi.yaml");
  const outputSpec = path.join(BUNDLED_DIR, `${partitionName}.json`);

  fs.mkdirSync(BUNDLED_DIR, { recursive: true });

  const result = spawnSync(
    "npx",
    ["redocly", "bundle", inputSpec, "-o", outputSpec, "--force"],
    { encoding: "utf8" }
  );

  return {
    ok:     result.status === 0,
    stdout: result.stdout || "",
    stderr: result.stderr || "",
    outputSpec,
  };
}

// ---------------------------------------------------------------------------
// Model-name casing normalization
// ---------------------------------------------------------------------------

let _versionedNameMap = null;

function betterCasedName(a, b) {
  const au = /^[A-Z]/.test(a), bu = /^[A-Z]/.test(b);
  if (au !== bu) return au ? a : b;
  const ac = (a.match(/[A-Z]/g) || []).length;
  const bc = (b.match(/[A-Z]/g) || []).length;
  if (ac !== bc) return ac > bc ? a : b;
  return a <= b ? a : b;
}

function buildVersionedNameMap(idnRoot) {
  if (_versionedNameMap) return _versionedNameMap;
  const map = new Map();

  const versionDirs = fs.existsSync(idnRoot)
    ? fs.readdirSync(idnRoot, { withFileTypes: true })
        .filter(e => e.isDirectory() && e.name !== "apis")
        .map(e => path.join(idnRoot, e.name))
    : [];

  for (const dir of versionDirs) {
    for (const file of walkSync(dir)) {
      if (!file.endsWith(".yaml")) continue;
      if (!file.split(path.sep).includes("schemas")) continue;
      const basename = path.basename(file, ".yaml");
      const lc  = basename.toLowerCase();
      const cur = map.get(lc);
      map.set(lc, cur ? betterCasedName(cur, basename) : basename);
    }
  }

  _versionedNameMap = map;
  return map;
}

function pascalFromTitle(title) {
  return title
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

function desiredModelName(key, schema, nameMap) {
  const suffixMatch = key.match(/^(.*?)-(\d+)$/);
  const base   = suffixMatch ? suffixMatch[1] : key;
  const suffix = suffixMatch ? `_${suffixMatch[2]}` : "";

  let name =
    nameMap.get(base.toLowerCase()) ||
    (schema && typeof schema.title === "string" && schema.title.trim()
      ? pascalFromTitle(schema.title)
      : "");

  if (!name) name = base;

  name = name.replace(/[^A-Za-z0-9]/g, "");
  if (!name) name = base.replace(/[^A-Za-z0-9]/g, "") || "Model";
  name = name.charAt(0).toUpperCase() + name.slice(1);
  return name + suffix;
}

function normalizeSchemaNames(bundledJsonPath, idnRoot) {
  const spec    = JSON.parse(fs.readFileSync(bundledJsonPath, "utf8"));
  const schemas = spec.components && spec.components.schemas;
  if (!schemas) return { renamed: 0 };

  const nameMap = buildVersionedNameMap(idnRoot);
  const oldKeys = Object.keys(schemas);

  const needsFix = k => !/[A-Z]/.test(k);
  const taken    = new Set(oldKeys.filter(k => !needsFix(k)));

  const rename = new Map();
  for (const key of oldKeys) {
    if (!needsFix(key)) continue;
    let name = desiredModelName(key, schemas[key], nameMap);
    if (name === key) continue;
    if (taken.has(name)) {
      let n = 2, candidate = `${name}_${n}`;
      while (taken.has(candidate)) candidate = `${name}_${++n}`;
      console.log(`    name collision: ${key} -> ${name} taken, using ${candidate}`);
      name = candidate;
    }
    taken.add(name);
    rename.set(key, name);
  }

  if (rename.size === 0) return { renamed: 0 };

  const refRewrite = new Map();
  for (const [oldKey, newKey] of rename) {
    refRewrite.set(`#/components/schemas/${oldKey}`, `#/components/schemas/${newKey}`);
  }
  const walk = (node) => {
    if (Array.isArray(node)) { node.forEach(walk); return; }
    if (node && typeof node === "object") {
      for (const k of Object.keys(node)) {
        const v = node[k];
        if (typeof v === "string") {
          if (refRewrite.has(v)) node[k] = refRewrite.get(v);
        } else {
          walk(v);
        }
      }
    }
  };
  walk(spec);

  const rebuilt = {};
  for (const key of oldKeys) rebuilt[rename.get(key) || key] = schemas[key];
  spec.components.schemas = rebuilt;

  fs.writeFileSync(bundledJsonPath, JSON.stringify(spec, null, 2), "utf8");
  return { renamed: rename.size };
}

// ---------------------------------------------------------------------------
// Generate per-partition config YAML (Angular-specific)
// ---------------------------------------------------------------------------

function writePartitionConfig(partitionName) {
  const packageDir = partitionName.replaceAll("-", "_");
  const config = [
    `npmName: ${NPM_NAME}`,
    `npmRepository: sailpoint.com`,
    `npmVersion: ${NPM_VERSION}`,
    `ngVersion: ${NG_VERSION}`,
    `providedIn: root`,
    `packageName: ${packageDir}`,
    `useSingleRequestParameter: true`,
    `stringEnums: true`,
  ].join("\n");

  const configPath = path.join(TEMP_DIR, `${partitionName}-config.yaml`);
  fs.writeFileSync(configPath, config, "utf8");
  return configPath;
}

// ---------------------------------------------------------------------------
// Run openapi-generator for a single partition
// ---------------------------------------------------------------------------

function generatePartition(partitionName, bundledSpec, configPath) {
  const packageDir = partitionName.replaceAll("-", "_");
  const outputDir  = path.join(SDK_OUTPUT, packageDir);

  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }

  const result = spawnSync(
    "java",
    [
      "-jar", JAR,
      "generate",
      "-i", bundledSpec,
      "-g", "typescript-angular",
      "-o", outputDir,
      "--global-property", "skipFormModel=false",
      "--config", configPath,
    ],
    { encoding: "utf8" }
  );

  if (result.status === 0) {
    fs.writeFileSync(path.join(outputDir, ".sdk-partition"), partitionName, "utf8");
  }

  return {
    ok:        result.status === 0,
    stdout:    result.stdout || "",
    stderr:    result.stderr || "",
    outputDir,
    packageDir,
  };
}

// ---------------------------------------------------------------------------
// Run postscript.js on the generated output
// ---------------------------------------------------------------------------

function runPostscript(outputDir) {
  const result = spawnSync(
    "node",
    [POSTSCRIPT, outputDir],
    { encoding: "utf8" }
  );

  return {
    ok:     result.status === 0,
    stdout: result.stdout || "",
    stderr: result.stderr || "",
  };
}

// ---------------------------------------------------------------------------
// Error logging
// ---------------------------------------------------------------------------

const MAX_FILE_BYTES = 20_000;

function collectSpecFiles(partitionName, tempApisDir) {
  const partDir = path.join(tempApisDir, partitionName);
  if (!fs.existsSync(partDir)) return {};

  const collected = {};
  const files = walkSync(partDir).filter(f => f.endsWith(".yaml"));

  for (const f of files) {
    const relPath = path.relative(path.join(tempApisDir, ".."), f);
    let content = readFileSafe(f);
    if (Buffer.byteLength(content, "utf8") > MAX_FILE_BYTES) {
      content = content.slice(0, MAX_FILE_BYTES) + "\n\n[... truncated — file exceeds 20 KB ...]";
    }
    collected[relPath] = content;
  }

  return collected;
}

function writeErrorReport(partitionName, step, errorOutput, tempApisDir, apisSourceDir) {
  fs.mkdirSync(ERROR_DIR, { recursive: true });

  const specFiles  = collectSpecFiles(partitionName, path.join(tempApisDir, "apis"));
  const sourceDir  = path.join(apisSourceDir, partitionName);
  const reportPath = path.join(ERROR_DIR, `${partitionName}-error.md`);

  const fileBlocks = Object.entries(specFiles)
    .map(([relPath, content]) => `### \`${relPath}\`\n\`\`\`yaml\n${content}\n\`\`\``)
    .join("\n\n");

  const report = `# SDK Build Error: \`${partitionName}\`

## Context for AI

This file is a self-contained error report for the \`${partitionName}\` API partition.
It contains the build error and all relevant OpenAPI spec files needed to diagnose and fix the problem.

**Source directory to fix:** \`${sourceDir}\`
**Failed step:** ${step}

---

## Error Output

\`\`\`
${errorOutput.trim()}
\`\`\`

---

## Fix Instructions

1. Read the error output above carefully.
2. Identify which spec file(s) below are causing the problem.
3. Apply fixes directly to the source files under \`${sourceDir}\`.
4. Do **not** edit files in \`.sdk-build-tmp/\` — those are generated copies.
5. After fixing, re-run the build for just this partition:
   \`\`\`bash
   node sdk-resources/build-versioned-sdk.js <path-to-apis> --partition ${partitionName}
   \`\`\`

---

## Spec Files

${fileBlocks || "_No spec files found._"}
`;

  fs.writeFileSync(reportPath, report, "utf8");
  return reportPath;
}

function writeSummaryReport(results, apisSourceDir) {
  fs.mkdirSync(ERROR_DIR, { recursive: true });

  const failureLines = results.failed.map(({ partition, step, reportPath }) =>
    `| \`${partition}\` | ${step} | [${path.basename(reportPath)}](./${path.basename(reportPath)}) |`
  ).join("\n");

  const summary = `# SDK Build Error Summary

**Date:** ${new Date().toISOString()}
**APIs directory:** \`${apisSourceDir}\`
**Total partitions:** ${results.total}
**Succeeded:** ${results.success.length}
**Failed:** ${results.failed.length}

## Failed Partitions

| Partition | Failed Step | Error Report |
|-----------|-------------|--------------|
${failureLines || "_(none)_"}

## How to Fix

Each error report in this directory is self-contained and can be given directly to an AI.
It includes the full error output and all relevant spec file contents.

Fix partitions one at a time:
\`\`\`bash
# Fix a single partition
node sdk-resources/build-versioned-sdk.js <path-to-apis> --partition <partition-name>

# Re-run all after fixes
node sdk-resources/build-versioned-sdk.js <path-to-apis>
\`\`\`
`;

  const summaryPath = path.join(ERROR_DIR, "summary.md");
  fs.writeFileSync(summaryPath, summary, "utf8");
  return summaryPath;
}

// ---------------------------------------------------------------------------
// Regenerate sdk-output/index.ts from discovered Angular partition packages
//
// The Angular generator emits one service per API tag inside api/<name>.service.ts.
// Each service class is named <Tag>Service (e.g. AccountsV1Service).
//
// Single-version resource  →  export { _AccountsV1Service as AccountsV1Service }
//                              SailPointAngular.AccountsService = _AccountsV1Service
// Multi-version resource   →  combined class that extends the latest version and
//                              copies older-version prototype methods.
// ---------------------------------------------------------------------------

function toResourceServiceName(className) {
  // Strip trailing version suffix, e.g. AccountsV2Service → AccountsService
  return className.replace(/V\d+Service$/, "Service");
}

function classVersion(className) {
  return parseInt(className.match(/V(\d+)Service$/)?.[1] ?? "1", 10);
}

/**
 * Collect all Angular service class names from a partition's api/ directory.
 * Returns an array of class names like ["AccountsV1Service"].
 */
function collectServiceClasses(partitionDir) {
  const apiDir = path.join(partitionDir, "api");
  if (!fs.existsSync(apiDir)) return [];

  const classes = [];
  for (const file of fs.readdirSync(apiDir)) {
    if (!file.endsWith(".service.ts")) continue;
    const content = fs.readFileSync(path.join(apiDir, file), "utf8");
    // Angular generator emits: export class AccountsV1Service extends ...
    const match = content.match(/^export class (\w+Service) /m);
    if (match) classes.push(match[1]);
  }
  return classes;
}

function generateIndexTs() {
  const partitionDirs = fs.readdirSync(SDK_OUTPUT)
    .filter(d => {
      if (!fs.statSync(path.join(SDK_OUTPUT, d)).isDirectory()) return false;
      return fs.existsSync(path.join(SDK_OUTPUT, d, ".sdk-partition"));
    })
    .sort();

  if (partitionDirs.length === 0) {
    console.log("  No generated partition packages found, skipping index.ts regeneration.");
    return;
  }

  // Collect { dir, className } for every service in every partition
  const allServices = [];
  for (const d of partitionDirs) {
    const classes = collectServiceClasses(path.join(SDK_OUTPUT, d));
    for (const className of classes) {
      allServices.push({ dir: d, className });
    }
  }

  // Group by resource name, sorted oldest→newest within each group
  const byResource = new Map();
  for (const svc of allServices) {
    const key = toResourceServiceName(svc.className);
    if (!byResource.has(key)) byResource.set(key, []);
    byResource.get(key).push(svc);
  }
  for (const group of byResource.values()) {
    group.sort((a, b) => classVersion(a.className) - classVersion(b.className));
  }

  const importLines    = [];
  const exportLines    = [];
  const combinedBlocks = [];
  const nsLines        = [];

  for (const [resourceName, group] of byResource.entries()) {
    for (const svc of group) {
      importLines.push(`import { ${svc.className} as _${svc.className} } from "./${svc.dir}/index";`);
      exportLines.push(`export { _${svc.className} as ${svc.className} };`);
    }

    if (group.length === 1) {
      nsLines.push(`  ${resourceName}: _${group[0].className},`);
    } else {
      const latest  = group[group.length - 1];
      const older   = group.slice(0, -1);
      const implVar = `_${resourceName}Impl`;

      const interfaceMerges = older
        .map(svc => `interface ${implVar} extends _${svc.className} {}`)
        .join("\n");

      const protoCopyArgs = older.map(svc => `_${svc.className}`).join(", ");

      combinedBlocks.push(
        `// ${resourceName}: combined ${group.map(svc => svc.className).join(" + ")}`,
        `class ${implVar} extends _${latest.className} {}`,
        interfaceMerges,
        `(function(target: any, ...sources: Function[]) {`,
        `  for (const src of sources) {`,
        `    for (const key of Object.getOwnPropertyNames((src as any).prototype)) {`,
        `      if (key !== "constructor" && !(key in target.prototype)) {`,
        `        const d = Object.getOwnPropertyDescriptor((src as any).prototype, key);`,
        `        if (d) Object.defineProperty(target.prototype, key, d);`,
        `      }`,
        `    }`,
        `  }`,
        `})(${implVar}, ${protoCopyArgs});`,
        "",
      );

      nsLines.push(`  ${resourceName}: ${implVar},`);
    }
  }

  // Collect all partition dirs for re-exporting models
  const modelExports = partitionDirs
    .map(d => `export * from "./${d}/index";`)
    .join("\n");

  const fileContent = `/* tslint:disable */
/* eslint-disable */
// Code generated by build-versioned-sdk.js; DO NOT EDIT.
//
// Named imports — version-explicit service class names:
//   import { AccountsV1Service, Configuration } from "sailpoint-angular-sdk"
//
// Namespace — resource-named, version-agnostic:
//   import { SailPointAngular, Configuration } from "sailpoint-angular-sdk"
//   const svc = new SailPointAngular.AccountsService(config, basePath, httpClient)
//
// Models — re-exported from each partition index:
//   import type { Account } from "sailpoint-angular-sdk"

// --- Partition imports (private _ alias) ---
${importLines.join("\n")}

// --- Named exports (versioned service class names) ---
${exportLines.join("\n")}

// --- Model re-exports (all partition models) ---
${modelExports}

${combinedBlocks.length > 0 ? "// --- Combined multi-version service classes ---\n" + combinedBlocks.join("\n") : ""}
// --- SailPointAngular namespace (resource-named, all versions combined) ---
export const SailPointAngular = {
${nsLines.join("\n")}
};
`;

  fs.writeFileSync(path.join(SDK_OUTPUT, "index.ts"), fileContent, "utf8");
  console.log(`  Wrote index.ts — ${allServices.length} service(s), ${byResource.size} resource(s) in SailPointAngular namespace`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  if (!fs.existsSync(apisDir)) {
    console.error(`Error: apis directory not found: ${apisDir}`);
    process.exit(1);
  }

  if (!fs.existsSync(JAR)) {
    console.error(`Error: openapi-generator-cli.jar not found at ${JAR}`);
    console.error("  Download it with:");
    console.error("  wget -q https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/7.12.0/openapi-generator-cli-7.12.0.jar -O openapi-generator-cli.jar");
    process.exit(1);
  }

  const allPartitions = fs.readdirSync(apisDir, { withFileTypes: true })
    .filter(e => e.isDirectory() && e.name !== "shared")
    .map(e => e.name)
    .sort();

  const partitions = onlyPartition
    ? allPartitions.filter(p => p === onlyPartition)
    : allPartitions;

  if (partitions.length === 0) {
    console.error(`No partitions found${onlyPartition ? ` matching '${onlyPartition}'` : ""} in ${apisDir}`);
    process.exit(1);
  }

  console.log(`\nFound ${partitions.length} partition(s) to build\n`);

  // Set up temp directory
  console.log(`[SETUP] Copying apis/ → ${path.relative(SDK_ROOT, TEMP_DIR)}/`);
  if (fs.existsSync(TEMP_DIR)) fs.rmSync(TEMP_DIR, { recursive: true, force: true });
  copyDirSync(apisDir, path.join(TEMP_DIR, "apis"));

  console.log("[SETUP] Applying prescript fixes to temp copy ...");
  applyPrescriptFixes(path.join(TEMP_DIR, "apis"));

  // Clear any previous error reports
  if (fs.existsSync(ERROR_DIR)) fs.rmSync(ERROR_DIR, { recursive: true, force: true });

  // Remove all stale generated partition directories
  if (!onlyPartition && fs.existsSync(SDK_OUTPUT)) {
    console.log("[CLEAN] Removing stale generated partition directories ...");
    const expectedDirs = new Set(partitions.map(p => p.replaceAll("-", "_")));
    const stale = fs.readdirSync(SDK_OUTPUT)
      .filter(d => {
        if (!fs.statSync(path.join(SDK_OUTPUT, d)).isDirectory()) return false;
        if (fs.existsSync(path.join(SDK_OUTPUT, d, ".sdk-partition"))) return !expectedDirs.has(d);
        if (/^[a-z].+_v\d+$/.test(d)) return true;
        return false;
      });
    for (const d of stale) {
      fs.rmSync(path.join(SDK_OUTPUT, d), { recursive: true, force: true });
      console.log(`  removed sdk-output/${d}/`);
    }
    console.log(`  cleaned ${stale.length} directory/directories\n`);
  }

  const results = {
    total:   partitions.length,
    success: [],
    failed:  [],
  };

  for (const partition of partitions) {
    console.log(`\n${"=".repeat(60)}`);
    console.log(`  Building: ${partition}`);
    console.log(`${"=".repeat(60)}`);

    // --- Step 1: Bundle ---
    console.log("  [1/4] Bundling spec ...");
    const bundle = bundlePartition(partition, path.join(TEMP_DIR, "apis"));
    if (!bundle.ok) {
      const errorOutput = [bundle.stdout, bundle.stderr].filter(Boolean).join("\n");
      console.error(`  ✗ bundling failed`);
      const reportPath = writeErrorReport(partition, "bundling", errorOutput, TEMP_DIR, apisDir);
      results.failed.push({ partition, step: "bundling", reportPath });
      continue;
    }

    // --- Step 1b: Normalize model-name casing ---
    console.log("  [1b/4] Normalizing model-name casing ...");
    try {
      const norm = normalizeSchemaNames(bundle.outputSpec, path.dirname(apisDir));
      console.log(`         renamed ${norm.renamed} lowercase model name(s)`);
    } catch (err) {
      console.error(`  ✗ casing normalization failed`);
      const reportPath = writeErrorReport(partition, "normalization", String(err.stack || err), TEMP_DIR, apisDir);
      results.failed.push({ partition, step: "normalization", reportPath });
      continue;
    }

    // --- Step 2: Config ---
    console.log("  [2/4] Writing generator config ...");
    const configPath = writePartitionConfig(partition);

    // --- Step 3: Generate ---
    console.log("  [3/4] Generating Angular SDK ...");
    const gen = generatePartition(partition, bundle.outputSpec, configPath);
    if (!gen.ok) {
      const errorOutput = [gen.stdout, gen.stderr].filter(Boolean).join("\n");
      console.error(`  ✗ generation failed`);
      const reportPath = writeErrorReport(partition, "generation", errorOutput, TEMP_DIR, apisDir);
      results.failed.push({ partition, step: "generation", reportPath });
      continue;
    }

    // --- Step 4: Postscript ---
    console.log("  [4/4] Running postscript ...");
    const post = runPostscript(gen.outputDir);
    if (!post.ok) {
      const errorOutput = [post.stdout, post.stderr].filter(Boolean).join("\n");
      console.error(`  ✗ postscript failed`);
      const reportPath = writeErrorReport(partition, "postscript", errorOutput, TEMP_DIR, apisDir);
      results.failed.push({ partition, step: "postscript", reportPath });
      continue;
    }

    results.success.push(partition);
    console.log(`  ✓ ${partition} → sdk-output/${gen.packageDir}/`);
  }

  // Cleanup
  if (!keepTmp) {
    console.log("\n[CLEANUP] Removing .sdk-build-tmp/ ...");
    fs.rmSync(TEMP_DIR, { recursive: true, force: true });
  }

  // Regenerate index.ts
  console.log("\n[INDEX] Regenerating sdk-output/index.ts ...");
  generateIndexTs();

  // Write error reports
  if (results.failed.length > 0) {
    const summaryPath = writeSummaryReport(results, apisDir);
    console.log(`\n[ERRORS] ${results.failed.length} partition(s) failed.`);
    console.log(`  Summary:  ${path.relative(SDK_ROOT, summaryPath)}`);
    console.log(`  Reports:  ${path.relative(SDK_ROOT, ERROR_DIR)}/`);
    console.log(`\n  Failed partitions:`);
    for (const { partition, step, reportPath } of results.failed) {
      console.log(`    ✗ ${partition} (${step}) → ${path.relative(SDK_ROOT, reportPath)}`);
    }
  }

  // Summary
  console.log("\n" + "=".repeat(60));
  console.log("BUILD SUMMARY");
  console.log("=".repeat(60));
  console.log(`  Success: ${results.success.length} / ${results.total}`);
  console.log(`  Failed:  ${results.failed.length} / ${results.total}`);

  if (results.failed.length > 0) {
    process.exit(1);
  }
}

main();
