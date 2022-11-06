let fs = require('fs')

let str = fs.readFileSync("text.txt", "utf-8")
// remove new line character
str = str.normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("\r", "").replace("\n", "")

console.log(str)