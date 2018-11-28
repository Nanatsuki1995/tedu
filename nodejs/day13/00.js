var arr=[]
//循环产生1~33，放入到arr中
for (let i=1;i<=33;i++){
    arr.push(i)
}
//在arr中随机取6个，不能重复
var newArr = []
for (let i = 0; i < 6; i++) {
    //向下取整(随机数*数组长度)
    index = Math.floor(Math.random()*arr.length)
    newArr.push(arr[index])
    //在arr中删除当前的元素——通过下标
    arr.splice(index,1)
}
newArr=newArr.sort((a,b)=>a-b)
//取1~16之间1个随机数
var blue = Math.floor(Math.random()*16)+1
newArr.push(blue)
console.log(newArr)