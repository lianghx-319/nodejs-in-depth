// 异步I/O
// nodejs 大部分api都是异步的
const fs = require("fs");
const {reslovePath} = require("../utils")

fs.readFile(reslovePath("../TestFile/abc.txt"), "utf-8", (err, file) => {
    console.log("读取文件完成")
    console.log(file)
})

console.log("发起读取文件")