/*
 * @Author: zengjian 
 * @Date: 2018-11-24 10:44:12 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-11-24 10:45:16
 */
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
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

server.post('/adde',(req,res,next)=>{
    pool.query('INSERT INTO emp SET ?',[req.body],(err,result)=>{
        if (err) throw err
        if (result.affectedRows > 0) {
            res.send({code:200,msg:'add success'})
        }
    })
})