'use strict';
var i = '-';
var y = '2017';
var dateStrings = [];






for (var d = 1; d <= 25; d++) {
    for (var m = 1; m <= 12; m++) {
    	var date = m + i + d + i + y;
    	dateStrings.push(date)
    }
}

dateStrings = dateStrings.sort(function(a, b) {
	return (new Date(a) - new Date(b))
})

console.log(dateStrings)