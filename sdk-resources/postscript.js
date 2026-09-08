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
    }
  }
};

const outputDir = process.argv[2];

let myArray = [];
getAllFiles(outputDir, myArray);

fixFiles(myArray);
