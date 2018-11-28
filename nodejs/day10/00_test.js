var circle={
	r:10,
	PI:3.14,
	getLength:function(){
		return 2*this.PI*this.r
	},
	getArea:function(){
		return this.PI*this.r*this.r
	}
}
var res1=circle.getLength();
console.log('周长'+res1);
var res2=circle.getArea();
console.log('面积'+res2);