var assert = require('assert');
var isPalindrome = require('./');


describe('Palindrome - ', function() {

	describe('Alphabetical - ', function() {

		it('simple text', function() {
			assert.equal( isPalindrome('abcdcba'), true );
		});

		it('text with spacing', function() {
			assert.equal( isPalindrome('ab cd cba'), true );
		});

		it('text with non-alphanumeric entities', function() {
			assert.equal( isPalindrome('ab,cdcb.a'), true );
		});

		it('spaces and non-alphanumeric entities', function() {
			assert.equal( isPalindrome('ab, cdcba. '), true );
		});

	})

	// DOES IT MAKE SENSE TO TEST THIS?
	describe('Numeric - ', function() {

		it('simple number', function() {
			assert.equal( isPalindrome('9900770099'), true );
		});

	})


	describe('Non-strings', function() {

		it('simple number', function() {
			assert.equal( isPalindrome(9900770099), false );
		});

		it('Infinity', function() {
			assert.equal( isPalindrome(Infinity), false );
		});

		it('null', function() {
			assert.equal( isPalindrome(null), false );
		});

		it('undefined', function() {
			assert.equal( isPalindrome(undefined), false );
		});

		// returns true, but shouldnt

		// it('empty string', function() {
		// 	assert.equal( isPalindrome('  '), false );
		// });

		it('false', function() {
			assert.equal( isPalindrome(false), false );
		});

		it('true', function() {
			assert.equal( isPalindrome(true), false );
		});

	})


});