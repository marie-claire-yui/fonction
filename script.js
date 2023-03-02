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
    age : 30,
    clog : function (){
       console.log(this.nom)
    }

    // clog:() => { console.log(this.nom)};
};

// le contexte : ne peut être invoqué que dans l'objet même, notion de portée
// console.log(apprenant.clog); // on accède à la valeur de l'attribut de l'objet
apprenant.clog(); // attribut de type fonction

// une fonction avec le mot clé function est accessible depuis l'extérieur de l'objet tandis qu'une fonction fléchée est cantonnée à l'intérieur de l'objet