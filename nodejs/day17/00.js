const express = require('express')
const querystring = require('querystring')
var server = express()
var year,month,date,sex

server.listen(3000)

server.use(express.static('public'))

server.use('/idCheck',(req,res,next)=>{
    req.on('data',(buf)=>{
        var str = buf.toString()
        var obj = querystring.parse(str)
        year = obj.idNum.substr(6,4)
        month = Number(obj.idNum.substr(10,2))
        date = Number(obj.idNum.substr(12,2))
        sex = Number(obj.idNum.substr(16,2))%2==0?'女':'男'
        next()
    })
})

server.post('/idCheck',(req,res,next)=>{
    res.send(year+'年'+month+'月'+date+'日 '+sex)
})