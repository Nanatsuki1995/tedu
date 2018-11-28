/*
//创建Date对象
var d1=new Date('2018/11/11 10:20:30')
var d2=new Date(2018,10,11)//月份的范围是从0~11
var d3=new Date()
var d4=new Date(60*1000)
console.log(d2)

//获取具体日期时间信息
var d1=new Date('2018/11/18 10:40:30')
//对象的方法
//获取
console.log(d1.getFullYear())
console.log(d1.getMonth())//0~11
console.log(d1.getDate())
console.log(d1.getHours())
//getMinutes()/getSeconds()/getMilliseconds
console.log(d1.getDay())//星期日-星期六 0~6

var d1=new Date()
var month=d1.getMonth()+1
function day(){
	switch (d1.getDay())
	{
	case 0:return '星期日'
	case 1:return '星期一'
	case 2:return '星期二'
	case 3:return '星期三'
	case 4:return '星期四'
	case 5:return '星期五'
	case 6:return '星期六'
	}
}
function m(){
	var hours=d1.getHours()
	if (hours<12)
	{
		return '上午'
	}else{
		return '下午'
	}
}
console.log(d1.getFullYear()+'年'+month+'月'+d1.getDate()+'日'+' '+d1.getHours()+'点'+d1.getMinutes()+'分'+d1.getSeconds()+'秒 '+day()+' '+m())
*/
//获取距离计算机元年的毫秒数
console.log(d1.getTime())
//距离2018年圣诞节还有多长时间-当前时间计算机元年时间
