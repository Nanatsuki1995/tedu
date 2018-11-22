const express = require('express')
const querystring = require('querystring')
var server = express()
server.listen(3000)
server.get('/reg',(req,res)=>{
    res.sendFile(__dirname+'/reg.html')
})
server.post('/myreg',(req,res)=>{
    //获取post请求传递的数据
    //以时间的形式获取表单中数据
    req.on('data',(buf)=>{
        //当有数据传输的时候，格式为buffer数据
        var str = buf.toString()
        //使用查询字符串讲数据解析为对象
        var obj = querystring.parse(str)
        console.log(obj)
        //获取数据后，响应到浏览器
        res.send('注册成功，用户名'+obj.uname)
    })
})