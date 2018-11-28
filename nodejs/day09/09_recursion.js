//递归，在函数内部调用自身
var i=0
function say(j){
	i++
	alert('many years ago!')
	if (i==3)
	{
		return
	}
	say()
}
say()