/*
//全局函数
console.log(global.parseInt(3.14))
//一次性定时器
var timer = setTimeout(function () {
    console.log('boom')
},3000)
//清除
clearTimeout(timer)

//周期性定时器
var timer = setInterval(function () {
    console.log('dididi')
},3000)
//清除
clearInterval(timer)

var i = 0
var timer = setInterval(function () {
    if (i == 2) {
        clearInterval(timer)
    }
    console.log('hello')
    i++
},3000)
*/
//立即执行
var timer = setImmediate(function () {
    console.log('dida2')
})
clearImmediate(timer)
process.nextTick(function () {
    console.log('dida1')
})
console.log('didi')
