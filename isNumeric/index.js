
function isNumeric(num) {
	// console.log("number is ---> ", num )
	// console.log("number? ", !isNaN( parseFloat(num) ) && isFinite(num) )

	return !isNaN( parseFloat(num) ) && isFinite(num)
}

module.exports = isNumeric