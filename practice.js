const fs = require("fs");
let text = fs.readFileSync("rohan.txt", "utf-8");
console.log("The content of  the file");
console.log(text);
