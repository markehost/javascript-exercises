var assert = require('assert');
var factorial = require('./');


describe('factorial', function() {

	it('will return the factorial of an integer - using recursion', function() {
		assert.equal( factorial.recursive(9), 362880 );
	});

	it('will return the factorial of an integer - using iteration', function() {
		assert.equal( factorial.iterative(8), 40320 );
	});

	it('will return false for non-integers - strings', function() {
		assert.equal( factorial.recursive('abc'), false );
	});

	it('will return false for non-integers - null', function() {
		assert.equal( factorial.recursive(null), false );
	});


	// TODO: need more test cases

	// it('will return false for non-integers - negative number', function() {
	// 	assert.equal( factorial.recursive(-1), false );
	// });

});