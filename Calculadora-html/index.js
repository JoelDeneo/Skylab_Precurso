let firstOperation = true;
let num1 = "";
let num2 = "";
let operation;
let result;

function addNum(value) {
	if (firstOperation === true) {
		num1 += value;
		document.getElementById("num_imput").value = num1;
	} else {
		num2 += value;
		document.getElementById("num_imput").value = num2;
	}
}

function cancel() {
	firstOperation = true;
	num1 = "";
	num2 = "";
	operation;
	result = 0;
	document.getElementById("num_imput").value = "";
}

function deleteNum() {
	if (firstOperation === true || num2 === "") {
		num1 = num1.substring(0, num1.length - 1);
		document.getElementById("num_imput").value = num1;
	} else {
		num2 = num2.substring(0, num2.length - 1);
		document.getElementById("num_imput").value = num2;
	}
}

function operator(value) {
	if (num1 !== "") {
		firstOperation = false;
		num1 = Number(num1);
		operation = value;
	}
}

function allOperations() {
	num2 = Number(num2);
	switch (operation) {
		case "+":
			result = num1 + num2;
			if (Number.isInteger(result)) {
				document.getElementById("num_imput").value = result;
			} else {
				document.getElementById("num_imput").value = result.toFixed(2);
			}
			break;
		case "-":
			result = num1 - num2;
			if (Number.isInteger(result)) {
				document.getElementById("num_imput").value = result;
			} else {
				document.getElementById("num_imput").value = result.toFixed(2);
			}
			break;
		case "*":
			result = num1 * num2;
			if (Number.isInteger(result)) {
				document.getElementById("num_imput").value = result;
			} else {
				document.getElementById("num_imput").value = result.toFixed(2);
			}
			break;
		case "/":
			result = num1 / num2;
			if (Number.isInteger(result)) {
				document.getElementById("num_imput").value = result;
			} else {
				document.getElementById("num_imput").value = result.toFixed(2);
			}
			break;
	}
}

function equal() {
	allOperations();
	num1 = result;
	num2 = "";
	operation = "";
}
