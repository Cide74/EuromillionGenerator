event.preventDefault();



Element.addEventListener("submit", function (event) {
  event.preventDefault();


var divElement = document.createElement("div")

var divElement = document.createElement("div");
divElement.className = "resultatTirage";


var divElement = document.getElementById("tirageNumero");
divElement.innerHTML = "test pour voir le tirage";


var divElement = document.getElementById("tirageNumero");
divElement.innerHTML = "Voici le tirage : " + randomNumber;

divElement.innerHTML = "Voici le tirage : " + oneGrill();




function oneGrill() {
  //   var randomNumber = generateNumber(1, 50);
  return generateNumber(1, 50);
}
consol


var divElement = document.getElementById("tirageNumero");
divElement.innerHTML = "Voici le tirage : " + oneGrill();


function tirage5Fois(a) {
  for (var counter = 0; counter < a; counter++) {
    //on la repette 5 fois
    tirageArray[counter] = generateNumber(1, 50);
    console.log("tirageArray[counter]:", tirageArray[counter]);
  }
}
tirage5Fois(5);
console.log("tirageArray[counter]:", tirageArray);


var tirageArray = [];

app.js:28 tirageArray[counter]: (5) [8, 31, 11, 22, 12]


divElement.innerHTML = "Voici le tirage : " + tirageArray;