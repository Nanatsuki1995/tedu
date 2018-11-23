const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const querystring = require('querystring')
var server = express()
server.listen(3000)
var pool = mysql.createPool({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'',
    database:'tedu',
    connectionLimit:20
})

server.use(express.static('public'))

server.use(bodyParser.urlencoded({
    extended:false
}))

server.post('/add',(req,res,next)=>{
    //获取post请求的数据
    console.log(req.body)
    //获取数据是对象，将数据插入到数据库中
    pool.query('INSERT INTO dept SET ?',[req.body],(err,result)=>{
        if (err) throw err
        console.log(result)
        if (result.affectedRows > 0) {
            res.send({code:200,msg:'add success'})
        }
    })
})