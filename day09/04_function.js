/*function play(){
	console.log('吃火锅了');
	console.log('吃海鲜了');
	console.log('看表演了');
	return '火锅底料';
}
//函数的返回结果
//过程中带什么回来
var res=play();
console.log(res);
function add(num1,num2){
	//表示在过程中执行了打印
	//不代表返回的结果
	console.log(num1+num2);
	//返回两个数字相加的结果
	return num1+num2;
}
//把函数add的调用结果放到变量中
var res=add(2,3);
console.log(res+'元');
function add(num1,num2,num3){
	return num1+num2+num3
	//return
}
var res=add(1,2,3)
console.log(res)
function getMax(num1,num2){
	if(num1>num2){
		return num1;
	}else{
		return num2;
	}
}
var res=getMax(7,2)
console.log(res)
function getMax(num1,num2,num3){
	if (num1>num2 && num1>num3)
	{
		return num1
	}else if (num2>num1 && num2>num3)
	{
		return num2
	}else{
		return num3
	}
}
var res=getMax(9,8,10)
console.log(res)
var max;
function getMax(num1,num2,num3){
	num1>num2 ? max=num1 : max=num2;
	max>num3 ? max : max=num3;
	return max
}
var res=getMax(20,30,40)
console.log(res)
function isRun(year){
	if (year%4==0 && year%100!=0 || year%400==0)
	{
		return true
	}
	return false
}
var res=isRun(2000)
//console.log(res)
if (res)
{
	console.log(366)
}else{
	console.log(365)	
}
function getStatus(statu1){
	switch (statu1)
	{
	case 1:return '待付款'
	case 2:return '待发货'
	case 3:return '运输中'
	case 4:return '已签收'
	case 5:return '已取消'
	default :return '无法查询'
	}
}
var res=getStatus(1)
console.log(res)*/
