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
const TEMPLATE_DIR = path.join(__dirname, "resources");

const NPM_NAME    = "@sailpoint/angular-sdk";
const NPM_VERSION = "0.0.2";
const NG_VERSION  = "22";

// The generic API is built from a standalone spec in sdk-resources/, not from a
// partition under apis/, so it uses a static config file instead of a generated one.
const GENERIC_SPEC   = path.join(__dirname, "generic-api.yaml");
const GENERIC_CONFIG = path.join(__dirname, "generic-config.yaml");
const GENERIC_DIR    = "generic";

// NERM (Non-Employee Risk Management) is a separate product with its own host,
// https://{tenant}.nonemployee.com/api, so it is not a partition either. Its
// specification lives in the api-specs checkout next to idn/.
//
// Every NERM request carries the NERM_URL_PREFIX, which sailpointInterceptor
// strips before it prepends the NERM base URL. Without the prefix a NERM path
// such as /ne_attributes is indistinguishable from an ISC path, and the
// interceptor would send it to the ISC host.
const NERM_URL_PREFIX = "/nerm";

const NERM_VARIANTS = [
  {
    name:       "nerm",
    packageDir: "nerm",
    specPath:   ["openapi.yaml"],
    config:     path.join(__dirname, "nerm-config.yaml"),
    modelSuffix: "NERM",
    basePath:   `${NERM_URL_PREFIX}/api`,
  },
  {
    name:       "nerm v2025",
    packageDir: "nermv2025",
    specPath:   ["v2025", "v2025.yaml"],
    config:     path.join(__dirname, "nerm-v2025-config.yaml"),
    modelSuffix: "NERMV2025",
    basePath:   `${NERM_URL_PREFIX}/api/v2025`,
  },
];

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
const genericOnly = args.includes("--generic-only");
const nermOnly    = args.includes("--nerm-only");

// --generic-only and --nerm-only build a single shared package and need no
// apis/ directory, so the positional argument is optional for them.
if (!genericOnly && !nermOnly && (args.length === 0 || args[0].startsWith("--"))) {
  console.error("Usage: node sdk-resources/build-versioned-sdk.js <path-to-apis-dir> [--partition <name>] [--keep-tmp]");
  console.error("       node sdk-resources/build-versioned-sdk.js --generic-only");
  console.error("       node sdk-resources/build-versioned-sdk.js --nerm-only [--nerm-specs <path-to-api-specs>/nerm]");
  process.exit(1);
}

