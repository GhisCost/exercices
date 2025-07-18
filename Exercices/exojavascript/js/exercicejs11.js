// Exercice 1
let animal = {
    espece: "Canis Lupus",
    age: 5,
    estDomestique: false,
};

console.log(animal);

// Exercice 2 

console.log(animal.espece);

// Exercice 3

animal.age = 10;

console.log(animal);

// Exercice 4

animal.couleur = "gris";

console.log(animal)

// Exercice 5

delete animal.estDomestique;

console.log(animal);

// Exercice 6

for(let user in animal){
    document.writeln("<p>"+animal[user]+"</p>");
}

// Exercice 7

let voiture = {
    marque:"Bugatti",
    annee:"1936",
    presentation:function(){
        document.writeln("Cet voiture est une " + this.marque + " de " + this.annee + ".");   
}
}

voiture.presentation();

// Exercice 8

let ecole = {
    nom : "LePoleS",
    classe: {
        nbEleves:11,
        info:function(){
            document.writeln("<p>Cette classe contient "+ this.nbEleves + " élèves !</p>");
        }
    }
}

ecole.classe.info();

// Exercice 9

let produits =[
    {nom: "Tabouret",
    prix: 450},
    {nom:"Champagne",
    prix: 689,
    }
];

console.log(produits[0].prix);


// Exercice 10

for(let user of produits) {
    console.log(user.nom);
};

// Verification des copies propriétés des copies superficielles

let testcopie= produits.slice(0,2);

console.log(testcopie);

testcopie[0].nom="truc";

console.log(produits);