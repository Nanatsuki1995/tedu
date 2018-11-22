const express = require('express')
var server = express()
server.listen(3000)

//拦截特定的路由
//拦截请求的URL为/detail的路由
server.use('/detail',(req,res,next)=>{
    console.log('查询了是否存在')
    next()
})

server.get('/detail',(req,res,next)=>{
    res.send('详情')
})

//练习
var count = 0
var str
server.use('/view',(req,res,next)=>{
    count++
    str = count.toString()
    next()
})

server.get('/view',(req,res,next)=>{
    res.send('浏览次数：'+str)
})