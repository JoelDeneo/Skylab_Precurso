let arr = ["1", "2", "3"];
function push(arr) {
	for (var i = 1; i < arguments.length; i++) {
		arr[arr.length] = arguments[i];
	}
}

function map(array, callback) {
	var result = [];
	for (var i = 0; i < array.length; i++) {
		result[i] = callback(array[i]);
	}
	return result;
}
