const fs = require("fs");
let text = fs.readFileSync("del.txt", "utf-8");
text = text.replace(" browser", "Rohan");
console.log("The content of the file is ");
console.log(text);
console.log("Creating new file");
fs.writeFileSync("rohan.txt", text);
const a = require("a");
let text1 = a.readFileSync("del.txt", "utf-8");

