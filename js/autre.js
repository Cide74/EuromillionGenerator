
    //3  je creer l'element
    var tirageElement = document.createElement('ditirageElement
 var diceElement = document.createElement('div');
 console.log( diceElement);
 console.dir( diceElement);
 

 // la configurer avec la classe dice

diceElement.className = 'dice';
 console.log( diceElement );
 console.dir( diceElement );    

 // cibler la div avec l'id player

var playerElement = document.getElementById('player')
 console.log( playerElement );
 console.dir( playerElement );


 // insérer la nouvelle div dans la div avec l'id player

playerElement.appendChild(diceElement);
 console.log(playerElement);
 console.dir(playerElement);



function throwDice(targetId) {
    // écrire la recette pour afficher un dé
    // créer une div
    var diceElement = document.createElement('div');
    // la configurer avec la classe dice
    diceElement.className = 'dice';
    // cibler la div avec l'id player
    var targetElement = document.getElementById(targetId);
    // insérer la nouvelle div dans la div avec l'id player
    targetElement.appendChild(diceElement);
    // tirer un nombre aléatoire et s'en servir pour changer la face du dé
    // tirer un nombre entre 1 et 6
    var number = generateNumber(1, 6);
    // se servir de ce nombre pour en déduire un background position -> (x-1) * -100 px
    var backgroundPositionValue = calculOffset(number);
    // // configurer les style du dé pour lui mettre le background-position
    diceElement.style.backgroundPositionX = backgroundPositionValue;
}

/*
//Les Questions

var numberOfGrill = parseInt(prompt('Combien voulez-vous de grill'), 10);
var numberOfNumber = parseInt(prompt('Combien voulez-vous de de numéros'), 10);
var numberOfStart = parseInt(prompt("Combien voulez-vous d'étoiles"), 10);

for (var counter = 0; counter < numberOfDice; counter++) {
    throwDice('grill');
    throwDice('number');
    throwDice('start');
}