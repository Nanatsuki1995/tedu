const express = require('express')
//引入body-parser中间件
const bodyParser = require('body-parser')
var server = express()
server.listen(3000)
//托管静态资源到public下
server.use(express.static('public'))
//使用第三方的中间件body-parser，将post请求的数据解析为对象
//urlencoded()将post请求数据解析为对象
server.use(bodyParser.urlencoded({
    extended:false//extended是否使用扩展的qs模块将查询字符串解析为对象；false不使用扩展的qs，使用核心模块querystring
}))
//路由
server.post('/mylogin',(req,res)=>{
    //获取post请求的数据
    console.log(req.body)
})