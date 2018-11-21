/*
var person1={
	name:'Tom',
	age:18
}
//复制person1的地址给person2
//此时两个变量指向同一个地址
//无论是用哪一个变量改变对象中的属性值，另一个也会发生变化
var person2=person1
//person1.name='Jerry'
person2.age=20
console.log(person1.age)
*/
var a=1
var b=a
a=3
console.log(b)