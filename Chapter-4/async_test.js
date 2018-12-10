// 使用async实现并行异步操作
// 当前异步编程主流处理方式，async/await + promise, 处理并发提高运行效率。
const {memoize} = require("../utils")
let id = 0;
let get = (name, time) => async () => {
    let label = name + id;
    id++;
    console.time(label)
    return await new Promise((reslove, reject) => {
        setTimeout(() => {
            console.timeEnd(label)
            reslove(name)
        }, time)
    })
}

let get5 = get("5s", 5000);
let get2 = get("2s", 2000);
let get3 = get("3s", 3000);
let get10 = get("10s", 10000);

async function serial() {
    console.time("serial")
    let test1 = await get10();
    let test2 = await get5();
    let test3 = await get2();
    let test4 = await get3();
    console.log({test1, test2, test3, test4})
    console.timeEnd("serial")
}

async function parallel() {
    let test1 = memoize(get10);
    let test2 = memoize(get2)
    let test3 = memoize(get3);
    let test4 = memoize(get5);
    console.time("parallel")
    let test = await Promise.all([test1(), test2(), test3(), test4()])
    
    console.log(test)
    console.timeEnd("parallel")
}

Promise.all([parallel(), serial()])