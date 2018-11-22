//引入user.js路由器模块
const userRouter = require('./user')
const productRouter = require('./product')
const express = require('express')

var server = express()

server.listen(3000)
//服务器使用路由器
//把引入的用户路由器挂载到/user
server.use('/user',userRouter)

server.use('/product',productRouter)