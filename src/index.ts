import * as fs from "fs";

const regExp: string = process.argv.slice(2)[0];
const rootPath: string = "./folders";

interface File {
  name: string;
  isDirectory: () => Boolean;
}

const getPath = (
  path: string,
  file: File | null = null,
  files: string[] = []
): string[] => {
  if (!file || file.isDirectory()) {
    const paths = fs.readdirSync(path, {
      withFileTypes: true,
    });

    if (paths.length > 0)
      return paths.reduce((accFiles: string[], currFile: File) => {
        const newPath = `${path}/${currFile.name}`;
        const newFiles: string[] = getPath(newPath, currFile, accFiles);
        accFiles = accFiles.concat(newFiles);
        return [...new Set([...accFiles])];
      }, []);
  }
  files.push(path);
  return files;
};
const validatRegExp = (files: string[]) =>
  files.filter((file) => new RegExp(regExp).test(file));

const files = getPath(rootPath);

validatRegExp(files).forEach((file) => console.log(file));
