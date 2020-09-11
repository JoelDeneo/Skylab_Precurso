//AIRLINES

var flights = [
  { id: 00, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },
  { id: 01, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 02, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 03, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 04, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 05, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 06, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 07, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 08, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 09, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

// El vuelo 'ID', con origen: 'TO' y destino 'FROM', tiene un coste de 'COST' y 'SCALE' realiza escala

function flightsToday() {
  for (let i = 0; i < flights.length; i++) {
    let flightList;
    flightList =
      "El vuelo " +
      flights[i].id +
      ", con origen: " +
      flights[i].to +
      " y destino: " +
      flights[i].from +
      ", tiene un coste de " +
      flights[i].cost +
      "€";
    if (flights[i].scale === true) {
      flightList += " y si realiza escala.";
    } else {
      flightList += " y no realiza ninguna escala.";
    }
    console.log(flightList);
  }
}

//----------------------------------------------------PRECIO MEDIO

function avaragePrice() {
  let avarage = 0;
  for (let i = 0; i < flights.length; i++) {
    avarage += flights[i].cost;
  }
  avarage /= flights.length - 1;
  console.log("El precio medio de los vuelos es de " + avarage + "€.");
}

//----------------------------------------------------NÚMERO DE ESCALAS

function scaleNums() {
  let nums = 0;
  for (let i = 0; i < flights.length; i++) {
    if (flights[i].scale === true) {
      nums += 1;
    }
  }
  console.log("Hoy " + nums + " vuelos realizan escala.");
}

//----------------------------------------------------ÚLTIMOS VUELOS

function lastFlights() {
  let last = [];
  for (let i = flights.length - 1; i > 5; i--) {
    last.push(flights[i].from);
  }
  console.log("Los últimos destinos de hoy son: " + last.join(", ") + ".");
}

//----------------------------------------------------REGISTRAR NOMBRE

function insertName() {
  let name;
  do {
    name = prompt("Ingrese su nombre.");
  } while (name === null);
}

//Llamadas codigo.

insertName();
alert("Vuelos de hoy:");
flightsToday();
alert("Precio medio de los vuelos.");
avaragePrice();
alert("Numero de vuelos con escala.");
scaleNums();
alert("Destino de los últimos vuelos de hoy.");
lastFlights();
alert("Feliz vuelo.");
