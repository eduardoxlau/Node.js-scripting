import { getPath, validatRegExp } from "./scripting";

const regExp: string = process.argv.slice(2)[1];
const rootPath: string = "./folders";

const files = getPath(rootPath);

validatRegExp(files, regExp).forEach((file) => console.log(file));
process.exit();
