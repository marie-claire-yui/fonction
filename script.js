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
console.log(apprenant["prenom"]);
// une fonction avec le mot clé function est accessible depuis l'extérieur de l'objet tandis qu'une fonction fléchée est cantonnée à l'intérieur de l'objet

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Working_with_Objects

//dev docs . io / indien ocean / java phhp etc

// exercice 1 pour chaque console le titre lannée et la console
// une instance de l'objet jeu

const results = document.querySelector('.results');
const btnpop = document.getElementsByClassName('popupjeu');
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


console.log(jeu1["titre"]);
  
// exercice 2 créer un objet collection qui contient toutes les instances

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



results.innerHTML = Object.values(maCollection).map( (jeu,index) =>`
    <div class="card">
        <h2>Titre : ${jeu.titre}</h2>
        <h3>Console : ${jeu.console}</h3>
        <h4>Année : ${jeu.annee}</h4>
       <button id="${"jeu"+ ((index++)+1)}" class="popupjeu" >cliquez ici</button>
    </div>
`).join("");

for (let index = 0; index < btnpop.length; index++) {
  console.log(btnpop[index]);
 btnpop[index].addEventListener('click', e => {
  let key = e.target.id;
  console.log(maCollection[key].titre);
})// récupérer ID
// btnpop[index].addEventListener('click', e => {console.log(maCollection[btnpop[index].id])})
//classList.add
};




// Object.values pour avoir les values de l'objet de l'Object
// map pour parcourir les éléments un à un d'un objet
// entre () de map on a ce qu'on va afficher
// join pour enlever le , entre les div
// innerHTML pour afficher sur la page html

// suite de l'énoncé
//faire les popup pour chaques jeu de votre ta&bleau de jeux avec une description du jeu pour
// chaque popup qui decris le jeu en question 
































//autre exercice

// var courses = {
//     "fruits": [
//       { "kiwis": 3,
//         "mangues": 4,
//         "pommes": null
//       },
//       { "panier": true },
//     ],
//     "legumes":
//       { "patates": "amandine",
//         "figues": "de barbarie",
//         "poireaux": false
//       }
//    };

//    let exempleArray = ['A','B','C'];
//    console.log(exempleArray); // affiche le tableau

// // affichage de chaque élément du tableau de façon successives
//    for (let k=0;k<exempleArray.length;k++){
//    console.log(exempleArray[k]); 
//   };


// let monArray = [0,1,2,3];
// a = monArray.push(4); // méthode push qui permet de rajouter à la fin du tableau ici 4
// console.log(a); // renvoie la taille du tableau
// console.log(monArray); // affiche le tableau

// monArray.push(5,6); // pour push 5 et 6 en même temps dans le tableau
// console.log(monArray);

// monArray.push(monArray[monArray.length-1] + monArray[monArray.length-2]); // ne fonctionne pas mais code juste
// console.log(monArray);

// let fibo = [0,1,1];

// for (let l = 1 ; fibo[l+1] < 50; l++ ){
//  // fibo[l]  = fibo.push(fibo[fibo.length-1]+fibo[fibo.length-2]);
//   fibo.push(fibo[l]+fibo[l+1]);
//   console.log(fibo);
// };




