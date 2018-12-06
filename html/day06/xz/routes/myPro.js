const pool = require('../pool')
const express = require('express')

var router = express.Router()

//登录
router.post('/login',(req,res)=>{
    var $uname = req.body.uname
    var $upwd = req.body.upwd
    var sql = 'select * from xz_user where uname=? and upwd=?'
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        if (result.length>0) {
            res.send('登录成功')
            return
        }else{
            res.send('用户名/密码错误')
            return
        }
    })
})

//查询
router.get('/list',(req,res)=>{
    var sql = 'select * from xz_user'
    pool.query(sql,(err,result)=>{
        if (result.length > 0) {
            res.send(result)
            return
        }else{
            res.send('<tr><td colspan = "3">获取失败</td></tr>')
        }
    })
})

//注册
router.post('/register',(req,res)=>{
    var obj = req.body
    var sql = 'insert into xz_user set ?'
    pool.query(sql,[obj],(err,result)=>{
        if (err) throw err
        if (result.affectedRows > 0) {
            res.send('注册成功')
        }
    })
})

//用户名检测
router.post('/unameCheck',(req,res)=>{
    var $uname = req.body.uname
    var sql = 'select * from xz_user where uname=?'
    pool.query(sql,[$uname],(err,result)=>{
        if (!$uname) {
            res.send('1')
            return
        }
        if (result.length > 0) {
            res.send('2')
            return
        } else {
            res.send('0')
            return
        }
    })
})

//邮箱检测
router.post('/emailCheck',(req,res)=>{
    var $email = req.body.email
    var sql = 'select * from xz_user where email=?'
    pool.query(sql,[$email],(err,result)=>{
        if (!$email) {
            res.send('1')
            return
        }
        if (result.length > 0) {
            res.send('2')
            return
        } else {
            res.send('0')
            return
        }
    })
})

//手机号检测
router.post('/phoneCheck',(req,res)=>{
    var $phone = req.body.phone
    var sql = 'select * from xz_user where phone=?'
    pool.query(sql,[$phone],(err,result)=>{
        if (!$phone) {
            res.send('1')
            return
        }
        if (result.length > 0) {
            res.send('2')
            return
        } else {
            res.send('0')
            return
        }
    })
})

//删除
router.get('/delete',(req,res)=>{
    var $uid = req.query.uid
    var sql = 'delete from xz_user where uid=?'
    pool.query(sql,[$uid],(err,result)=>{
        if (err) throw err
        if (result.affectedRows > 0) {
            res.send('1')
            return
        }else{
            res.send('0')
            return
        }
    })
})

//修改查询
router.get('/update',(req,res)=>{
    var $uid = req.query.uid
    var sql = 'select * from xz_user where uid = ?'
    pool.query(sql,[$uid],(err,result)=>{
        if (result.length > 0) {
            res.send(result)
            return
        }
    })
})

router.post('/upDate',(req,res)=>{
    var obj = req.body
    var sql = 'update xz_user set uname = ?,upwd = ?,email = ?,phone = ?,avatar = ?,user_name = ?,gender = ? where uid=?'
    pool.query(sql,[obj.uname,obj.upwd,obj.email,obj.phone,obj.avatar,obj.user_name,obj.gender,obj.uid],(err,result)=>{
        if (err) throw err
        if (result.affectedRows > 0) {
            res.send('修改成功')
        }
    })
})

module.exports = router