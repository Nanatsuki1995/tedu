/*for (var j=1;j<=9 ;j++ )
{
	for (var i=1,str='';i<=8 ;i++ )
	{
		str+='*'
	}
	console.log(str)
	console.log('')
}*/
for (var j=1;j<=9 ;j++)
{
	for (var i=1,str='';i<=j ;i++ )
	{
		str=str+' '+i+'*'+j+'='+i*j
	}
	console.log(str)
}