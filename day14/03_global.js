var a = 1
function fn() {
    console.log(123)
}
//a和fn不是全局对象下的属性和方法
//在一个文件中，声明的变量和函数都属于局部变量和局部函数
// console.log(global.a)
// global.fn()