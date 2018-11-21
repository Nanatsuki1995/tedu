//函数中的参数
/*
function add(a,b,c = 0) {   //给c设置默认值
    return a+b+c
}
var res = add(2,7,6)
console.log(res)
*/
//模板字符串
/*
var year = 2018
var month = 10
var date = 19
var hours = 10
var minutes = 47
var seconds = 5
console.log(`${year}年${month+1}月${date}日 ${hours}:${minutes}:${seconds<10?'0'+seconds:seconds}`)
*/
var emp = {
    name:'Tom',
    sex:'1',
    birthday:'1995-7-2',
    salary:'8000'
}
console.log(`姓名：${emp.name} 性别：${emp.sex==1?'男':'女'} 生日：${emp.birthday} 工资：${emp.salary}`)