const apisDir       = args[0] && !args[0].startsWith("--") ? path.resolve(args[0]) : null;
const keepTmp       = args.includes("--keep-tmp");
const partitionIdx  = args.indexOf("--partition");
const onlyPartition = partitionIdx !== -1 ? args[partitionIdx + 1] : null;
const nermSpecsIdx  = args.indexOf("--nerm-specs");
const nermSpecsDir  = nermSpecsIdx !== -1 ? args[nermSpecsIdx + 1] : null;

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
  // resources/ holds only the documentation templates. Every other template
  // falls back to the one built into the generator.
  const config = [
    `templateDir: ${TEMPLATE_DIR}`,
    `files:`,
    `  api_doc.mustache:`,
    `    templateType: APIDocs`,
    `    destinationFilename: .md`,
    `  model_doc.mustache:`,
    `    templateType: ModelDocs`,
    `    destinationFilename: .md`,
    `  developerSite_code_examples.mustache:`,
    `    templateType: APIDocs`,
    `    destinationFilename: developerSite_code_examples.yaml`,
    `  docs_methods_index.mustache:`,
    `    templateType: SupportingFiles`,
    `    destinationFilename: docs/Methods/Index.md`,
    `  docs_models_index.mustache:`,
    `    templateType: SupportingFiles`,
    `    destinationFilename: docs/Models/Index.md`,
    `npmName: "${NPM_NAME}"`,
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
      "--global-property", "skipFormModel=false,apiDocs=true,modelDocs=true",
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
// Generic API package  (sdk-output/generic)
//
// The generic API is one service that can call any Identity Security Cloud
// endpoint by path, including endpoints this SDK does not model yet. It is built
// from sdk-resources/generic-api.yaml instead of from a partition under apis/, so
// it takes no part in partition discovery, version combining or stale cleanup.
//
// Two things make it work with the runtime configuration of the Angular SDK:
//   1. generic-api.yaml declares a relative server ("/"), so the generated
//      basePath is empty and sailpointInterceptor prepends the tenant base URL.
//   2. patchGenericPathEncoding() below replaces the generated path encoder,
//      because the default one destroys multi-segment paths.
// ---------------------------------------------------------------------------

// The generator encodes every path parameter with encodeURIComponent. For the
// generic `path` parameter that is wrong: it turns the slashes of a multi-segment
// path ("v2025/accounts/1234") into %2F and the request fails. This helper encodes
// each segment on its own, so the slashes between segments survive.
const GENERIC_PATH_HELPER = `
/**
 * Encode the \`path\` parameter of a generic request.
 *
 * \`path\` is everything after the tenant base URL, including the API version
 * segment. For example \`v2025/accounts\` or \`beta/sources/2c918085/schemas\`.
 * Leading and trailing slashes are optional.
 */
function encodeGenericPath(value: string): string {
    const segments = String(value).split('/').filter((segment) => segment.length > 0);
    return segments.map((segment) => encodeURIComponent(segment)).join('/');
}
`;

function patchGenericPathEncoding(outputDir) {
  const servicePath = path.join(outputDir, "api", "generic.service.ts");
  if (!fs.existsSync(servicePath)) {
    throw new Error(`generic.service.ts not found at ${servicePath}`);
  }

  let content = fs.readFileSync(servicePath, "utf8");

  // Object literal of the path parameter contains no nested braces, so matching
  // up to the first closing brace is exact.
  const encodeCall = /this\.configuration\.encodeParam\(\{name: "path",[^}]*\}\)/g;
  const found = content.match(encodeCall) || [];
  if (found.length === 0) {
    throw new Error("no encodeParam call for the path parameter found in generic.service.ts");
  }
  content = content.replace(encodeCall, "encodeGenericPath(path)");

  const importAnchor = "import { BaseService } from '../api.base.service';";
  if (!content.includes(importAnchor)) {
    throw new Error("import anchor not found in generic.service.ts");
  }
  content = content.replace(importAnchor, importAnchor + "\n" + GENERIC_PATH_HELPER);

  fs.writeFileSync(servicePath, content, "utf8");
  return { patched: found.length };
}

function buildGenericPackage() {
  const outputDir = path.join(SDK_OUTPUT, GENERIC_DIR);

  for (const [label, file] of [["spec", GENERIC_SPEC], ["config", GENERIC_CONFIG]]) {
    if (!fs.existsSync(file)) {
      return { ok: false, step: "setup", output: `generic ${label} not found at ${file}` };
    }
  }

  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }

  const gen = spawnSync(
    "java",
    [
      "-jar", JAR,
      "generate",
      "-i", GENERIC_SPEC,
      "-g", "typescript-angular",
      "-o", outputDir,
      "--global-property", "skipFormModel=false",
      "--config", GENERIC_CONFIG,
    ],
    { encoding: "utf8" }
  );
  if (gen.status !== 0) {
    return {
      ok: false,
      step: "generation",
      output: [gen.stdout, gen.stderr].filter(Boolean).join("\n"),
    };
  }

  const post = runPostscript(outputDir);
  if (!post.ok) {
    return {
      ok: false,
      step: "postscript",
      output: [post.stdout, post.stderr].filter(Boolean).join("\n"),
    };
  }

  let patched;
  try {
    patched = patchGenericPathEncoding(outputDir).patched;
  } catch (err) {
    return { ok: false, step: "path-encoding", output: String(err.stack || err) };
  }

  // Marker file, so the generic package is recognisable without relying on its name.
  fs.writeFileSync(path.join(outputDir, ".sdk-generic"), GENERIC_DIR, "utf8");

  return { ok: true, outputDir, patched };
}

