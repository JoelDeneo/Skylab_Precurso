let array = [1, 2, 3, 4, 5, 6];

//METODO 1
function slice(array, value1, value2) {
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		if (value2 === undefined) {
			if (array[i] >= value1) {
				newArray[newArray.length] = array[i];
			}
		} else {
			if (array[i] >= value1 && array[i] < value2) {
				newArray[newArray.length] = array[i];
			}
		}
	}
	return newArray;
}

//METODO 2
function slice(array, start, end) {
	let newArray = [];
	if (end === undefined || end > array.length) end = array.length;
	for (let i = start; i < end; i++) {
		newArray[newArray.length] = array[i];
	}
	return newArray;
}
