const pool = require('../pool')
const express = require('express')

var router = express.Router()
//1.ajaxdemo
router.get('/ajax_demo',(req,res)=>{
    res.send('这是我的一个ajax的demo')
})
//登录接口
router.get('/login',(req,res)=>{
    //获取用户名称和密码
    var $uname = req.query.uname
    var $upwd = req.query.upwd
    if(!$uname){
        res.send('用户名为空')
        return
    }
    if(!$upwd){
        res.send('密码为空')
        return
    }
    var sql = 'select * from xz_user where uname=? and upwd=?'
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        if (result.length > 0) {
            res.send('登录成功')
        }else{
            res.send('用户名密码错误')
        }
    })
})
module.exports = router