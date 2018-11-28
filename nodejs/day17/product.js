const express = require('express')
var router = express.Router()
router.get('/list',(req,res)=>{
    res.send('商品列表')
})
router.get('/delete/:lid',(req,res)=>{
    res.send('商品删除')
    console.log(req.params)
})
router.get('/add',(req,res)=>{
    res.send('商品添加')
})

module.exports = router