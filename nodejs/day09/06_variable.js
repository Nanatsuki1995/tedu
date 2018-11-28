/*console.log(a)
//变量提升
var a=1//var a会提升到前边，而a=1还是在原来的位置
function fn(){
	console.log(b)
	var b=2
}
fn()
var a=1
function fn(a){
	console.log(1+a)
}
fn(2)
var a=1
function fn(){
	//var a;//undefined
	//存在变量提升
	var a=a+3;//a=undefined+3
	console.log(a);
}
fn()
console.log(a)*/