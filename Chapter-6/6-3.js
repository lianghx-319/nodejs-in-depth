const fs = require("fs")
const {reslovePath} = require("../utils");
const iconv = require("iconv-lite");

const filePath = reslovePath("../TestFile/zh_CN.txt");

const rs = fs.createReadStream(filePath, {highWaterMark: 11});
let data = "";
let chunks = [];
let size = 0;
rs.on("data", (chunk) => {
    /** 这里的chunk为buffer，下面的代码等于
     *data = data.toString() + chunk.toString()
     *在拼接中文的时候就会出现乱码
     * 床前明��光，
     * ��似地上���。
     * 举���望明月，
     * 低头思故乡��
     * data += chunk;
     */
    /** 正确的拼接buffer */
    chunks.push(chunk);
    size += chunk.length;
})

rs.on("end", () => {
    let buf = Buffer.concat(chunks, size);
    let str = iconv.decode(buf, "utf8")
    console.log(str)
})