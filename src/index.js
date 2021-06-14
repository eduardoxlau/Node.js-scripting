"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scripting_1 = require("./scripting");
var regExp = process.argv.slice(2)[1];
var rootPath = "./folders";
var files = scripting_1.getPath(rootPath);
scripting_1.validatRegExp(files, regExp).forEach(function (file) { return console.log(file); });
