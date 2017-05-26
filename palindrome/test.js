var assert = require('assert');
var isPalindrome = require('./');


describe('Palindrome - ', function() {

	describe('Strings - ', function() {

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
	describe('non-String entities - ', function() {

		it('simple number', function() {
			assert.equal( isPalindrome('9900770099'), true );
		});

	})


});