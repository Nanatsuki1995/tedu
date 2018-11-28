const http = require('http')

var server = http.createServer()
server.listen(3001,()=>{
    console.log('成功')
})

server.on('request',(req,res)=>{
    console.log(req.url)
    console.log(req.method)
    
})

