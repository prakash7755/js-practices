var i = '-';
var year = 2017;
var date = [];
for (var d = 1; d <30; d++){
	for (var m = 1; m < 12  ; m++) {
		var day = [year + i +m + i + d];
		date.push(day)
	}
}
datestring = date.toDateString()
var date = date.sort()
console.log(toDateString)