//? Objectif c'est de creer un generateur pour l'euromillion en fonction du nombre de numero et d'etoile choisi par tirage 

        / les fonctions utilisées /

            function generateNumber(min, max) {  
                return Math.floor(Math.random() * (max - min + 1)) + min;   
            }

            /*
            function aleatoire(nombreTirages, nombreMax, nombreMini){
                var contenuTirage = new Array;
                var nombre;
                if (!nombreMini)        nombreMini = 1;                     //gestion d'erreur
                var nombreMaxTirages = nombreMax - nombreMini +1;
                if (nombreTirages > nombreMaxTirages)           nombreTirages = nombreMaxTirages; //gestion erreur
                for (i=0; i < nombreTirages ;i++){
                        nombre = Math.floor(Math.random() * nombreMax)+1; //retourne un nombre au hasard entre 1 et nombreMax
                        if (nombre >= nombreMini){
                                contenuTirage[i]= nombre;
                                for (t=0 ; t < i ;t++){
                                        if (contenuTirage[t]==nombre){ //si nombre existe déjà refait un tirage en décrémentant i
                                                i--;
                                        }
                                }
                        }
                        else i--;
                }
                if (nombreTirages == 1){
                        var retour = contenuTirage[0];
                        return retour;
                }
                return contenuTirage;
            }
*/
        / Les Variables /

            var tirageNumberArray = [];
            var tirageStarArray = [];
            var tirageArray = [];

// creer un generateur de numéro allant de 1 à 50 et pour les étoiles de 1 à 12

    // Retourne un nombre aléatoire compris entre 1 et 50
        function tirage5Fois(a) {
            for (var counter = 0; counter < a; counter++) {
              tirageNumberArray[counter] = generateNumber(1, 50);
              console.log("tirageNumberArray[counter]:", tirageNumberArray[counter]);
            }
        }
        tirage5Fois(5);
        console.log("tirageNumberArray[counter]:", tirageNumberArray);
    
    // creer un generateur d'étoile allant de 1 à 12
    
        function tirage2Fois(x) { //on la repette x fois
            for (var counter = 0; counter < x; counter++) {
              tirageStarArray[counter] = generateNumber(1, 12);
              console.log("tirageStarArray[counter]:", tirageStarArray[counter]);
            }
        }
        tirage2Fois(2);
        console.log("tirageStarArray[counter]:",tirageStarArray);
        



// afficher les chiffres tirer a l'ecran


//? je fait un tirage

        var nomberOfGrill = 0;
        var nomberOfNumber = 0;         
        var nomberOfStart = 0;        


function drawEuromillion(nomberOfNumber) {

    / recupère mes resultat /
    // 1 je cible mon element par id
    var nombreOfElement = document.getElementById('number');
    var starOfElement = document.getElementById('star');

    // 2 je modifi mon element par sa class
    nombreOfElement.className = ('number')
    starOfElement.className = ('star')

    // je créer ma div
    var div1Element = document.createElement("div");
    var div2Element = document.createElement("div");
    div1Element.className = "resultat1Tirage";
    div2Element.className = "resultat2Tirage";

    // je cible mon element
    var div1Element = document.getElementById("tirageNumber");
    var div2Element = document.getElementById("tirageStar");
    div1Element.innerHTML = "Voici le tirage : " + tirageNumberArray;
    div2Element.innerHTML = "Voici le tirage : " + tirageStarArray;
    


}

drawEuromillion()

                    /*    / nouvelle fonction a intégrer /
                        

var nombreMini = 1;
var nombreMax = 50;
var nombreTirages = 2;
var contenuTirage = [];

function aleatoire(nombreTirages, nombreMax, nombreMini){
    var contenuTirage = new Array;
    var nombre;
    if (!nombreMini)        nombreMini = 1;                     //gestion d'erreur
    var nombreMaxTirages = nombreMax - nombreMini +1;
    if (nombreTirages > nombreMaxTirages)           nombreTirages = nombreMaxTirages; //gestion erreur
    for (i=0; i < nombreTirages ;i++){
            nombre = Math.floor(Math.random() * nombreMax)+1; //retourne un nombre au hasard entre 1 et nombreMax
            if (nombre >= nombreMini){
                    contenuTirage[i]= nombre;
                    for (t=0 ; t < i ;t++){
                            if (contenuTirage[t]==nombre){ //si nombre existe déjà refait un tirage en décrémentant i
                                    i--;
                            }
                    }
            }
            else i--;
    }
    if (nombreTirages == 1){
            var retour = contenuTirage[0];
            return retour;
    }
    return contenuTirage;
}

console.log(nombreTirages, nombreMax, nombreMini)
aleatoire(2, 50, 1)



//document.write(nombres);

var tab = aleatoire(5, 10, 1); //tirage des éléments - ici 3 tirages compris entre 10 et 2
var nombres="";
for (i=0 ;i<tab.length ;i++){
        nombres= nombres + tab[i]+" "; //lecture de chaque élément du tirage
}
document.write(nombres);

var tab2 = aleatoire(4,10,4); //2 tirages aléatoire dans [12, 1]
var nombres="";
for (i=0 ;i<tab2.length ;i++){
        nombres= nombres + tab2[i]+" ";
}
document.write(nombres);
*/