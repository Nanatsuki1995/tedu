/*
var book=[]
//添加元素
book['id'] = 113
book['title'] = '水浒传'
book['price'] = 223
book['pubTime'] = '2001-10-1'
//console.log(book)
//使用for-in遍历
console.log(typeof(book))
for (var key in book)
{
	console.log(key+'----'+book[key])
}

var menu=[]
menu[menu.length] = '推荐'
menu[menu.length] = '热点'
menu[menu.length] = '娱乐'
menu[menu.length] = '财经'
for (var i=0; i<menu.length; i++)
{
	console.log(menu[i])
}
console.log(' ')
for (var key in menu)
{
	console.log(menu[key])
}

function getIndex(arr,str){
	for (var i=0; i<arr.length; i++)
	{
		if (arr[i]==str)
		{
			return i
		}
	}
	return -1
}
var res=getIndex(['a','b','c','d'],'e');
console.log(res)

function getAvg(arr){
	var sum=0
	for (var i=0; i<arr.length; i++)
	{
		sum+=arr[i]
	}
	return sum/arr.length
}
var res=getAvg([5000,6000,7000,8000,9000]);
console.log(res)

function getCount(arr,str){
	var count=0
	for (var i=0; i<arr.length; i++)
	{
		if (arr[i]==str)
		{
			count++
		}
	}
	return count
}
var res=getCount(['a','b','b','c','c','c','e','e','e','e'],'e')
console.log(res)

function getMax(arr){
	var max=arr[0]
	for (var i=1; i<arr.length; i++) //程序运行过程中尽量避免无用操作
	{
		if (max<arr[i])
		{
			max=arr[i]
		}
	}
	return max
}
var res=getMax([1,2,3,90,4,5,6])
console.log(res)

var a=1,b=2,c
c=a
a=b
b=c
console.log(a,b)
*/