/*//全局污染
//轮播图
var num=3
function play(){
	console.log('hello')
}
play()
//会买专辑
var num=1
function play(){
	console.log('world')
}
play()
console.log(num)


(function(){
	var num=3
	function play(){
		console.log('hello')
	}
	play()
})();

(function(){
	var num=1
	function play(){
		console.log('world')
	}
	play()
})()*/