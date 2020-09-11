let array = [1, 2, 3, 4, 5];

function filer(array, exp) {
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		if (exp(array[i])) {
			newArray[newArray.length] = array[i];
		}
	}
	return newArray;
}

let result = filer(array, function (element) {
	return element <= 3;
});
