/*function getN(n){
	if (n==0)
	{
		return 0
	}else if (n==1)
	{
		return 1
	}else{
		return getN(n-2)+getN(n-1)
	}
}
var res=getN(10)
console.log(res)*/
function fib(n){
	if (n==1 || n==2)
	{
		return 1
	}
	return fib(n-1)+fib(n-2)
}
var res=fib(10)
console.log(res)