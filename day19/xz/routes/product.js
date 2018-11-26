/*
 * @Author: zengjian 
 * @Date: 2018-11-26 15:28:53 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-11-26 18:47:13
 */
//导入连接池
const pool = require('../pool')
const express = require('express')
const querystring = require('querystring')
//创建空的路由器
var router = express.Router()
//添加路由
router.get('/test',(req,res)=>{
    res.send('这是测试路由')
})
//1.商品列表
router.get('/list',(req,res)=>{
    var obj = req.query
    var $pno = parseInt(obj.pno),$count = parseInt(obj.count)
    if (!$pno) {
        $pno = 1
    }
    if (!$count) {
        $count = 10
    }
    var start = ($pno-1)*$count
    pool.query('SELECT * FROM xz_laptop LIMIT ?,?',[start,$count],(err,result)=>{
        if (err) throw err
        res.send(result)
    })
})
//2.商品详情
router.get('/detail',(req,res)=>{
    var obj = req.query
    var $lid = obj.lid
    if (!$lid) {
        res.send({code:401,msg:'lid required'})
        return
    }
    pool.query('SELECT * FROM xz_laptop WHERE lid = ?',[$lid],(err,result)=>{
        if (err) throw err
        if (result.affectedRows > 0) {
            res.send(result)
        }else{
            res.send({code:301,msg:'select err'})
        }
    })
})
//3.商品删除
router.get('/delete',(req,res)=>{
    var obj = req.query
    var $lid = obj.lid
    if (!$lid) {
        res.send({code:401,msg:'lid required'})
        return
    }
    pool.query('DELETE FROM xz_laptop WHERE lid = ?',[$lid],(err,result)=>{
        if (err) throw err
        if (result.affectedRows > 0) {
            res.send({code:200,msg:'delete success'})
        }else{
            res.send({code:301,msg:'delete err'})
        }
    })
})
//4.商品添加
router.get('/add',(req,res)=>{
    var obj = req.query,$code=401
    //遍历对象中的属性，实现验证是否为空
    for (let keys in obj){
        if (!obj[keys]) {
            res.send({code:$code,msg:keys+' required'})
            return
        }
        $code++
    }
    pool.query('INSERT INTO xz_laptop SET ?',[obj],(err,result)=>{
        if (err) throw err
        if (result.affectedRows > 0) {
            res.send({code:200,msg:'add success'})
        }else{
            res.send({code:301,msg:'add err'})
        }
    })
})
//5.完成商品更改
router.get('/update',(req,res)=>{
    var obj = req.query
    var obj1 = {}
    for(let keys in obj){
        if (keys != 'lid') {
            obj1[keys] = obj[keys]
        }
    }
    pool.query('UPDATE xz_laptop SET ? WHERE lid = ?',[obj1,obj.lid],(err,result)=>{
        if (err) throw err
        if (result.affectedRows > 0) {
            res.send({code:200,msg:'update success'})
        }else{
            res.send({code:301,msg:'update err'})
        }
    })
})
//导出路由器
module.exports = router