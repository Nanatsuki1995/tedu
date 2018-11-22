const express = require('express')
var server = express()
server.listen(3000)
/*
server.get('/detail',(req,res)=>{
    // //获取请求的方法
    // console.log(req.method)
    // //获取请求的URL
    // console.log(req.url)
    // //获取请求的头信息
    // console.log(req.headers)
    //获取浏览器以查询字符串传递数据
    console.log(req.query)
    res.send('这是商品详情')
})
*/
server.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/login.html')
})
//请求方法：get，请求url：/mylogin
server.get('/mylogin',(req,res)=>{
    //获取表单中get传递数据（查询字符串形式）
    var obj = req.query
    console.log(obj)
    res.send('注册成功，用户名为'+obj.uname)
})