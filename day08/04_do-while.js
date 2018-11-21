/*var i=0;
do
{
	console.log(i);
	i++;
}
while (i<=10);
var i=50;
do
{
	if (i%2==0)
	{
		console.log(i)
	}
	i--;
}
while (i>=1);
var i=100;
do
{
	console.log(i)
	i-=5;
}
while (i>=70);
var i=0,j=0;
do
{
	j+=i;
	i++;
}
while (i<=100);
alert(j)
var i=0,j=0;
do
{
	if (i%7==0)
	{
		j+=i;
	}
	i++;
}
while (i<=100);
alert(j)
var i=1,j=1;
do
{
	j*=i;
	i++;
}
while (i<=10);
alert(j)
var i=10,j=1;
do
{
	if (i%3==0)
	{
		j*=i;
	}
	i++;
}
while (i<=20);
alert(j)while (true);*/
var passWord;
do
{
	passWord=prompt('请输入密码');
	if (passWord=='123456')
	{
		alert('登录成功')
		break
	}else{
		alert('密码错误')
	}
}
while (true);