///js/02.js
//1:接收ui发送消息
onmessage = function(e){
 var rs = e.data; 
 //2:计算累加和
 var sum = 0;
 for(var i=1;i<=rs;i++){
   sum+=i;
 }
 //3:将累加和结果返回UI
 postMessage(sum);
}
