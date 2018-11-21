const fs = require('fs')
/*
//追加写入
fs.appendFile('1.txt','hello\n',(err)=>{
    if (err) throw err
})
*/
var user = {
    'uid':1,
    'uname':'tom',
    'upwd':'123456'
}
//遍历对象，获取每一个数据
for(var key in user){
    //console.log(user[key])
    fs.appendFileSync('user.txt',user[key]+' ')
}
fs.appendFileSync('user.txt','\n')
