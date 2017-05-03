var assert = require('assert');
var binaryStringToInteger = require('./');


describe('Convert binary string to integer - ', function() {

	describe('integer literals - ', function() {
		it('nagative integer string', function() {
			assert.equal( binaryStringToInteger('101010101'), 341 );
		});

		// it('zero string', function() {
		// 	assert.equal( isInteger('0'), true );
		// });
		//
		// it('positive integer string', function() {
		// 	assert.equal( isInteger('8'), true );
		// });
		//
		// it('negative integer number', function() {
		// 	assert.equal( isInteger(-9), true );
		// });
		//
		// it('zero integer number', function() {
		// 	assert.equal( isInteger(0), true );
		// });
		//
		// it('positive integer number', function() {
		// 	assert.equal( isInteger(98), true );
		// });
		//
		// it('Octal integer literal string', function() {
		// 	assert.equal( isInteger('0o44'), true );
		// });
		//
		// it('Octal integer literal', function() {
		// 	assert.equal( isInteger(0o44), true );
		// });
		//
		// it('Hexadecimal integer literal string', function() {
		// 	assert.equal( isInteger("0x3b24"), true );
		// });
		//
		// it('Hexadecimal integer literal', function() {
		// 	assert.equal( isInteger(0x3b24), true );
		// });

	})

	// describe('flotaing point literals - ', function() {
	// 	it('negative floating point string', function() {
	// 		assert.equal( isInteger('-3.9'), true );
	// 	});
	//
	// 	it('positive floating point string', function() {
	// 		assert.equal( isInteger('5.4'), true );
	// 	});
	//
	// 	it('negative floating point number', function() {
	// 		assert.equal( isInteger(-9.888), true );
	// 	});
	//
	// 	it('positive floating point number', function() {
	// 		assert.equal( isInteger(6.6777), true );
	// 	});
	//
	// 	it('exponential notation', function() {
	// 		assert.equal( isInteger(9e6), true );
	// 	});
	//
	// 	it('exponential notation string', function() {
	// 		assert.equal( isInteger('7e67'), true );
	// 	});
	// })
	//
	// describe('non-numeric values', function() {
	//
	// 	it('empty string', function() {
	// 		assert.equal( isInteger(""), false );
	// 	});
	//
	// 	it('whitespace characters string', function() {
	// 		assert.equal( isInteger("         "), false );
	// 	});
	//
	// 	it('tab characters string', function() {
	// 		assert.equal( isInteger("\t\t"), false );
	// 	});
	//
	// 	it('alphanumeric character string', function() {
	// 		assert.equal( isInteger('abcdefghijklm1234567890'), false );
	// 	});
	//
	// 	it('non-numeric character string', function() {
	// 		assert.equal( isInteger('xacbdx'), false );
	// 	});
	//
	// 	it('boolean true literal', function() {
	// 		assert.equal( isInteger(true), false );
	// 	});
	//
	// 	it('boolean false literal', function() {
	// 		assert.equal( isInteger(false), false );
	// 	});
	//
	// 	it('number with preceding non-numeric characters', function() {
	// 		assert.equal( isInteger('acbd1.34'), false );
	// 	});
	//
	// 	it('number with trailling non-numeric characters', function() {
	// 		assert.equal( isInteger("1.34abcdefghhijklmno"), false );
	// 	});
	//
	// 	it('undefined value', function() {
	// 		assert.equal( isInteger(undefined), false );
	// 	});
	//
	// 	it('null value', function() {
	// 		assert.equal( isInteger(null), false );
	// 	});
	//
	// 	it('NaN Value', function() {
	// 		assert.equal( isInteger(NaN), false );
	// 	});
	//
	// 	it('Infinity primitive', function() {
	// 		assert.equal( isInteger(Infinity), false );
	// 	});
	//
	// 	it('positive infinity', function() {
	// 		assert.equal( isInteger(Number.POSITIVE_INFINITY), false );
	// 	});
	//
	// 	it('negative infinity', function() {
	// 		assert.equal( isInteger(Number.NEGATIVE_INFINITY), false );
	// 	});
	//
	// 	it('Date object', function() {
	// 		assert.equal( isInteger( new Date(1999, 1, 1) ), false );
	// 	});
	//
	// 	it('empty object', function() {
	// 		assert.equal( isInteger( new Object() ), false );
	// 	});
	//
	// 	it('instance of a function', function() {
	// 		assert.equal( isInteger( function() {} ), false );
	// 	});
	//
	// })
});