
function isPalindrome( string ) {
	// https://stackoverflow.com/questions/14813369/palindrome-check-in-javascript
	// very readable
	// gets the job done

	const type = typeof string;
	if ( type !== 'string' ) return false;

	// REMOVE SPECIAL CHARACTERS - CONVERT TO LOWERCASE
	let removeCharacter = string.replace(/[^A-Z0-9]/ig, "").toLowerCase()

	// REVERSE THE STRING SO WE CAN COMPARE VALUES
	let reverseString = removeCharacter.split('').reverse().join('')

	// CHECK IF STRINGS IS SAME FORWARDS AND BACKWARDS
	return removeCharacter == reverseString
}

module.exports = isPalindrome