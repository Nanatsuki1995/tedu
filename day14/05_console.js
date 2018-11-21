//console对象
// global.console.log(123)//打印消息
// global.console.info(123)//打印消息
// global.console.warn(123);//打印警告消息
// global.console.error(123)//打印错误消息
/*
global.console.time('for-loop')
for (let i = 0; i < 10; i++) {

}
//计时结束
global.console.timeEnd('for-loop')
*/
global.console.time('for')
for (let i = 0; i < 10000; i++){

}
global.console.timeEnd('for')
global.console.time('while')
var i = 0
while (i < 10000) {
    i++
}
global.console.timeEnd('while')
global.console.time('do-while')
var j = 0
do{
    j++
}while(j < 10000)
global.console.timeEnd('do-while')