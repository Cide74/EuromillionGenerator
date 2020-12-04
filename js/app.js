// Objectif ultime: lancer des dés

// Fonction qui génère un nombre entier aléatoire
// Prends 2 paramètres représentant le minimum et le maximum
// Retourne un nombre aléatoire compris entre minimum et maximum
function generateNumber(min, max) {
    // Merci MDN, formule pour avoir un nombre entier compris entre min et max inclus
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// fonction calculOffset qui retourne une chaîne de caractère
// Cette fonction doit prendre 1 paramètre représentant le numéro de la face et retourner la chaine de caractère qui va bien, par exemple -> si je reçois 3 je retourne '-200px'
function calculOffset(face) {
    var offset = face - 1;
    offset = offset * -100;
    offset = offset + 'px';
    return offset;
}

// fonction qui lance un dé
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


function resetZone(zoneId) {
    // je cible la div à l'id demandé
    var zone = document.getElementById(zoneId);
    // je réécris son contenu html, en mettant une chaîne de caractère vide cela revient à vider la div
    zone.innerHTML = '';
}

function play(zone) {
    resetZone(zone);
    for (var counter = 0; counter < numberOfDice; counter++) {
        throwDice(zone);
    }
}

var numberOfDice = 3;

// je cible l'élement interactif
var buttonPlayerElement = document.querySelector('#playerBtn');


// je prépare quoi faire
function handlePlayerBtnClick() {
    play('player');
}

// je pose mon écouteur
buttonPlayerElement.addEventListener('click', handlePlayerBtnClick);

// idem pour dealer
var buttonDealerElement = document.querySelector('#dealerBtn');

function handleDealerBtnClick() {
    play('dealer');
}

buttonDealerElement.addEventListener('click', handleDealerBtnClick);

// on peut écouter des évenements sur l'ensemble du document
function handleKey(event) {
    if (event.code === 'Space') {
        play('player');
        play('dealer');
    }
}

document.addEventListener('keyup', handleKey);

// cibler le form
var formElement = document.getElementById('configForm');

// poser un écouteur
// via l'événement submit on réagit à la soumission form, que ce soit via un bouton submit ou via la touche entrée
formElement.addEventListener('submit', function(event) {
    // 1ère chose à faire : empecher la soumission par défaut du formulaire qui actualise la page
    // la méthode preventDefault empeche le comportement par défaut d'un événement
    event.preventDefault();
    
    // je veux récupérer la valeur saisie dans le champ
    var diceNumberElement = document.getElementById('diceNumberInput');
    // on remarque une propriété value sur les element input, voir même valueAsNumber pour les input de type number
    // console.dir(diceNumberElement);
    numberOfDice = diceNumberElement.valueAsNumber;
    
    // je cible le span
    var spanElement = document.getElementById('diceNumber');
    // je change son texte
    spanElement.textContent = numberOfDice;
});



// rappel:  un objet peut contenir des propriétés : des paires clés: valeur
//          et des méthodes : des paires clés: fonction
// var alexis = {
//     age: 30,
//     nom: 'Vincent',
//     direBonjour: function() {
//         console.log('bonjour');
//     },
// };
// alexis.age; // je lis une propriété
// alexis.direBonjour(); // j'execute une méthode