// Buffer
let buf = new Buffer(100);

buf[20] = 4.14
buf[30] = -20
// buffer的元素会限制在0~255之间

console.log(buf[20]);
console.log(buf[30]);