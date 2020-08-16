console.log("Solution");

//1
function printReverse(arr1) {
	for (var i = (arr1.length-1); i>-1; i--)
		console.log(arr1[i]);
}
printReverse([3,6,2,5]);

//2
function isUniform(arr2) {
	var first = arr2[0];
	for(var i = 1; i<=(arr2.length-1); i++) {
		if(arr2[i] !== first) {
			console.log(false);
			return;
		}
		
}   console.log(true);
    return;
}
isUniform([1,1,1,1,1]);

//3
function sumArray(arr3) {
	var sum = 0;
	arr3.forEach(function(number) {
		sum+=number;
	})
	console.log(sum);
}
sumArray([1,2,3,4,5]);

//4
function max(arr4) {
	var maximum = arr4[0];
	for(var i = 1; i<arr4.length; i++) {
		if(maximum < arr4[i]) {
			maximum = arr4[i];
		}
	}
	console.log(maximum);
}
max([1,2,3,4,5]);
max([99,100]);