const express = require('express')
var server = express()
server.listen(3000)
server.get('/index',(req,res)=>{
    res.send('这是首页')
})
server.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/login.html')
})
server.post('/register',(req,res)=>{
    res.send('注册成功')
})
server.get('/',(req,res)=>{
    res.redirect('/index')
})