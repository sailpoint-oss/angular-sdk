const fs = require("fs");
const path = require("path");

const getAllFiles = function (dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });
  return arrayOfFiles;
};

// When an OpenAPI schema name already contains a version suffix (e.g. AccessRequestConfigV2),
// the generator lowercases it to "accessrequestconfigv2" and then appends the
// model suffix, producing "Accessrequestconfigv2". This function corrects those
// names back to "AccessrequestconfigV2":
//   Pattern: word ending in  v<digits>  where the V was originally uppercase
const fixVersionedModelNames = function (content) {
  return content.replace(/([A-Z]\w*)v(\d+)\b/g, "$1V$2");
};

// The generator builds both the import name and the import path from the raw
// data type of a property. When a schema composes a named type with an inline
// object (allOf: [ConnectedObjectType, {type: object}]), that data type is
// "ConnectedObjectType &amp; object" and the emitted import is not valid
// TypeScript:
//   import { ConnectedObjectType &amp; object } from './connectedObjectType  object';
// Only the first named type is a real module, so keep that one. The property
// declaration in the body is already correct, because the template does not
// escape it there.
const fixComposedImports = function (content) {
  return content.replace(
    /import \{ (\w+) (?:&amp;|&) [^}]*\} from '\.\/(\w+)[^']*';/g,
    (_, typeName, moduleBase) => `import { ${typeName} } from './${moduleBase}';`
  );
};

// With useSingleRequestParameter, the generator declares one local per request
// parameter. A specification parameter named "options" therefore shadows the
// generated "options" argument that carries the HTTP call options. That is a
// duplicate identifier (TS2300), and it is also wrong: "options?.context" then
// reads the specification parameter instead of the HTTP call options.
//
// Rename the local and every reference to it. The three forms the generator uses
// to read the HTTP call options (httpHeaderAccept, context, transferCache) are
// left alone, so they resolve to the method argument again.
const SHADOWED_OPTIONS = "const options = requestParameters?.options;";

const fixShadowedOptionsParam = function (content) {
  if (!content.includes(SHADOWED_OPTIONS)) return content;

  return content
    .replaceAll(SHADOWED_OPTIONS, "const requestOptions_ = requestParameters?.options;")
    .replace(/if \(options !== undefined\)/g, "if (requestOptions_ !== undefined)")
    .replace(/JSON\.stringify\(options\)/g, "JSON.stringify(requestOptions_)")
    .replace(/String\(options\)/g, "String(requestOptions_)")
    .replace(/<any>options\b/g, "<any>requestOptions_");
};

// ---------------------------------------------------------------------------
// Documentation fixes (applied to the generated .md files)
// ---------------------------------------------------------------------------

// The Angular generator rewrites operation.path into the expression it builds the
// URL with, so the path column of the method table reads
//   /accounts/v1/${this.configuration.encodeParam({name: "id", ...})}
// Put the OpenAPI path parameter back, which is what the reader expects.
const fixDocPaths = function (content) {
  return content.replace(
    /\$\{this\.configuration\.encodeParam\(\{name: "(\w+)"[^}]*\}\)\}/g,
    (_, paramName) => `{${paramName}}`
  );
};

// The developer site separates the version letter from its number in a slug, so
// /docs/api/create-account-v1 has to become /docs/api/create-account-v-1.
const fixApiSpecLinks = function (content) {
  return content.replace(
    /\[API Spec\]\(https:\/\/developer\.sailpoint\.com\/docs\/api\/([^)]+)\)/g,
    (_, slug) => `[API Spec](https://developer.sailpoint.com/docs/api/${slug.replace(/-v(\d+)$/, '-v-$1')})`
  );
};

// ---------------------------------------------------------------------------
// Documentation layout
// ---------------------------------------------------------------------------

