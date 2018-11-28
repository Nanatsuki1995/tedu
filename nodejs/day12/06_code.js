/*
var code='AcmA'
do{
	var str=prompt('AcmA')
	code=code.toUpperCase()
	str
} while(true)

var str='你好world'
//获取字符串的长度
//console.log(str.length)
console.log(str.charAt(str.length-1))
console.log(str.charAt(0).charCodeAt())

var str='javascript'
var count=0
for (i=0; i<str.length; i++)
{
	if (str.charAt(i)=='a')
	{
		count++
	}
}
console.log(count)

var str='javascript'
//console.log(str.indexOf('a',2))
//console.log(str.indexOf('z'))
console.log(str.lastIndexOf('a'))

var str='514948303@qq.com'
if (str.indexOf('@')!=-1)
{
	console.log(true)
}else{
	console.log(false)
}

//截取字符串
var str='javascript'
//console.log(str.slice(4))
//console.log(str.slice(4,7))
console.log(str.slice(-3,-1))

var str='500106199507025411'
var num=parseInt(str.slice(-2))
var year=str.slice(6,10)
var month=parseInt(str.slice(10,12))
var date=parseInt(str.slice(12,14))
if (num%2==0)
{
	console.log(year+'年'+month+'月'+date+'日	'+'女')
}else{
	console.log(year+'年'+month+'月'+date+'日	'+'男')
}

var str='jerry1995@sina.com.cn'
//获取@的下标
var index=str.indexOf('@')
//获取用户名 0~index
var uname=str.slice(0,index)
//获取域名 index+1~
var domain=str.slice(index+1)
console.log('用户名'+uname)
console.log('域名'+domain)

var str='javascript'
//console.log(str.substr(4,3))
//console.log(str.substr(-3,2))
console.log(str.substr(4))

var str='hELlo'
var str1=str.slice(0,1).toUpperCase()
var str2=str.slice(1).toLowerCase()
console.log(str1+str2)

//数组转为字符串
var arr=['a','b','c']
console.log(arr.join('|'))

//将字符串分隔数组
var str='a|b|c'
console.log(str.split('|'))

var str='jerry@qq.com'
arr=str.split('@')
console.log(arr)
*/
var str='hOW arE yOu'
var stri=str.split(' ')
for (i=0; i<stri.length; i++)
{
	var str1=stri[i].slice(0,1).toUpperCase()
	var str2=stri[i].slice(1).toLowerCase()
	stri[i]=str1+str2
}
str=stri.join(' ')
console.log(str)