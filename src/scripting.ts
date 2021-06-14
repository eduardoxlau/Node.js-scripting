import * as fs from "fs";

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
    try {
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
    } catch {
      process.exit();
    }
  }
  files.push(path);
  return files;
};
const validatRegExp = (files: string[], regExp: string) =>
  files.filter((file) => new RegExp(regExp).test(file));

export { getPath, validatRegExp };
