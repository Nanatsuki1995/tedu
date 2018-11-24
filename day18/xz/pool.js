/*
 * @Author: zengjian 
 * @Date: 2018-11-24 10:32:04 
 * @Last Modified by:   zengjian 
 * @Last Modified time: 2018-11-24 10:32:04 
 */
const mysql = require('mysql')
//创建连接池对象
var pool = mysql.createPool({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'',
    database:'xz',
    connectionLimit:20
})
//导出连接池对象
module.exports = pool