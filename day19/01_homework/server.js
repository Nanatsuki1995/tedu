/*
 * @Author: zengjian 
 * @Date: 2018-11-26 09:27:27 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-11-26 09:39:13
 */
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
//创建web服务器
var server = express()
server.listen(3000)
//托管静态资源到public目录下
server.use(express.static('public'))
//使用body-parser中间件将post请求数据解析为对象
server.use(bodyParser.urlencoded({
    extended:false
}))
//连接MySQL
var pool = mysql.createPool({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'',
    database:'tedu',
    connectionLimit:20
})
//路由，接受浏览器的请求
server.post('/add',(req,res)=>{
    var obj = req.body
    //将数据插入到数据库中
    pool.query('INSERT INTO emp SET ?',[obj],(err,result)=>{
        if (err) throw err
        console.log(result)
        //判断是否插入成功
        if (result.affectedRows > 0){
            res.send('员工插入成功')
        }
    })
})