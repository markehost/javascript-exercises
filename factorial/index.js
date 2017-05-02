let isNumeric = require('../isNumeric/');

let factorial = {

	// recursive
	recursive: function recursive(num) {

		// return false if not a number
		if ( !isNumeric(num) ) return false;

		// or written out if you have not done 'isNumeric' into its own module yet.
		// if ( isNaN( parseFloat(num) && !isFinite(num) ) ) return false;

		// factorial of 0 and 1 equal 1
		if ( num == 0 || num == 1 ) {
			return 1

			// the recursion to find the correct value
			// you could use an outside VAR to hold the value of the calculated factorial, but JS modifies 'num' in place
		} else {
			return num * recursive( num - 1 )
		}
	},

	// iterative
	iterative: function iterative(num) {

		// return false if not a number
		if ( !isNumeric(num) ) return false;

		// or written out if you have not done 'isNumeric' into its own module yet.
		// if ( isNaN( parseFloat(num) && !isFinite(num) ) ) return false;

		let returnValue = 1
		for ( let i = 2; i <= num; i++ ) {
			returnValue = returnValue * i
		}
		return returnValue
	}

}

module.exports = factorial