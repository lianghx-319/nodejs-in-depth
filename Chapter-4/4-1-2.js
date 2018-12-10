// 偏函数用法
const toString = Object.prototype.toString;
const isType = (type) => (obj) => toString.call(obj) == `[object ${type}]`;
const isString = isType("String");
const isArray = isType("Array");
console.log(isArray([1, 2, 3]))
console.log(isArray("asdf"))
console.log(isString("adfads"))
console.log(isString(123123))