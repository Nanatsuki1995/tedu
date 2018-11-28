const express = require('express')
var server = express()
server.listen(3000)

//使用内置的中间件
//托管静态资源(html,css,js,图像......)到public目录下
//如果浏览器请求这些文件，自动会到public下寻找
server.use(express.static('public'))
//如果两个文件夹文件同名的情况会选择第一个文件夹下的文件
server.use(express.static('files'))