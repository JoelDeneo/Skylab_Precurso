//f suma.
function add(num1, num2) {
  return num1 + num2;
}
//f resta.
function substact(num1, num2) {
  return num1 - num2;
}
//f multiplicacion.
function multiply(num1, num2) {
  return num1 * num2;
}
//f division.
function divide(num1, num2) {
  return num1 / num2;
}
//f Maximo 3 decimales si es float.
function format(number) {
  if (Number.isInteger(number)) {
    return number;
  } else {
    return number.toFixed(3);
  }
}
//f raiz cuadrada. Alerta si es NaN. Si es num imprime resultado con 'format'
function oneNum(num1) {
  if (isNaN(num1)) {
    console.log("is not a number");
  } else {
    console.log("√" + num1 + " = " + format(Math.sqrt(num1)));
  }
}
// f Alerta si es NaN. Sino Crea variable - Añade resultados al array con 'format'- imprime en consola.
function twoNum(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    console.log("is not a number");
  } else {
    let arr = [
      format(add(num1, num2)),
      format(substact(num1, num2)),
      format(multiply(num1, num2)),
      format(divide(num1, num2)),
    ];
    console.log(
      `${num1} + ${num2} = ${arr[0]}\n${num1} - ${num2} = ${arr[1]}\n${num1} * ${num2} = ${arr[2]}\n${num1} / ${num2} = ${arr[3]}`
    );
  }
}

//f si num2 es undefined 'oneNum'. Sino 'twoNum'
function calculator(num1, num2) {
  if (num2 === null) {
    oneNum(Number(num1));
  } else {
    twoNum(Number(num1), Number(num2));
  }
}

//Llamada Calculadora.
var calculate = true;
while (calculate) {
  var num1 = prompt("Insert first number");
  var num2 = prompt("Inster second number");
  calculator(num1, num2);
  console.log(num1, num2);
  calculate = confirm("want to keep calculating");
}
