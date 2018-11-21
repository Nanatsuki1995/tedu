//创建一个人对象
var person={
	name:'Tom',
	age:18,
	sex:'男',
	say:function(){
		//this指代当前的对象
		//console.log('我叫Kate，性别女，年龄28');
		console.log('我的年龄是'+this.age)
	}
}
//调用对象中的方法
person.say()
//var say=function(){}