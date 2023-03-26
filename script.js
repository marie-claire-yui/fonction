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

// cette fonction est le constructeur
function Jeux(titre, annee, console, description) {
    this.titre = titre,
    this.annee = annee,
    this.console = console
    this.description = description
  };

// créer 10 instances de l'objet Jeux
  let jeu1 = new Jeux("Super Mario Bros", 1985, "NES","Super Mario Bros. (スーパーマリオブラザーズ, Sūpā Mario Burazāzu?) est un jeu vidéo de plates-formes à défilement horizontal développé par Nintendo R&D4 et édité par Nintendo. Il est sorti sur Famicom au Japon en 1985 puis sur Nintendo Entertainment System en Amérique du Nord la même année et en 1987 en Europe. Il s'agit du premier jeu de la série Super Mario. ");
  let jeu2 = new Jeux("Super Mario Bros 2", 1987, "NES","Super Mario Bros. 2 (ou Super Mario USA au Japon) est un jeu vidéo de plates-formes développé par Nintendo R&D4 et édité par Nintendo. Il sort sur Nintendo Entertainment System en 1988 en Amérique du Nord, en 1989 en Europe puis en 1992 au Japon. ");
  let jeu3 = new Jeux("Super Mario Bros 3", 1988, "NES","Super Mario Bros. 3 (スーパーマリオブラザーズ3, Sūpā Mario Burazāzu Surī?) est un jeu vidéo de plates-formes développé et édité par Nintendo sur Nintendo Entertainment System. Il s'agit du troisième volet de la série Super Mario et il est commercialisé en 1988 au Japon, en 1990 aux États-Unis et en 1991 en Europe. Le développement est pris en charge par Nintendo Entertainment Analysis & Development sous la houlette de Shigeru Miyamoto, qui dirige le jeu avec Takashi Tezuka et Hiroshi Yamauchi. ");
  let jeu4 = new Jeux("Super Mario Land", 1989, "Game Boy","Super Mario Land (スーパーマリオランド, Sūpā Mario Rando?) est un jeu vidéo de plates-formes développé puis édité par Nintendo pour le Game Boy. Il s'agit du premier jeu de plates-formes et du premier Super Mario sorti sur cette console. Le jeu sort en 1989 au Japon et aux États-Unis, puis en France en septembre 1990. Ce jeu fait partie des titres de lancement de la Game Boy. ");
  let jeu5 = new Jeux("Super Mario World", 1990, "SNES","Super Mario World (スーパーマリオワールド, Sūpā Mario Wārudo?), sous-titré Super Mario Bros. 4 au Japon4, est un jeu vidéo de plates-formes développé et édité par Nintendo sur Super Nintendo. Le développement a été assuré par la division Nintendo EAD, dirigée par Shigeru Miyamoto ; ce dernier a réalisé le jeu aux côtés de Takashi Tezuka.");
  let jeu6 = new Jeux("Super Mario Land 2: 6 golden coins", 1992, "Game Boy","Super Mario Land 2: 6 Golden Coins est un jeu vidéo de plates-formes sorti en 1992 sur Game Boy, développé et édité par Nintendo. C'est le deuxième jeu de la série Super Mario à sortir sur Game Boy après Super Mario Land en 1989 dont il est la suite. Le jeu marque la première apparition du personnage Wario, double maléfique de Mario. ");
  let jeu7 = new Jeux("Super Mario All-Stars", 1993, "SNES","Super Mario All-Stars (スーパーマリオコレクション, Sūpā Mario Korekushon?, litt. Super Mario Collection) est un jeu vidéo de plate-formes développé par Nintendo EAD et édité par Nintendo. Il est sorti en 1993 sur Super Nintendo. Il s'agit d'une compilation qui contient un remake des quatre premiers jeux en deux dimensions de la série Super Mario. ");
  let jeu8 = new Jeux("Wario Land: Super Mario Land 3", 1994, "Game Boy","Wario Land: Super Mario Land 3 est un jeu vidéo de plates-formes sorti en 1994 sur Game Boy. Le jeu a été développé et édité par Nintendo. Wario Land est le troisième jeu de la série Super Mario Land. Pour cet épisode, Wario vole la vedette à Mario. ");
  let jeu9 = new Jeux("Super Mario World 2: Yoshi's Island", 1995, "SNES","Super Mario World 2: Yoshi's Island (スーパーマリオ ヨッシーアイランド ou Yoshi's Island (ou encore Yoshi's Island: Super Mario Advance 3 pour la version Game Boy Advance) est un jeu de plate-forme de Nintendo sorti en 1995 sur Super Nintendo, puis en 2002 sur Game Boy Advance. Il a été réédité sur Nintendo Switch en 2019. ");
  let jeu10 = new Jeux("Super Mario 64", 1996, "Nintendo 64","Super Mario 64 (スーパーマリオ64, Sūpā Mario Rokujūyon?) est un jeu de plates-formes développé par le studio japonais Nintendo Entertainment Analysis and Development sous la direction de Shigeru Miyamoto et publié par Nintendo pour la Nintendo 64. Il sort au Japon et aux États-Unis en 1996 puis en Europe et en Australie en 1997. Épisode de la série Super Mario, il est un des jeux disponibles au lancement de la console5. ");


