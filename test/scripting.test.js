"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scripting_1 = require("./../src/scripting");
var folders = [
    "./folders/folder1/file.js",
    "./folders/folder1/folder11/file.js",
    "./folders/folder2/file.txt",
    "./folders/folder2/folder22/file.js",
];
var filterFolders = [
    "./folders/folder1/file.js",
    "./folders/folder1/folder11/file.js",
    "./folders/folder2/folder22/file.js",
];
describe("test scripting functions", function () {
    it("should return folders in current path", function () {
        expect(scripting_1.getPath("./folders")).toEqual(folders);
    });
    it("should return 5 for add(2,3)", function () {
        expect(scripting_1.validatRegExp(folders, ".js$")).toEqual(filterFolders);
    });
});
