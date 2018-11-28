
//引入fs模块
const fs = require('fs')
/*
//查看文件的状态
//异步方法，不会阻止后续代码执行
fs.stat('05',(err,stats)=>{
    //err如果有错误信息，会存储到err
    //stats文件的具体状态信息
    if(err)throw err//如果有错误，抛出；不会继续执行后边的代码
    //查看文件是目录形式，还是文件形式
    //查看是否为目录
    //console.log(stats.isDirectory())
    //查看是否为文件
    console.log(stats.isFile())
})

//使用同步
//同步方法，会阻止后续代码的执行
var res = fs.statSync('07_url.js')
console.log(res.isDirectory())

//创建目录

fs.mkdir('mydir',(err)=>{
    if(err) throw err
    console.log('目录创建成功')
})

var res = fs.mkdirSync('mydir2')
console.log(res)
console.log(123)

//删除目录
fs.rmdir('mydir',(err)=>{
    if (err) {
        throw err
    }
    console.log('删除成功')
})

fs.rmdirSync('mydir2')

//读取目录
fs.readdir('05',(err,files)=>{
    if (err) {
        throw err
    }
    //files如果没有错误，读取的文件
    console.log(files)
})

var res = fs.readdirSync('05')
console.log(res)

//fs.mkdirSync('hello')
var res = fs.readdirSync('03_2')
console.log(res)
fs.rmdirSync('hello')
*/
//创建文件
fs.writeFile('data.txt','world',(err)=>{
    if (err) throw err
})