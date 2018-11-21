/*
//距离2018年圣诞节还有多长时间-当前时间计算机元年时间
var now=new Date()
var terget=new Date('2018-12-25 00:00:00')
//var differ=terget.getTime()-now.getTime()
//console.log(differ)
//两个对象相减，返回的是两个对象相差毫秒数
var differ=terget-now
differ=Math.floor(differ/1000)
//获取相差的天数
var day=Math.floor(differ/(24*60*60))
//获取天数后，相差的小时
//相差的秒数和一天的秒数取余，得到的结果是不满一天的秒数
var hours=differ%(24*60*60)
hours=Math.floor(hours/(60*60))
var minutes=differ%(60*60)
minutes=Math.floor(minutes/60)
var seconds=differ%60
console.log('距离2018年圣诞节还有 '+day+'天'+hours+'小时'+minutes+'分'+seconds+'秒')
*/
var now=new Date()
var deadline=new Date(now)
deadline.setFullYear(now.getFullYear()+3)
var remind1=new Date(deadline)
remind1.setMonth(deadline.getMonth()-1)
var remind=new Date(remind1)
//console.log(remind1.getDay())
switch (remind1.getDay())
{
case 0:remind.setDate(remind1.getDate()-2)
	break
case 6:remind.setDate(remind1.getDate()-1)
	break
default:remind=remind1
	break
}
console.log('入职时间：'+now.toLocaleDateString())
console.log('到期时间：'+deadline.toLocaleDateString())
console.log('提醒时间：'+remind.toLocaleDateString())