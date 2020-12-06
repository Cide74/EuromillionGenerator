//? Objectif c'est de creer un generateur pour l'euromillion en fonction du nombre de numero et d'etoile choisi par tirage 

        / les fonctions utilisées /

            function generateNumber(min, max) {  
                return Math.floor(Math.random() * (max - min + 1)) + min;   
            }


// creer un generateur de numéro allant de 1 à 50 et pour les étoiles de 1 à 12

    // Retourne un nombre aléatoire compris entre 1 et 50
        
    function oneGrill () {
        var randomNumber = generateNumber(1, 50)
        console.log( randomNumber );
     }
        for(var counter = 0; counter < 5; counter++) { //on la repette 5 fois
        oneGrill();
        }

    // creer un generateur d'étoile allant de 1 à 12
     function startGrill () {
        var randomStart = generateNumber(1, 12)
        console.log( randomStart );
     }
        for(var counter = 0; counter < 2; counter++) { //on la repette 2 fois
        startGrill();
        }


Afficher le 

/*



// générer une grille avec 5 nombres et 2 etoiles

for(var counter = 0; counter < 5; counter++) { //on la repette 5 fois
    number();
}
console.log( generateNumber)

for(var counter = 0; counter < 2; counter++) { //on la repette 2 fois
    generateStart();
}
console.log( generateStart)



function game() {

    //var count = 0; count> 10; count++;
    var appElement = document.getElementById('player');
    var newDivElement = document.createElement ('div');
    newDivElement.classList.add('dice')
    appElement.appendChild(newDivElement);      
   
    function searchedNumber(min, max) {
        var number = Math.round(Math.random() * (max - min + 1));
        return number;
    }
    
    var fullNumber = searchedNumber ( 1, 6);
    console.log (fullNumber);
    
    //newDivElement.style.backgroundPosition = "-"+(fullNumber-1)*100+"px";

}


game()
game()
game()
*/