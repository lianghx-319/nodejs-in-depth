// event & callback
// 事件驱动
const http = require("http");
const qs = require("querystring");

http.createServer((req, res) => {
    let postData = "";
    req.setEncoding("utf-8");
    req.on("data", (chunk) => {
        postData += chunk
    })
    req.on("end", () => res.end(postData))
}).listen(3030)
console.log("server start")
