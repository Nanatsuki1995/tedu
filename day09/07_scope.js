/*function fn(){
	console.log(1)
}
//fn()
function fun(){
	fn()//在函数内部可以调用全局函数
	console.log(2)
}
fun()
function fn(){
	//创建局部函数
	function fn1(){
		console.log(1)
	}
	fn1()
}
fn()
var a=10
function fn(){
	//var a=0
	function fn1(){
		//var a=1
		function fn2(){
			//var a=2
			function fn3(){
				//var a=3
				console.log(a)
			}
			fn3()
		}
		fn2()
	}
	fn1()
}
fn()*/