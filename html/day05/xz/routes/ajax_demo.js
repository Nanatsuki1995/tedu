const pool = require('../pool')
const express = require('express')

var router = express.Router()

router.get('/ajax_demo',(req,res)=>{
    res.send('这是我的一个ajax的demo')
})

router.get('/login',(req,res)=>{
    $uname = req.query.uname
    $upwd = req.query.upwd
    if (!$uname) {
        res.send('用户名不能为空')
        return
    }
    if (!$upwd) {
        res.send('密码不能为空')
        return
    }
    var sql='select * from xz_user where uname=? and upwd=?'
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        if (result.length > 0) {
            res.send('登录成功')
        }else{
            res.send('用户名密码错误')
        }
    })
})

router.get('/list',(req,res)=>{
    var sql = 'select * from xz_user'
    pool.query(sql,(err,result)=>{
        res.send(result)
    })
})

router.get('/check',(req,res)=>{
    var $uname = req.query.uname
    var sql = 'select * from xz_user where uname=?'
    pool.query(sql,[$uname],(err,result)=>{
        if (result.length > 0) {
            res.send('用户名已被注册')
            return
        }else{
            res.send('用户名可用')
            return
        }
    })
})

module.exports = router