
function isInteger(num) {
	// fails 3 test cases; Infinity, +Infinity, -Infinity
	// return Math.round( num ) === num


	return ( num^0 ) === num
}

module.exports = isInteger