// ---------------------------------------------------------------------------
// NERM packages  (sdk-output/nerm, sdk-output/nermv2025)
// ---------------------------------------------------------------------------

// Locate the nerm/ directory of the api-specs checkout. The partition build
// receives api-specs/idn/apis, and nerm/ is a sibling of idn/.
function resolveNermSpecsDir() {
  if (nermSpecsDir) return path.resolve(nermSpecsDir);
  if (apisDir) {
    const sibling = path.resolve(apisDir, "..", "..", "nerm");
    if (fs.existsSync(sibling)) return sibling;
  }
  return path.join(SDK_ROOT, "api-specs", "nerm");
}

// The NERM specification declares an absolute server URL with a tenant variable,
// which the generator reduces to an empty basePath. Write the sentinel prefix in
// its place, so every request from the package is routed to the NERM host.
function patchNermBasePath(outputDir, basePath) {
  const baseServicePath = path.join(outputDir, "api.base.service.ts");
  if (!fs.existsSync(baseServicePath)) {
    throw new Error(`api.base.service.ts not found at ${baseServicePath}`);
  }

  const content = fs.readFileSync(baseServicePath, "utf8");
  const emptyBasePath = "protected basePath = '';";
  if (!content.includes(emptyBasePath)) {
    throw new Error(`expected \`${emptyBasePath}\` in ${baseServicePath}`);
  }

  fs.writeFileSync(
    baseServicePath,
    content.replace(emptyBasePath, `protected basePath = '${basePath}';`),
    "utf8"
  );
}

function buildNermPackage(variant) {
  const specsDir  = resolveNermSpecsDir();
  const spec      = path.join(specsDir, ...variant.specPath);
  const outputDir = path.join(SDK_OUTPUT, variant.packageDir);

  if (!fs.existsSync(spec)) {
    return {
      ok: false,
      step: "setup",
      output: `NERM specification not found at ${spec}\n\n` +
              `Clone the specifications with \`make specs\`, or point at an existing\n` +
              `checkout with --nerm-specs <path-to-api-specs>/nerm.`,
    };
  }

  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }

  // The NERM specification is fed to the generator directly, not through
  // redocly. Redocly renames the duplicated schemas (RiskRule-2, RiskRule-3),
  // and the generator then rejects the bundle as invalid.
  const gen = spawnSync(
    "java",
    [
      "-jar", JAR,
      "generate",
      "-i", spec,
      "-g", "typescript-angular",
      "-o", outputDir,
      "--global-property", "skipFormModel=false",
      "--config", variant.config,
      "--model-name-suffix", variant.modelSuffix,
    ],
    { encoding: "utf8" }
  );
  if (gen.status !== 0) {
    return {
      ok: false,
      step: "generation",
      output: [gen.stdout, gen.stderr].filter(Boolean).join("\n"),
    };
  }

  const post = runPostscript(outputDir);
  if (!post.ok) {
    return {
      ok: false,
      step: "postscript",
      output: [post.stdout, post.stderr].filter(Boolean).join("\n"),
    };
  }

  try {
    patchNermBasePath(outputDir, variant.basePath);
  } catch (err) {
    return { ok: false, step: "base-path", output: String(err.stack || err) };
  }

  fs.writeFileSync(path.join(outputDir, ".sdk-nerm"), variant.packageDir, "utf8");

  return { ok: true, outputDir, packageDir: variant.packageDir };
}

