//3 preguntas por letra
let name;
let questions = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },

  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },

  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },

  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },

  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },

  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },

  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },

  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },

  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },

  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },

  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },

  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },

  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },

  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },

  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },

  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },

  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },

  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },

  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },

  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },

  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },

  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },

  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },

  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },

  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },

  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos",
  },

  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];
let rankingTable = [];
let leave = false;

//Presentacion
function insertName() {
  do {
    name = prompt("Cual es tu nombre?.");
  } while (name === null || name === "");
  alert(
    "PASAPALABRA - REGLAMENTO:\nContesta correctamente el mayor número de preguntas.\nEscribe 'pasapalaba' para saltar la pregunta.\nEscribe 'end' para abandonar el juego"
  );
  alert("Empieza el juego!");
}

//Rondas de preguntas
function turns() {
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].status === 0) {
      let letters = prompt(questions[i].question);
      if (letters === "end") {
        leaveGame();
        return (leave = true);
      } else if (letters === "pasapalabra") {
        questions[i].status = 0;
      } else if (letters === null) {
        alert("Incorrecto!");
        questions[i].status = false;
      } else if (letters.toLowerCase() === questions[i].answer) {
        alert("Correcto!");
        questions[i].status = true;
      } else {
        alert("Incorrecto!");
        questions[i].status = false;
      }
    }
  }
}

//Checkea el status
function checkStatus() {
  if (leave === true) {
    return false;
  }
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].status === 0) return true;
  }
  return false;
}

//Abandona el juego
function leaveGame() {
  let numTrue = 0;
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].status === true) {
      ++numTrue;
    }
  }
  alert("Has abandonado el juego");
  alert("Has acertado " + numTrue + " preguntas.");
  leave = true;
}

//Ranking
function ranking() {
  let hits = 0;
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].status === true) ++hits;
  }
  alert("Has obtenido " + hits + " aciertos.");
  const rankingUser = (name, hits) => ({
    Nombre: name,
    Aciertos: hits,
  });
  rankingTable.push(rankingUser(name, hits));
  rankingTable.sort(function (a, b) {
    return b.Aciertos - a.Aciertos;
  });
  if (hits === questions.length - 1) {
    alert("Increible! Has completado el rosco de Pasapalabra.");
  }
  for (let i = 0; i < rankingTable.length; i++) {
    console.log(
      "Jugador: " +
        rankingTable[i].Nombre +
        " - Aciertos: " +
        rankingTable[i].Aciertos
    );
  }
}

//Volver a jugar?
function repeatGame() {
  let repeatGamequestion = confirm("Quieres volver a jugar?");
  if (repeatGamequestion === true) {
    for (let i = 0; i < questions.length; i++) {
      questions[i].status = 0;
    }
    leave = false;
    startGame();
  } else if (repeatGamequestion === false) {
    alert("Has finalizado el juego. Hasta otra " + name + "!");
  } else {
    repeatGame();
  }
}

//Main function
function startGame() {
  insertName();
  do {
    turns();
    checkStatus();
  } while (checkStatus() === true);
  if (leave === false) {
    ranking();
    repeatGame();
  }
}

startGame();
