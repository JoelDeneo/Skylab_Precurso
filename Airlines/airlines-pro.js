//AIRLINES

let name;
var flightsSameCost = [];
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
  let fligthsList;
  for (let i = 0; i < flights.length; i++) {
    fligthsList =
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
      fligthsList += " y si realiza escala.";
    } else {
      fligthsList += " y no realiza ninguna escala.";
    }
    console.log(fligthsList);
  }
}

function flightsTodaySameCost() {
  let fligthsList;
  for (let i = 0; i < flightsSameCost.length; i++) {
    fligthsList =
      "El vuelo " +
      flightsSameCost[i].id +
      ", con origen: " +
      flightsSameCost[i].to +
      " y destino: " +
      flightsSameCost[i].from +
      ", tiene un coste de " +
      flightsSameCost[i].cost +
      "€";
    if (flightsSameCost[i].scale === true) {
      fligthsList += " y si realiza escala.";
    } else {
      fligthsList += " y no realiza ninguna escala.";
    }
    console.log(fligthsList);
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
  do {
    name = prompt("Ingrese su nombre.");
  } while (name === null || name === "");
}

//----------------------------------------------------AIRLINES

function airlines() {
  insertName();
  alert("Vuelos de hoy:");
  flightsToday();
  alert("Precio medio de los vuelos.");
  avaragePrice();
  alert("Numero de vuelos con escala.");
  scaleNums();
  alert("Destino de los últimos vuelos de hoy.");
  lastFlights();
}

//--------------------AIRLINES PRO------------------------//

//----------------------------------------------------ADMIN

function admin() {
  let confirmCreateOrDelete = confirm(
    "Quieres eliminar(cancel) o crear(ok) un vuelo?"
  );
  if (confirmCreateOrDelete === true) {
    create();
  } else {
    delet();
  }
}

//----------------------------------------------------ADMIN EDIT

function edit() {
  let idDelete2 = confirm("Quiere seguir editando?");
  if (idDelete2 === true) {
    admin();
  } else {
    alert("Cerrando sesión de " + name); //Cierra aplicación
  }
}

//----------------------------------------------------ADMIN CREATE

function create() {
  let origin = prompt("Inserte el ORIGEN");
  let destiny = prompt("Inserte el DESTINO");
  let euros = Number(prompt("Inserte el COSTE"));
  let scales = confirm("El vuelo hace escala? No(cancel) Si(ok)");
  if (flights.length > 15) {
    alert("No se pueden crear más de 15 vuelos");
    edit();
  } else {
    flights.push({
      id: flights.length,
      to: origin,
      from: destiny,
      cost: euros,
      scale: scales,
    });
    flightsToday();
    let create2 = confirm("Seguir creando?");
    if (create2 === true) {
      create();
    } else {
      edit();
    }
  }
}

//----------------------------------------------------ADMIN DELETE

function delet() {
  let idDelete;
  do {
    idDelete = prompt("Inserte el ID del vuelo que desea eliminar");
    for (let i = 0; i < flights.length; i++) {
      if (idDelete == flights[i].id) {
        let item = flights.indexOf(flights[i]);
        flights.splice(item, 1);
      }
    }
    flightsToday();
  } while (idDelete !== null);
  edit();
}

//----------------------------------------------------USUARIO

function user() {
  let search = prompt(
    "Buscar por precio más alto, más bajo o igual? alto/bajo/igual"
  );
  switch (search) {
    case "alto":
      flights.sort(function (a, b) {
        return a.cost + b.cost;
      });
      flightsToday();
      searchOrPay();
      break;
    case "bajo":
      flights.sort(function (a, b) {
        return a.cost - b.cost;
      });
      flightsToday();
      searchOrPay();
      break;
    case "igual":
      let costflight = Number(prompt("Insterte precio"));
      let conditionPay = true;
      for (let i = 0; i < flights.length; i++) {
        if (costflight === flights[i].cost) {
          conditionPay = false;
          flightsSameCost.push(flights[i]);
        }
      }
      if (conditionPay === true) {
        alert("Precio no encontrado.");
        user();
      }
      flightsTodaySameCost();
      searchOrPay();
      break;
    default:
      user();
  }
}

//----------------------------------------------------USUARIO BUSCAR o PAGAR

function searchOrPay() {
  let searchPay = confirm("Seguir buscando(cancel) o comprar vuelo(ok)?");
  let condition = true;
  if (searchPay === true) {
    let idPay = Number(prompt("Instert id."));
    for (let i = 0; i < flightsSameCost.length; i++) {
      if (idPay === flightsSameCost[i].id) {
        condition = false;
        alert("Gracias por su compra " + name + ", vuelva pronto."); // Cierra aplicación
      }
    }
    if (condition === true) {
      alert("ID no encontrada.");
      searchOrPay();
    }
  } else {
    user();
  }
}

//----------------------------------------------------AIRLINES PRO

function airlinesPro() {
  let confirmUserOrAdmin = confirm("Eres usuario(cancel) o admin(ok)?");
  if (confirmUserOrAdmin === true) {
    admin();
  } else {
    user();
  }
}

//Llamadas codigo.
airlines();
airlinesPro();