// Build every NERM variant and report each one through `results`.
function buildNermPackages(results) {
  for (const variant of NERM_VARIANTS) {
    console.log(`\n${"=".repeat(60)}`);
    console.log(`  Building: ${variant.name}`);
    console.log(`${"=".repeat(60)}`);

    const built = buildNermPackage(variant);
    results.total += 1;

    if (built.ok) {
      results.success.push(variant.name);
      console.log(`  ✓ ${variant.name} → sdk-output/${built.packageDir}/ (basePath ${variant.basePath})`);
    } else {
      console.error(`  ✗ ${variant.name} failed at ${built.step}`);
      console.error(built.output);
      results.failed.push({
        partition: variant.name,
        step: built.step,
        reportPath: path.relative(SDK_ROOT, variant.config),
      });
    }
  }
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

  // The generic API is exported by explicit name, never with `export *`. Its
  // package carries its own copies of the shared runtime files (configuration.ts,
  // param.ts, variables.ts), which would collide with the partition packages.
  // NERM services are exported by name for the same reason as the generic API:
  // each NERM package carries its own copy of the shared runtime files. The
  // service class names already end in NERMService or NERMV2025Service, so they
  // never collide with the Identity Security Cloud services.
  const nermBlocks = [];
  for (const variant of NERM_VARIANTS) {
    const dir = path.join(SDK_OUTPUT, variant.packageDir);
    if (!fs.existsSync(path.join(dir, ".sdk-nerm"))) continue;

    const classes = collectServiceClasses(dir).sort();
    if (classes.length === 0) continue;

    const lines = classes.map(
      c => `export { ${c} } from "./${variant.packageDir}/api/api";`
    );
    // Alias the Configuration of the package, so callers can build one without
    // reaching into the sub-path. Mirrors the TypeScript SDK.
    const alias = variant.modelSuffix === "NERM" ? "Nerm" : "NermV2025";
    lines.push(
      `export { Configuration as Configuration${alias} } from "./${variant.packageDir}/configuration";`,
      `export type { ConfigurationParameters as ConfigurationParameters${alias} } from "./${variant.packageDir}/configuration";`
    );
    nermBlocks.push(`// ${variant.packageDir} — ${classes.length} service(s)\n` + lines.join("\n"));
  }
  const nermExports = nermBlocks.length > 0
    ? nermBlocks.join("\n\n")
    : "// (no NERM packages built — run the build with the api-specs checkout available)";

  const hasGeneric = fs.existsSync(path.join(SDK_OUTPUT, GENERIC_DIR, "api", "generic.service.ts"));
  const genericExports = hasGeneric
    ? [
        `export { GenericService } from "./${GENERIC_DIR}/api/generic.service";`,
        `export type {`,
        `  GenericGetRequestParams,`,
        `  GenericPostRequestParams,`,
        `  GenericPutRequestParams,`,
        `  GenericPatchRequestParams,`,
        `  GenericDeleteRequestParams,`,
        `} from "./${GENERIC_DIR}/api/generic.service";`,
        `export type { GenericResponse } from "./${GENERIC_DIR}/model/genericResponse";`,
      ].join("\n")
    : `// (sdk-output/${GENERIC_DIR}/ not built — run the build to generate the generic API)`;

  const fileContent = `/* tslint:disable */
/* eslint-disable */
// Code generated by build-versioned-sdk.js; DO NOT EDIT.
//
// Named imports — version-explicit service class names:
//   import { AccountsV1Service } from "@sailpoint/angular-sdk"
//
// Namespace — resource-named, version-agnostic:
//   import { SailPointAngular } from "@sailpoint/angular-sdk"
//   const svc = new SailPointAngular.AccountsService(config, basePath, httpClient)
//
// Generic API — calls any endpoint by path, including endpoints this SDK does
// not model yet:
//   import { GenericService } from "@sailpoint/angular-sdk"
//
// NERM — a separate product on a separate host. Set nermBaseUrl in
// provideSailPoint() and the interceptor routes these services for you:
//   import { AttributesNERMService } from "@sailpoint/angular-sdk"
//
// Models and Configuration — import them from the partition sub-path:
//   import type { Account } from "@sailpoint/angular-sdk/accounts/model/account"
//   import { Configuration } from "@sailpoint/angular-sdk/accounts/configuration"
//
// Models are not re-exported from this file on purpose. Redocly inlines the
// shared error models into every partition, and each partition package carries
// its own copy of the generated runtime files (Configuration, Param,
// COLLECTION_FORMATS). \`export *\` across more than 100 partitions therefore
// reports every one of those names as ambiguous (TS2308) and the build fails.

// --- Partition imports (private _ alias) ---
${importLines.join("\n")}

// --- Named exports (versioned service class names) ---
${exportLines.join("\n")}

${combinedBlocks.length > 0 ? "// --- Combined multi-version service classes ---\n" + combinedBlocks.join("\n") : ""}
// --- SailPointAngular namespace (resource-named, all versions combined) ---
export const SailPointAngular = {
${nsLines.join("\n")}
};

// --- Generic API ---
${genericExports}

// --- NERM (Non-Employee Risk Management) ---
${nermExports}

// --- SailPoint SDK utilities ---
export { SailPointConfigService, SAILPOINT_CONFIG_PARAMS, NERM_URL_PREFIX } from './sailpoint-config.service';
export type { SailPointParams, AccessTokenProvider, SailPointWindowConfig, SailPointConfigProvider } from './sailpoint-config.service';
export { sailpointInterceptor } from './sailpoint.interceptor';
export { provideSailPoint } from './sailpoint.providers';
export { Paginator } from './paginator';
export type { PaginationParams } from './paginator';
`;

  fs.writeFileSync(path.join(SDK_OUTPUT, "index.ts"), fileContent, "utf8");
  console.log(`  Wrote index.ts — ${allServices.length} service(s), ${byResource.size} resource(s) in SailPointAngular namespace`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  if (genericOnly || nermOnly) {
    if (!fs.existsSync(JAR)) {
      console.error(`Error: openapi-generator-cli.jar not found at ${JAR}`);
      process.exit(1);
    }

    const results = { total: 0, success: [], failed: [] };

    if (genericOnly) {
      console.log("\n[GENERIC] Building the generic API package ...");
      const built = buildGenericPackage();
      results.total += 1;
      if (built.ok) {
        results.success.push("generic");
        console.log(`  ✓ generic → sdk-output/${GENERIC_DIR}/ (${built.patched} path encoder(s) patched)`);
      } else {
        console.error(`  ✗ generic API failed at ${built.step}`);
        console.error(built.output);
        results.failed.push({ partition: "generic", step: built.step });
      }
    }

    if (nermOnly) {
      buildNermPackages(results);
    }

    console.log("\n[INDEX] Regenerating sdk-output/index.ts ...");
    generateIndexTs();

    if (results.failed.length > 0) process.exit(1);
    return;
  }

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

  // Build the generic API package (independent of the apis/ partitions)
  console.log(`\n${"=".repeat(60)}`);
  console.log("  Building: generic API");
  console.log(`${"=".repeat(60)}`);
  const generic = buildGenericPackage();
  results.total += 1;
  if (generic.ok) {
    results.success.push("generic");
    console.log(`  ✓ generic → sdk-output/${GENERIC_DIR}/ (${generic.patched} path encoder(s) patched)`);
  } else {
    // The generic API is not a partition, so its spec is sdk-resources/generic-api.yaml
    // rather than a directory under apis/. Print the error instead of writing a
    // partition-shaped report that would point at a path that does not exist.
    console.error(`  ✗ generic API failed at ${generic.step}`);
    console.error(generic.output);
    results.failed.push({
      partition: "generic",
      step: generic.step,
      reportPath: path.relative(SDK_ROOT, GENERIC_SPEC),
    });
  }

  // Build the NERM packages (separate product, separate host)
  buildNermPackages(results);

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
