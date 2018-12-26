const express = require('express')

var server = express()
var port = 3000

server.listen(port,()=>{
    console.log('Server Listening ' + port)
})

// server.use(express.static('./public'))
server.use(express.static('./build'))