// Every service class of the package, read from api/<name>.service.ts. The
// generator writes the method docs and the model docs to the same directory with
// the same .md extension, so this set is what tells them apart.
const collectServiceDocNames = function (outputDir) {
  const apiDir = path.join(outputDir, "api");
  const names = new Set();
  if (!fs.existsSync(apiDir)) return names;

  for (const file of fs.readdirSync(apiDir)) {
    if (!file.endsWith(".service.ts")) continue;
    const match = fs.readFileSync(path.join(apiDir, file), "utf8").match(/^export class (\w+) /m);
    if (match) names.add(match[1]);
  }
  return names;
};

// Merge the per-service code example files into one overlay for the developer
// site, then remove the originals.
const OVERLAY_NAME = "angular_code_examples_overlay.yaml";

const mergeCodeExampleFiles = function (docsExamplesDir) {
  if (!fs.existsSync(docsExamplesDir)) return;

  const files = fs.readdirSync(docsExamplesDir)
    .filter(f => f.endsWith(".yaml") && f !== OVERLAY_NAME)
    .sort();
  if (files.length === 0) return;

  let merged = "";
  for (const file of files) {
    const filePath = path.join(docsExamplesDir, file);
    merged += fs.readFileSync(filePath, "utf8");
    fs.unlinkSync(filePath);
  }

  fs.writeFileSync(path.join(docsExamplesDir, OVERLAY_NAME), merged, "utf8");
};

// The generator writes every doc to the root of the package. Sort them into
//   docs/Methods/<ServiceName>.md   one per service, plus Index.md
//   docs/Models/<ModelName>.md     one per model, plus Index.md
//   docs/Examples/<overlay>.yaml   the merged developer site code examples
// README.md stays at the root of the package, where it belongs.
const organiseDocs = function (outputDir) {
  const docsMethodsDir  = path.join(outputDir, "docs", "Methods");
  const docsModelsDir   = path.join(outputDir, "docs", "Models");
  const docsExamplesDir = path.join(outputDir, "docs", "Examples");

  const serviceNames = collectServiceDocNames(outputDir);

  fs.mkdirSync(docsMethodsDir,  { recursive: true });
  fs.mkdirSync(docsModelsDir,   { recursive: true });
  fs.mkdirSync(docsExamplesDir, { recursive: true });

  for (const file of fs.readdirSync(outputDir)) {
    const src = path.join(outputDir, file);
    if (fs.statSync(src).isDirectory()) continue;

    if (file.endsWith("developerSite_code_examples.yaml")) {
      fs.renameSync(src, path.join(docsExamplesDir, file));
      continue;
    }

    if (!file.endsWith(".md") || file === "README.md") continue;

    // <ServiceName>developerSite_code_examples.yaml is already handled above, so
    // any remaining .md is either a method doc or a model doc.
    const base = file.slice(0, -".md".length);
    const target = serviceNames.has(base) ? docsMethodsDir : docsModelsDir;
    fs.renameSync(src, path.join(target, file));
  }

  mergeCodeExampleFiles(docsExamplesDir);
};

const fixFiles = function (myArray) {
  for (const file of myArray) {
    if (file.endsWith(".ts")) {
      const original = fs.readFileSync(file, "utf8");
      const fixed = fixShadowedOptionsParam(
        fixComposedImports(fixVersionedModelNames(original))
      );
      if (fixed !== original) {
        fs.writeFileSync(file, fixed, "utf8");
      }
    } else if (file.endsWith(".md")) {
      const original = fs.readFileSync(file, "utf8");
      const fixed = fixApiSpecLinks(fixDocPaths(fixVersionedModelNames(original)));
      if (fixed !== original) {
        fs.writeFileSync(file, fixed, "utf8");
      }
    } else if (file.endsWith("developerSite_code_examples.yaml")) {
      const original = fs.readFileSync(file, "utf8");
      const fixed = fixDocPaths(fixVersionedModelNames(original));
      if (fixed !== original) {
        fs.writeFileSync(file, fixed, "utf8");
      }
    }
  }
};

const outputDir = process.argv[2];

let myArray = [];
getAllFiles(outputDir, myArray);

fixFiles(myArray);
organiseDocs(outputDir);
