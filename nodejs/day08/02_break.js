/*var i=1;
while (true)
{	//当i为11的时候，结束循环
	if (i==11)
	{
		break;
	}
	console.log(i);
	i++;
}
var i=1,j=1;
while (true)
{
	if (i==11)
	{
		break
	}
	j*=i;
	i++;
}
alert(j)*/
var i=prompt('请输入您要猜的数字（答案）'),j;
i=parseInt(i);
while (true)
{
	j=prompt('请输入您的猜测')
	j=parseInt(j);
	if (j==i)
	{
		alert('猜对了')
		break
	}else if (j<i)
	{
		alert('猜小了')
	}else (j>i)
	{
		alert('猜大了')
	}
	
}