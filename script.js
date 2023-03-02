//déclaration de la fonction
function surface(x,y){
   console.log(x*y);
}

//appel de la fonction
surface(2,2);


//fonction fléchée
const getSurface = (Long, Larg)=> {
    console.log(Long*Larg);
}

getSurface(3,3);

//objet
// nom de l'objet apprenant
// deux attributs nom et prenom (séparé par des virgules)
var apprenant = {
    nom : "Doe", 
    prenom : "John",
    "age de l'apprenant" : 30,
    clog : function (){
       console.log(this.nom)
    }

    // clog:() => { console.log(this.nom)};
};

// le contexte : ne peut être invoqué que dans l'objet même, notion de portée
// console.log(apprenant.clog); // on accède à la valeur de l'attribut de l'objet
apprenant.clog(); // attribut de type fonction
console.log(apprenant["age de l'apprenant"]);
// une fonction avec le mot clé function est accessible depuis l'extérieur de l'objet tandis qu'une fonction fléchée est cantonnée à l'intérieur de l'objet

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Working_with_Objects

//dev docs . io / indien ocean / java phhp etc

// exercice 1 pour chaque console le titre lannée et la console
// une instance de l'objet jeu


// cette fonction est le constructeur
function Jeux(titre, annee, console) {
    this.titre = titre,
    this.annee = annee,
    this.console = console
  };

// créer 10 instances de l'objet Jeux
  let jeu1 = new Jeux("Super Mario Bros", 1985, "NES");
  let jeu2 = new Jeux("Super Mario Bros 2", 1987, "NES");
  let jeu3 = new Jeux("Super Mario Bros 3", 1988, "NES");
  let jeu4 = new Jeux("Super Mario Land", 1989, "Game Boy");
  let jeu5 = new Jeux("Super Mario World", 1990, "SNES");
  let jeu6 = new Jeux("Super Mario Land 2: 6 golden coins", 1992, "Game Boy");
  let jeu7 = new Jeux("Super Mario All-Stars", 1993, "SNES");
  let jeu8 = new Jeux("Wario Land: Super Mario Land 3", 1994, "Game Boy");
  let jeu9 = new Jeux("Super Mario World 2: Yoshi's Island", 1995, "SNES");
  let jeu10 = new Jeux("Super Mario 64", 1996, "Nintendo 64");

  
// exercice 2 créer un objet collection qui contient toutes les instances

// for (let index = 1; index < 11; index++){
//     let collection = {
//         `attribut${[index]}:jeu${[index]}`
//     }
// }

// console.log(collection);



// //méthode anne-sophie
// problème transfert les propriétés ainsiq ue leurs valeurs sans le contenant qui est l'objet
// let maCollection = new Object;
// maCollection = Object.assign({}, jeu1, jeu2);

// //david
// let marioCollection = { ...{jeu1}, ...{jeu2}, ...{jeu3}
// };
// console.log(marioCollection);

// lisa
let maCollection = {...{jeu1}, ...{jeu2}, ...{jeu3},...{jeu4}, ...{jeu5}, ...{jeu6}, ...{jeu7}, ...{jeu8}, ...{jeu9}, ...{jeu10}};

for (const key in maCollection)
{
    console.log(maCollection[key]); //syntaxe obligatoire lorsque la clé est dynamique
};

// pour chaque objet de l' objet à l'intérieur de la collection
// H2 nom de la console
// H3 nom du jeu1
// h4 nom de l'année
// cette div doit être affichée dans l'html
// il y aura donc 10 div
//utiliser la méthode map

