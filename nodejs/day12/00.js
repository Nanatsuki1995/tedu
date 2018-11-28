/*
var emp = ['a','b','c','d','e','f','g','h','i']
console.log(emp[Math.floor(Math.random()*emp.length)])

//如何使用ASCII值找到对应的字符
//使用String.fromCharCode()
var str = []
var up=65,down=97,num=0
for (i=0; i<26; i++)
{
	str.push(String.fromCharCode(up))
	up++
}
for (i=0; i<26; i++)
{
	str.push(String.fromCharCode(down))
	down++
}
for (i=0; i<10; i++)
{
	str.push(num)
	num++
}
var str1 = []
for (i=0; i<4; i++)
{
	str1.push(str[Math.floor(Math.random()*str.length)])
}
console.log(str1)
*/
var str='javascript'
//console.log(str.substring(4,7))
//参数中的负数自动转成了0
console.log(str.substring(-3,1))