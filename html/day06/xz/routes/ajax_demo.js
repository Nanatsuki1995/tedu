const pool = require('../pool')
const express = require('express')

var router = express.Router()
//测试
router.get('/ajax_demo',(req,res)=>{
    res.send('这是我的一个ajax的demo')
})
//get登录
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
//post登录
router.post('/postlogin',(req,res)=>{
    //获取用户名和密码
    var $uname = req.body.uname
    var $upwd = req.body.upwd
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
//查询用户列表
router.get('/list',(req,res)=>{
    var sql = 'select * from xz_user'
    pool.query(sql,(err,result)=>{
        res.send(result)
    })
})
//检查用户名
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