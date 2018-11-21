/*
//获取对象的属性值
var emp={
	eid:3,
	ename:'Kate',
	sex:0,
	birthday:'1997-2-1',
	salary:8000
}
//遍历对象中的属性
//key表示对象中的每一个属性
//in后边的表示要遍历的对象
for(var key1 in emp){
	console.log(key1+'---'+emp[key1])
}

//console.log(emp.ename)
//console.log(emp['birthday'])
//不存在的属性，属性值是undefined
//console.log(emp.deptId)
*/
var commodity={
	cid:153,
	title:'多芬',
	price:56,
	isOnSale:true,
	stockCount:500
}
for (var key in commodity)
{
	console.log(key+'——'+commodity[key])
}