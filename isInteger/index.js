
function isInteger(num) {
	// return Math.round( num ) === num
	return ( num^0 ) === num
}

module.exports = isInteger