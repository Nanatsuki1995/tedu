//引入http模块
const http = require('http')
/*
//模拟浏览器想服务器发请求
//使用请求的方法和请求的URL
http.get('http://www.codeboy.com',(res)=>{
    //res   服务器端响应的对象
    console.log(res.statusCode)
    //获取服务器的数据
    //事件：当有数据传输的时候会执行这个事件
    //通过回调函数来获取响应的数据
    res.on('data',(buf)=>{  //res.on('data') 是一个事件
        console.log(buf.toString())
    })
})
*/
http.get('http://www.weather.com.cn/data/sk/101010100.html',(res)=>{
    //res响应的对象
    console.log(res.statusCode)//状态码
    res.on('data',(buf)=>{
        //console.log(buf.toString())
        var str = buf.toString()
        console.log(str)
        //var obj = eval(str)
        //console.log(obj)
    })
})