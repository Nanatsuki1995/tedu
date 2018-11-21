console.log('08_1.js')
//引入08_2.js模块
// ./ 同一级目录
var obj = require('./08_2.js')
//console.log(obj)
//调用模块中函数
obj.fn()
console.log(obj.a)
