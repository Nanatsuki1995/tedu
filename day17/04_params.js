const express = require('express')
var server = express()
server.listen(3000)
/*
//路由传递
//  /detail/5/dell
server.get('/detail/:lid/:pname',(req,res)=>{
    //获取浏览器传递数据
    console.log(req.params)//返回对象
    res.send('这是商品详情')
})
*/
server.get('/shopping/:price/:pname',(req,res)=>{
    console.log(req.params)
    var obj = req.params
    res.send('商品名：'+obj.pname+'  价格：'+obj.price)
})