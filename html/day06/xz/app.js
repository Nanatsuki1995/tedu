/*
 * @Author: zengjian 
 * @Date: 2018-11-26 09:54:03 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-05 15:23:38
 */
const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./routes/user')
const productRouter = require('./routes/product')
const demo = require('./routes/ajax_demo')
const myPro = require('./routes/myPro')
//创建web服务器
var server = express()
server.listen(3000)
//托管静态资源到public目录下
server.use(express.static('public'))
server.use(express.static('myex'))
server.use(express.static('myPro'))
//使用body-parser中间件将post请求数据解析为对象 注意：一定要写在路由的前边
server.use(bodyParser.urlencoded({
    extended:false
}))
//把用户路由器挂载到/user
server.use('/user',userRouter)
//把商品路由器挂载到/product
server.use('/product',productRouter)

server.use('/demo',demo)

server.use('/myPro',myPro)