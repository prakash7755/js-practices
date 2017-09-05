'use strict';
var i = '-';
var y = '2017';
var dateStrings = [];






for (var d = 1; d <= 25; d++) {
    for (var m = 1; m <= 12; m++) {
    	var date = y + i + m + i + d;
    	dateStrings.push(date)
    	
    }
}

dateStrings = dateStrings.sort(function(a, b) {
	return (new Date(a) - new Date(b));
	
});


dateStrings = dateStrings.map(date => (new Date(date)).toDateString());




 function pickRandomDate(dates) {
	return Math.floor(Math.random()*dateStrings.length);

}

 dateStrings = dateStrings[pickRandomDate()];
 console.log(dateStrings)
