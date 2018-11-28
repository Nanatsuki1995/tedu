/*var money1=prompt('balance');
money1=parseInt(money1);
var money2=prompt('Total');
money2=parseInt(money2);
if(money1>money2){
	alert('success')
}else{
	alert('fail')
}
var inf=prompt('Personality signature');
if(!inf){
	alert('lazy bone')
}else{
	alert(inf)
}
var inf=prompt('Personality signature');
inf=='' ? alert('lazy bone') : alert(inf);
var price=prompt('Please input price'),count=prompt('Please input count'),total,balance=600;
price=parseFloat(price),count=parseInt(count);
total=price*count;
if (total>=500)
{
	total=total*0.8
}
console.log(total);
if (total<=balance)
{
	alert('Success')
}else{
	alert('Fail')
}
var type=prompt();
if (type=='群众')
{
	console.log('这个人是群众')
}else if (type=='团员')
{
	console.log('这个人是团员')
}else if (type=='党员')
{
	console.log('这个人是党员')
}else {
		console.log('非法输入')
	}
var status=prompt('请输入状态码')
if (status==1)
{
	alert('等待付款')
}else if (status==2)
{
	alert('等待发货')
}else if (status==3)
{
	alert('运输中')
}else if (status==4)
{
	alert('已签收')
}else if (status==5)
{
	alert('已取消')
}else{
	alert('非法的状态')
}
var score=prompt('请输入分数')
score=parseInt(score);
if (score>100)
{
	alert('非法的分数')
}else if (score>=90)
{
	alert('优秀')
}else if (score>=80)
{
	alert('良好')
}else if (score>=70)
{
	alert('中等')
}else if (score>=60)
{
	alert('及格')
}else if (score>=0)
{
	alert('不及格')
}else {
	alert('非法的分数')
}*/
var deposit=prompt('请输入你的存款');
if (deposit<0)
{
	alert('非法输入')
}else if (deposit<10)
{
	alert('您是普通客户')
}else if (deposit<100)
{
	alert('您是白银客户')
}else if (deposit<1000)
{
	alert('您是黄金客户')
}else {
	alert('您是钻石客户')
}