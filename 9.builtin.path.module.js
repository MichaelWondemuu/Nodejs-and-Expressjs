const path = require('path');

console.log(__dirname);

console.log(path.sep);
const filePath = path.join(__dirname,'content','subfile','test.txt');
const filePath2 = path.resolve(__dirname,'content','subfile','test.txt');
console.log(filePath);
console.log(filePath2);

