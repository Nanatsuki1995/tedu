//引入上一级目录下的MySQL连接池对象
const pool = require('../pool')
const express = require('express')
//创建空路由器
var router = express.Router()
//添加路由
//1.用户注册
router.post('/register',(req,res)=>{
    //获取post请求的数据
    var obj = req.body
    //判读用户名是否为空
    var $uname = obj.uname,$upwd = obj.upwd,$email = obj.email,$phone = obj.phone
    if (!$uname) {
        res.send({code:401,msg:'uname required'})
        //阻止继续往后执行
        return
    }
    if (!$upwd) {
        res.send({code:402,msg:'upwd required'})
        return
    }
    if (!$email) {
        res.send({code:403,msg:'email required'})
        return
    }
    if (!$phone) {
        res.send({code:404,msg:'phone required'})
        return
    }
    //执行sql语句，将注册的数据插入到xz_user数据表中，成功响应{code:200,msg:'register success'}
    pool.query('INSERT INTO xz_user SET ?',[obj],(err,result)=>{
        if (err) throw err
        
    })
    res.send('注册成功')
})
//导出路由器
module.exports = router