// function evenOrOdd(number) {
// 	if(number % 2 === 0) {
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// }

function isEven(number) {
	return number % 2 ===0;
}

// function factorial(number) {
// 	if(number === 0) {
// 		return 1;
// 	}
// 	else {
// 	for(var i=number-1; i>0; i--) {
// 		number*=i;
// 	}
// 	return number;
// }
// }
var result = 1;
function factorial(number) {
	for(var i=2; i<=number; i++) {
		result*=i
	}
	return result;
}

function kebabToSnake(str) {
	var newString = str.replace(/-/g,"_");
	return newString;
}