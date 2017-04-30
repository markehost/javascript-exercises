var assert = require('assert');
var isNumeric = require('./');


describe('isNumeric - ', function() {

	describe('integer literals - ', function() {
		it('nagative integer string', function() {
			assert.equal( isNumeric('-9'), true );
		});

		it('zero string', function() {
			assert.equal( isNumeric('0'), true );
		});

		it('positive integer string', function() {
			assert.equal( isNumeric('8'), true );
		});

		it('negative integer number', function() {
			assert.equal( isNumeric(-9), true );
		});

		it('zero integer number', function() {
			assert.equal( isNumeric(0), true );
		});

		it('positive integer number', function() {
			assert.equal( isNumeric(98), true );
		});

		it('Octal integer literal string', function() {
			assert.equal( isNumeric('0o44'), true );
		});

		it('Octal integer literal', function() {
			assert.equal( isNumeric(0o44), true );
		});

		it('Hexadecimal integer literal string', function() {
			assert.equal( isNumeric("0x3b24"), true );
		});

		it('Hexadecimal integer literal', function() {
			assert.equal( isNumeric(0x3b24), true );
		});

	})

	describe('flotaing point literals - ', function() {
		it('negative floating point string', function() {
			assert.equal( isNumeric('-3.9'), true );
		});

		it('positive floating point string', function() {
			assert.equal( isNumeric('5.4'), true );
		});

		it('negative floating point number', function() {
			assert.equal( isNumeric(-9.888), true );
		});

		it('positive floating point number', function() {
			assert.equal( isNumeric(6.6777), true );
		});

		it('exponential notation', function() {
			assert.equal( isNumeric(9e6), true );
		});

		it('exponential notation string', function() {
			assert.equal( isNumeric('7e67'), true );
		});
	})

	describe('non-numeric values', function() {

		it('empty string', function() {
			assert.equal( isNumeric(""), false );
		});

		it('whitespace characters string', function() {
			assert.equal( isNumeric("         "), false );
		});

		it('tab characters string', function() {
			assert.equal( isNumeric("\t\t"), false );
		});

		it('alphanumeric character string', function() {
			assert.equal( isNumeric('abcdefghijklm1234567890'), false );
		});

		it('non-numeric character string', function() {
			assert.equal( isNumeric('xacbdx'), false );
		});

		it('boolean true literal', function() {
			assert.equal( isNumeric(true), false );
		});

		it('boolean false literal', function() {
			assert.equal( isNumeric(false), false );
		});

		it('number with preceding non-numeric characters', function() {
			assert.equal( isNumeric('acbd1.34'), false );
		});

		it('number with trailling non-numeric characters', function() {
			assert.equal( isNumeric("1.34abcdefghhijklmno"), false );
		});

		it('undefined value', function() {
			assert.equal( isNumeric(undefined), false );
		});

		it('null value', function() {
			assert.equal( isNumeric(null), false );
		});

		it('NaN Value', function() {
			assert.equal( isNumeric(NaN), false );
		});

		it('Infinity primitive', function() {
			assert.equal( isNumeric(Infinity), false );
		});

		it('positive infinity', function() {
			assert.equal( isNumeric(Number.POSITIVE_INFINITY), false );
		});

		it('negative infinity', function() {
			assert.equal( isNumeric(Number.NEGATIVE_INFINITY), false );
		});

		it('Date object', function() {
			assert.equal( isNumeric( new Date(1999, 1, 1) ), false );
		});

		it('empty object', function() {
			assert.equal( isNumeric( new Object() ), false );
		});

		it('instance of a function', function() {
			assert.equal( isNumeric( function() {} ), false );
		});

	})
});