/*//匿名函数：没有名称的函数
//把创建的函数的地址保存到变量fn中
var fn=function (){
	console.log(1)
}
//fn成为了匿名函数名称
fn()*/
var sum=function(){
	var i=0,j=0
	for (i=0;i<=100 ;i++ )
	{
		j+=i
	}
	return j
}
var res=sum()
console.log(res)