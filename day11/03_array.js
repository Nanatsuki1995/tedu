/*
//使用对象字面量
var emp=['Tom','Jerry',20,true]
console.log(emp)

//var car = new Array('大众','奥迪','宝马');
var car = new Array(3)
//往数组中添加元素——使用下标
car[0] = '大众'
car[1] = '奥迪'
car[2] = '宝马'
console.log(car)

var Class = new Array(5)
Class[0] = '语文'
Class[1] = '数学'
Class[2] = '英语'
Class[3] = '物理'
Class[4] = '化学'
Class[5] = '生物'
//console.log(Class)

var ename = new Array(
	'tom',
	'kate',
	'jerry',
	'tony',
	'jack'
)
//在最后添加一个元素
ename[ename.length] = 'andy'
ename[ename.length] = 'richard'
//console.log(ename)

//查看数组中元素的个数
console.log(ename)

var country = new Array()
country[country.length] = 'China'
country[country.length] = 'Japan'
country[country.length] = 'America'
//console.log(country)
//不存在的元素——undefined
console.log(country[3])

var arr = new Array(5)
arr[5] = 'tom'
console.log(arr)
console.log(arr.length)
*/
//创建关联数组
var arr = []
//添加元素
arr['eid']=1
arr['ename']='tom'
console.log(arr)