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

const fixFiles = function (myArray) {
  for (const file of myArray) {
    if (file.endsWith(".ts")) {
      const original = fs.readFileSync(file, "utf8");
      const fixed = fixVersionedModelNames(original);
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
