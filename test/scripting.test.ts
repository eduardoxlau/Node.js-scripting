import { getPath, validatRegExp } from "./../src/scripting";

const folders = [
  "./folders/folder1/file.js",
  "./folders/folder1/folder11/file.js",
  "./folders/folder2/file.txt",
  "./folders/folder2/folder22/file.js",
];
const filterFolders = [
  "./folders/folder1/file.js",
  "./folders/folder1/folder11/file.js",
  "./folders/folder2/folder22/file.js",
];

describe("test scripting functions", () => {
  it("should return folders in current path", () => {
    expect(getPath("./folders")).toEqual(folders);
  });
  it("should filter folder according to regular expression", () => {
    expect(validatRegExp(folders, ".js$")).toEqual(filterFolders);
  });
});
