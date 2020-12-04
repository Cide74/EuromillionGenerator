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


var numberOfDice = parseInt(prompt('Combien voulez-vous de dés'), 10);

for (var counter = 0; counter < numberOfDice; counter++) {
    throwDice('player');
    throwDice('dealer');
}