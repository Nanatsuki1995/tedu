var emp={
	eid:13,
	ename:'Jerry',
	sex:1,
	birthday:'1994-7-20'
}
//检测对象中是否含有salary属性
//有->true  没有->false
//console.log('salary' in emp)
//console.log(emp.hasOwnProperty('ename'))
//如果一个属性的属性值是undefined，说明属性不存在
//console.log(emp.deptId)
//结果是true，不存在；false，存在
console.log(emp.ename==undefined)