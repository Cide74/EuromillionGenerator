// Objectif ultime: lancer des dés

// écrire la recette pour afficher un dé
// créer une div
var diceElement = document.createElement('div');
// la configurer avec la classe dice
diceElement.className = 'dice';
// cibler la div avec l'id player
var playerElement = document.getElementById('player');
// insérer la nouvelle div dans la div avec l'id player
playerElement.appendChild(diceElement);

// tirer un nombre aléatoire et s'en servir pour changer la face du dé

// répéter l'opération plusieurs fois