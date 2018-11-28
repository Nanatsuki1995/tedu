/*for (var i=1 ;i<=10 ;i++ )
{
	console.log(i)
}
var j=0
for (var i=1;i<=100 ;i++ )
{
	j+=i;
}
console.log(j)
for (var i=20;i<=50 ;i++ )
{
	if (i%2==1)
	{
		console.log(i)
	}
}
for (var i=80;i>=50 ;i-=3 )
{
	console.log(i)
}
for (var i=1,j=1;i<=10 ;i++ )
{
	j*=i
}
console.log(j)
for (var i=2000;i<=2100;i++ )
{
	if (i%4==0 && i%100!=0 || i%400==0)
	{
		console.log(i)
	}
}
var j='';
for (var i=0;i<5 ;i++ )
{
	j+='*';
	console.log(j)
}*/
var j=5,str='',product;
for (var i=1;i<=9 ;i++ )
{
	product=i*j;
	str+=i+'*5='+product+' ';
}
console.log(str)