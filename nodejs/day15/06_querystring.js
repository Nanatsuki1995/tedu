/*
//引入查询字符串模块
const querystring = require('querystring')//对象
var str = 'lid=5&pname=dell'
//获取查询字符串传递的数据
//将查询字符串解析为对象
var obj = querystring.parse(str)
//console.log(obj.lid,obj.pname)
var obj2 = {
    name:'tom',
    age:18,
    sex:1
}
//将对象转换成查询字符串
var str2 = querystring.stringify(obj2)
console.log(str2)
*/
const querystring = require('querystring')
var str = 'wd=电脑&rsv_spt=1&rsv_iqid=0xa28ee7370002761c&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=91619256_hao_pg&rsv_enter=1&oq=dd&inputT=3353&rsv_t=f8f6gVdWcbV5460m4MgweytuLAkFMwtjaXnrfvuaCHXX48xy%2FVr7b6dFC2KjJe7Ovef0BlUS&rsv_sug3=11&rsv_sug1=8&rsv_sug7=100&rsv_pq=f353c6da00029822&rsv_sug2=0&rsv_sug4=4122'
var obj = querystring.parse(str)
console.log(obj.wd)