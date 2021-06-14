"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatRegExp = exports.getPath = void 0;
var fs = require("fs");
var getPath = function (path, file, files) {
    if (file === void 0) { file = null; }
    if (files === void 0) { files = []; }
    if (!file || file.isDirectory()) {
        var paths = fs.readdirSync(path, {
            withFileTypes: true,
        });
        if (paths.length > 0)
            return paths.reduce(function (accFiles, currFile) {
                var newPath = path + "/" + currFile.name;
                var newFiles = getPath(newPath, currFile, accFiles);
                accFiles = accFiles.concat(newFiles);
                return __spreadArray([], __read(new Set(__spreadArray([], __read(accFiles)))));
            }, []);
    }
    files.push(path);
    return files;
};
exports.getPath = getPath;
var validatRegExp = function (files, regExp) {
    return files.filter(function (file) { return new RegExp(regExp).test(file); });
};
exports.validatRegExp = validatRegExp;
