'use strict';








module.exports = function (arr) {

	if (!Array.isArray(arr)) {
		throw Error('This Is Not Array');
	}

	// if (arr.every(x => typeof x !== 'number')) {
	// 	throw Error('This Module Only Take Array Of Numbers As Input..')
	// }

	return arr.filter(checkAdultAge)

	function checkAdultAge(age) {
		return (age >= 10);
	}
}
