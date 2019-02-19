//01.js Worker执行 
//通过套路 让程序持行  3s
//1:创建变量保存当前开始时间
var start = new Date().getTime();
//2:创建do while循环  结束-开始时间 < 3000
do{
  //3:在循环再创建当前结束时间
  var end = new Date().getTime();
}while(end - start < 3000);
//2:将消息发送ui
postMessage("Worker执行结束 :)");
onmessage = function(e){
  console.log("Worker接收"+e.data);
}
