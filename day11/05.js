/*
//遍历数组中的元素
var score = [85,92,75,69,80,73,79]
//遍历数组中每一个元素的下标
for (var i=0; i<score.length; i++)
{
	console.log(i+'----'+score[i])
}

var salary = [1500,2500,3500,4500,5500,6500]
var sum=0,avg
for (var i=0; i<salary.length; i++)
{
	sum+=salary[i]
}
avg=sum/salary.length
console.log(avg)
*/
var brand = ['日产','宝马','奔驰','大众']
for (var i=0; i<brand.length; i++)
{
	if (brand[i]=='宝马')
	{
		brand[i]='BMW'
	}
}
console.log(brand)