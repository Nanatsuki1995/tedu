const http = require('http')
var server = http.createServer()
server.listen(3000)
server.on('request',(req,res)=>{
    
    switch (req.url) {
        case '/login':
            res.write('this is login page')
            break;
        case '/member':
            res.write('this is menber page')
            break;
        case '/':
            res.writeHead(302,{
                Location:'/member'
            })
            break
        default:
            res.write('404 not found')
            break;
    }
    res.end()
})