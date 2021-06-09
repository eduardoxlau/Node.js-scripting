const fs = require("fs");

const regExp = process.argv.slice(2)[0];
const rootPath = "./";
const folders = [];

const getFullPath = (path = rootPath) => {
  const isRootPath = path === rootPath;

  const files = fs.readdirSync(path, {
    withFileTypes: true,
  });

  files.forEach((file) => {
    if (file.isDirectory()) {
      folders.push(path + file.name + "/");
      getFullPath(folders[folders.length - 1]);
    } else {
      if (new RegExp(regExp).test(file.name)) {
        if (isRootPath) {
          folders.push(rootPath + file.name);
        } else {
          folders[folders.length - 1] = path + file.name;
        }
      } else {
        folders.pop();
      }
    }
  });

  return folders;
};

getFullPath().forEach((path) => console.log(path));