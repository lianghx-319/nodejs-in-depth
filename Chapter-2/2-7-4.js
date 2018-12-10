// 兼容多种模块规范

(function(name, definition) {
    // 检测上下文环境是否为AMD或CMD
    var hasDefine = typeof define === "function",
        hasExports = typeof module !== "undefined" && module.exports;

    if (hasDefine) {
        // AMD或CMD环境
        define(definition);
    } else if (hasExports) {
        // 定义为普通Node模块
        module.exports = definition()
    } else {
        // 将模块的执行结果挂在window变量中
        this[name] = definition()
    }
})("hello", function() {
    var hello = function () {}
    return hello;
})