console.log(jeu1["titre"]);
  
// exercice 2 créer un objet collection qui contient toutes les instances

// lisa
let maCollection = {...{jeu1}, ...{jeu2}, ...{jeu3},...{jeu4}, ...{jeu5}, ...{jeu6}, ...{jeu7}, ...{jeu8}, ...{jeu9}, ...{jeu10}};

for (const key in maCollection)
{
    console.log(maCollection[key]); //syntaxe obligatoire lorsque la clé est dynamique
};

results.innerHTML = Object.values(maCollection).map( (jeu,index) =>`
    <div class="card">
        <h2>Titre : ${jeu.titre}</h2>
        <h3>Console : ${jeu.console}</h3>
        <h4>Année : ${jeu.annee}</h4>
     <a href="#up" ><button id="${"jeu"+ ((index++)+1)}" class="popupjeu">cliquez ici</button></a>
    </div>
`).join("");

const btnpop = document.getElementsByClassName('popupjeu');
let creation_div = document.createElement("div");  // création de div
let image = document.createElement("img");
let h2 = document.createElement("h2");
let h3 = document.createElement("h3");
let paragraphe = document.createElement("p");

let creation_ancre = document.createElement("a");

creation_div.append(image,h2,h3,paragraphe,creation_ancre);
  document.body.append(creation_div); 

for (let index = 0; index < btnpop.length; index++) {
 
 btnpop[index].addEventListener('click', e => {
  let key = e.target.id; // récupère l'ID que l'on stocke dans key
  image.setAttribute("src", `img/image${index+1}.jpg`);
  console.log(image);
  paragraphe.innerHTML = maCollection[key].description;
  h2.innerHTML = maCollection[key].titre;
  h3.innerHTML = maCollection[key].console;
  
 creation_div.setAttribute("id", "up");
creation_ancre.setAttribute("href","#");
creation_ancre.innerHTML = "&times;";
 
// window.onclick = function(event) {
//   console.log(event.target);
//   if (event.target == popupjeu) {
//    popupjeu.style.display = "none";
//   }
// }


})
// btnpop[index].addEventListener('click', e => {console.log(maCollection[btnpop[index].id])})
};




// Object.values pour avoir les values de l'objet de l'Object
// map pour parcourir les éléments un à un d'un objet
// entre () de map on a ce qu'on va afficher
// join pour enlever le , entre les div
// innerHTML pour afficher sur la page html

// suite de l'énoncé
//faire les popup pour chaques jeu de votre ta&bleau de jeux avec une description du jeu pour
// chaque popup qui decris le jeu en question 




//pb: pop up qui s'ouvre mais même quand on le referme --> reouvre toujours la première popup qui a été ouvert même quandon clique sur un autre titre




























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




