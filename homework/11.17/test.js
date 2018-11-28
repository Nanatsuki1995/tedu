// //第一题
// var sum = 0
// function a() {

//     for (let i = 1; i < 100; i+=2) {
//         sum +=i
        
//     }
//     return sum
// }
// console.log(a())


//第二题
// for(var i=1,sum=0;i<=100;i++){
// 	if(i%2==0){
// 	sum=sum+(-1*(1/i))
// 	}else{
// 	sum=sum+1/i;
// 	}
	
// }
// console.log(sum);
//第三题
// for (var i=100;i<1000;i++) {
//     var j = []
//     j = i.toString()
//     j1 = j.substring(0,1)
//     j2 = j.substring(1,2)
//     j3 = j.substring(2)
//     if (j1+j2+j3 == j1*j1*j1+j2*j2*j2+j3*j3*j3) {
//         console.log(j)
//     }
// }
//第四题见4.html
//第五题
// var j = 11,m = 6,n=1
// do {
//     x = ''
//    for(i=0;i<=j;i++){
//         if (i<m) {
//             x += ' '
//         }else if(i>=m && i<m+n){
//             x += '*'
//         }
//     }
//     console.log(x)
//     m--
//     n+=2    
// } while (m>0);
//第六题
var j = 11,m = 6,n=1
do {
    if (m==1) {
        x = ' '
        for(i=0;i<j;i++){
            if(i >= m || i <= m+n-1){
                x += '*'
            }else{
                x += ' '
            }   
        }
        console.log(x)
    }else{
        x = ''
        for(i=0;i<=j;i++){
            if(i == m || i == m+n-1){
                x += '*'
            }else{
                x += ' '
            }   
        }
        console.log(x)
    }
    m--
    n+=2    
} while (m>0);