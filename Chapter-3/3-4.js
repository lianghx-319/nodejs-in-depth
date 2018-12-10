// 非I/O的异步API
const noop = function(){};
// 3-4-1 定时器
console.log("normal 1")
let timeout = setTimeout(() => console.log("setTimeout running"), 10);
let immediate = setImmediate(() => console.log("setImmediate running"));
console.log("normal 2")

// 3-4-2 process.nextTick()
process.nextTick(() => console.log("nextTick running"))
console.log("normal 3")