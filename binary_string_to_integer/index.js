
function binaryStringToInteger(b) {

	// split the binary string into an array then reverse it
	let reverse = b.split('').reverse();
	let sum = 0;

	// go through the array, multiply each index by the base 2 to the i exponent, then add to the running total
	for ( let i = 0; i < reverse.length; i++ ) {
		// sum += reverse[i] * Math.pow( 2, i )
		sum += Number(reverse[i]) * Math.pow( 2, i )
	}

	return sum
}

module.exports = binaryStringToInteger