/*function fn(num1){
	//如果实参传递的是一个匿名函数，那么形参就成为了一个函数
	var res=num1()
	console.log(res)
}
//fn(1)
fn(function(){
	console.log('hello')
	console.log('world')
	return 1
})*/
function add(num1,num2){
	return num1()+num2()
}

var res=add(function(){
	return 5
},function(){
	return 6
})
console.log(res)