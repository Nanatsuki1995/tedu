const fs = require('fs')
if (!fs.existsSync('num.txt')) {
    fs.writeFileSync('num.txt',0)
}
//读取文件中的内容
fs.readFile('num.txt',(err,data)=>{
    if (err) throw err
    //data就是读取的文件中的数据
    //格式是buffer形式
    //console.log(data.toString())
    var num = data.toString()
    num++
    //把加1后的结果再次写入到num.txt中
    fs.writeFileSync('num.txt',num)
})