/*
console.log(1)
//var a=1；语法错误
var a=1
var b={}
//b()
var arr=new Array(-1)
console.log(2)
*/
//尝试执行代码，可能含有错误
console.log(1)
try{
	var arr=new Array(1)
}catch(err){
	//err:捕获的错误信息
	//console.log(err)
	//处理错误的方案
	var arr=new Array(5)
}
console.log(arr)
console.log(2)