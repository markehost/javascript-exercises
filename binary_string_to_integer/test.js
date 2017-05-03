var assert = require('assert');
var binaryStringToInteger = require('./');


describe('Convert binary string to integer - ', function() {

	describe('String - ', function() {

		it('short binary', function() {
			assert.equal( binaryStringToInteger('0'), 0 );
		});

		it('short binary', function() {
			assert.equal( binaryStringToInteger('1'), 1 );
		});

		it('long binary', function() {
			assert.equal( binaryStringToInteger('10101010101010101010101010101'), 357913941 );
		});

		it('special binary', function() {
			assert.equal( binaryStringToInteger('01111010101'), 981 );
		});

	})

	// describe('Number - ', function() {
	//
	// 	it('short binary', function() {
	// 		assert.equal( binaryStringToInteger(0), 0 );
	// 	});
	//
	// 	it('short binary', function() {
	// 		assert.equal( binaryStringToInteger(1), 1 );
	// 	});
	//
	// 	it('long binary', function() {
	// 		assert.equal( binaryStringToInteger( 10101010101010101010101010101 ), 357913941 );
	// 	});
	//
	// })

});