/*add(3,4)
function add(a,b){
	console.log(a+b)
}*/
//先提升函数声明
//再提升变量声明
//如果函数的名称和var声明的变量的名称一致，则变量中的值会覆盖函数
function fun(){
	console.log(1)
}
//var fun=10
fun()
console.log(typeof(fun))