//f suma.
function add(...args) {
  var rAdd = args[0];
  for (let i = 1; i < args.length; i++) {
    rAdd += args[i];
  }
  return rAdd;
}
//f resta.
function substact(...args) {
  var rSubstact = args[0];
  for (let i = 1; i < args.length; i++) {
    rSubstact -= args[i];
  }
  return rSubstact;
}
//f multiplicacion.
function multiply(...args) {
  var rMultiply = args[0];
  for (let i = 1; i < args.length; i++) {
    rMultiply *= args[i];
  }
  return rMultiply;
}
//f division.
function divide(...args) {
  var rDivde = args[0];
  for (let i = 1; i < args.length; i++) {
    rDivde /= args[i];
  }
  return rDivde;
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
function oneNum(number) {
  console.log("√" + number + " = " + format(Math.sqrt(number)));
}
// f Alerta si es NaN. Añade resultados al array con 'format'- imprime en consola.
function twoNum(...args) {
  let arr = [
    format(add(...args)),
    format(substact(...args)),
    format(multiply(...args)),
    format(divide(...args)),
  ];
  //------------------------------------ CONSOLE LOG OPERATIONS
  let resultadd = arguments[0];
  let resultsubstact = arguments[0];
  let resultmultiply = arguments[0];
  let resultdivde = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    resultadd += " + " + arguments[i];
    resultsubstact += " - " + arguments[i];
    resultmultiply += " * " + arguments[i];
    resultdivde += " / " + arguments[i];
  }
  console.log(resultadd + " = " + arr[0]);
  console.log(resultsubstact + " = " + arr[1]);
  console.log(resultmultiply + " = " + arr[2]);
  console.log(resultdivde + " = " + arr[3]);
}

//f si num2 es undefined 'oneNum'. Sino 'twoNum'
function calculator(...args) {
  if (args[1] === undefined) {
    oneNum(...args);
  } else {
    twoNum(...args);
  }
}

//Pregunta que hacer al finalizar operacion
function answer() {
  var answer = confirm("Do you want to operate again?");
  if (answer) {
    arr = [];
    filter();
  } else {
    alert("Bye!");
  }
}

//FILTRO. Se añaden numeros a un array que se usaran como parametros de la funcion
function filter() {
  var nums = [];
  var confirm = true;
  while (confirm) {
    var num = prompt("Instert number");
    if (num === null) {
      confirm = false;
    } else if (isNaN(num)) {
      alert("is not a number");
    } else {
      nums.push(Number(num));
    }
  }
  calculator(...nums);
  answer();
}

//Llama funcion
filter();
