let list = rouletteBalls();
let list2 = rouletteBalls();
let rankingTable = [];
let bingoCard = {
  line1: [
    { number: undefined, matched: false },
    { number: undefined, matched: false },
    { number: undefined, matched: false },
    { number: undefined, matched: false },
    { number: undefined, matched: false },
  ],
  line2: [
    { number: undefined, matched: false },
    { number: undefined, matched: false },
    { number: undefined, matched: false },
    { number: undefined, matched: false },
    { number: undefined, matched: false },
  ],
  line3: [
    { number: undefined, matched: false },
    { number: undefined, matched: false },
    { number: undefined, matched: false },
    { number: undefined, matched: false },
    { number: undefined, matched: false },
  ],
};
let name;
let numberAlert;
let turn = 0;
let OkLine1 = false;
let OkLine2 = false;
let OkLine3 = false;
let randomNum;
let bingocomplete = false;

//GENERADOR DE BOLAS
function rouletteBalls() {
  let allBalls = [];
  for (let i = 1; i <= 25; i++) {
    allBalls.push(i);
  }
  return allBalls;
}

//PRESENTACIÓN
function newGame() {
  alert("Bienvenido al Bingo.");
  do {
    name = prompt("Ingrese su nombre.");
  } while (name === null || name === "");
  alert("Empieza el juego!");
  createBingoCard();
}

//CREA UN NUEVO CARTÓN
function createBingoCard() {
  alert("Aquí tienes un cartón nuevo.");
  for (let i in bingoCard) {
    for (let j in bingoCard[i]) {
      bingoCard[i][j].number = list2[Math.floor(Math.random() * list2.length)];
      let index = list2.indexOf(bingoCard[i][j].number);
      list2.splice(index, 1);
    }
  }
  showCard();
  BingoCardOk();
}

//REPETIR CARTON
function BingoCardOk() {
  let cardOk = prompt("Desea quedarse con este cartón? y/n");
  if (cardOk === "y" || cardOk === "") {
    newNum();
    keepPlaying();
  } else if (cardOk === "n" || cardOk === null) {
    list2 = rouletteBalls();
    createBingoCard();
  } else {
    BingoCardOk();
  }
}

//PREGUNTA "SEGUIR JUGANDO?"
function keepPlaying() {
  let promptKeepPlaying = prompt("Quieres seguir jugando? y/n");
  if (promptKeepPlaying === "y" || promptKeepPlaying === "") {
    newNum();
    if (bingocomplete === false) {
      keepPlaying();
    }
  } else if (promptKeepPlaying === "n" || promptKeepPlaying === null) {
    alert("Has abandonado la partida."); //FIN DEL PROGRAMA
  } else {
    keepPlaying();
  }
}

//PREGUNTA "VOLVER A JUGAR?"
function rePlaying() {
  let promtRePlaying = prompt("Quieres volver a jugar? y/n");
  if (promtRePlaying === "y" || promtRePlaying === "") {
    list = rouletteBalls();
    list2 = rouletteBalls();
    turn = 0;
    OkLine1 = false;
    OkLine2 = false;
    OkLine3 = false;
    bingocomplete = false;
    newGame();
  } else if (promtRePlaying === "n" || promtRePlaying === null) {
    alert("Hasta otra " + name + "!"); //FIN DEL PROGRAMA
  } else {
    rePlaying();
  }
}

//MUESTRA EL CARTÓN
function showCard() {
  console.log(
    "TU CARTÓN: \n" +
      bingoCard.line1[0].number +
      " " +
      bingoCard.line1[1].number +
      " " +
      bingoCard.line1[2].number +
      " " +
      bingoCard.line1[3].number +
      " " +
      bingoCard.line1[4].number +
      " " +
      "\n" +
      bingoCard.line2[0].number +
      " " +
      bingoCard.line2[1].number +
      " " +
      bingoCard.line2[2].number +
      " " +
      bingoCard.line2[3].number +
      " " +
      bingoCard.line2[4].number +
      " " +
      "\n" +
      bingoCard.line3[0].number +
      " " +
      bingoCard.line3[1].number +
      " " +
      bingoCard.line3[2].number +
      " " +
      bingoCard.line3[3].number +
      " " +
      bingoCard.line3[4].number
  );
}

//NUMERO RULETA
function newNum() {
  randomNum = list[Math.floor(Math.random() * list.length)];
  let index = list.indexOf(randomNum);
  list.splice(index, 1);
  ++turn;
  let alertNum = confirm("El " + randomNum + "!");
  if (alertNum === true) {
    checkNumbers();
  } else {
    showCard();
  }
}

//ELIMINA NÚMERO SI COINCIDE
function checkNumbers() {
  for (let i in bingoCard) {
    for (let j in bingoCard[i]) {
      if (bingoCard[i][j].number === randomNum) {
        bingoCard[i][j].number = "X";
        bingoCard[i][j].matched = true;
      }
    }
  }
  winAlerts();
  if (bingocomplete === false) {
    showCard();
  }
}

//ALERTAS "LINEA!" / "BINGO!"
function winAlerts() {
  let check1 = 0;
  let check2 = 0;
  let check3 = 0;

  for (let i in bingoCard.line1) {
    if (bingoCard.line1[i].number === "X") {
      ++check1;
    }
  }
  for (let i in bingoCard.line2) {
    if (bingoCard.line2[i].number === "X") {
      ++check2;
    }
  }
  for (let i in bingoCard.line3) {
    if (bingoCard.line3[i].number === "X") {
      ++check3;
    }
  }

  if (check1 + check2 + check3 === 15) {
    alert("BINGO!");
    bingocomplete = true;
    showCard();
    alert("Felicidades! Has terminado en " + turn + " turnos.");
    ranking();
    rePlaying();
  } else if (check1 === 5 && OkLine1 === false) {
    OkLine1 = true;
    alert("LINEA!");
  } else if (check2 === 5 && OkLine2 === false) {
    OkLine2 = true;
    alert("LINEA!");
  } else if (check3 === 5 && OkLine3 === false) {
    OkLine3 = true;
    alert("LINEA!");
  }
}

//RANKING
function ranking() {
  let rank;
  switch (turn) {
    case 24:
    case 23:
      rank = 1;
      break;
    case 22:
    case 21:
      rank = 2;
      break;
    case 20:
    case 19:
      rank = 3;
      break;
    case 18:
    case 17:
      rank = 4;
      break;
    case 16:
    case 15:
      rank = 5;
      break;
    default:
      rank = 0;
      break;
  }
  alert("Has obtenido " + rank + " puntos.");

  const rankingUser = (name, turn, rank) => ({
    Nombre: name,
    Turnos: turn,
    Puntos: rank,
  });
  rankingTable.push(rankingUser(name, turn, rank));
  rankingTable.sort(function (a, b) {
    return a.Turnos - b.Turnos;
  });
  console.log("RANKING:");
  for (let i = 0; i < rankingTable.length; i++) {
    console.log(
      "Jugador: " +
        rankingTable[i].Nombre +
        " - Turnos: " +
        rankingTable[i].Turnos +
        " - Puntos: " +
        rankingTable[i].Puntos
    );
  }
}

newGame();
