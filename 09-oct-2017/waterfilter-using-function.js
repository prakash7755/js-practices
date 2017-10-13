
'use strict'; 
var waterFilter = function(length, lifeTime, price) {
	this.length = length ? length : 35;
	this.lifeTime = lifeTime ? lifeTime : 2;
	this.price = price ? price : 30000;

	this.warranty = function () {
		return (this.lifeTime * this.price / 15000)
	}
}

// waterFilter.prototype.warranty = function () {
// 	return (this.lifeTime * this.price / 2)
// }

var waterFilterObj = new waterFilter(45, 3, 20000)
console.log('length : ', waterFilterObj.length)
console.log('lifeTime : ', waterFilterObj.lifeTime)
console.log('price : ', waterFilterObj.price)
console.log('warranty : ', waterFilterObj.warranty())

