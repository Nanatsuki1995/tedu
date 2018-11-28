/*
//块级作用域
{
    let a=1
}
//console.log(a)
for (let i = 0; i<10; i++){

}
console.log(i)
*/
//箭头函数
var arr = [8,17,35,23]
// console.log(arr.sort(function(a,b){
//     return a-b
// }))
console.log(arr.sort((a,b)=>b-a))