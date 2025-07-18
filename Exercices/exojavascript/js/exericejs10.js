// Exercice 1 

let prenom = ["Jeam-Eude","Clotaire","Jacqueline","Micheline"];

console.log (prenom[0],prenom[prenom.length-1]);

// Exercice 2

let fruits = ['durian','tomate','coing'];

fruits.push("Cynorhodon");

console.log(fruits);

// Exercice 3

let villes = ["Le Bosquet","Rata Sum", "Hoelbrak"];
villes.unshift("Arche du Lion");
console.log(villes);

// Exercice 4

let couleurs = ["Bleu","Noir","Violet","Rouge","Orange"];
couleurs.shift();
console.log(couleurs);

// Exercice 5

let animaux = ["Tigre","Panthère","Gazelle","Lion","Hyene"];
animaux.splice(2,1);
console.log(animaux);

// Exercice 6

let lettre = ["a","b","d"];

lettre.splice(2,0,"c");
console.log(lettre);

// Exercice 7

let nombres= [50,789,645,46,189,3];
let nouveauNombres= nombres.slice(2,5);
console.log(nouveauNombres);

// Exercice 8 

let pays = ["Botswana","Liban","Egypte","Tibet","Suriname","Nouvelle-Zelande"]

console.log(pays.length);

// Exercice 9

let prenom2= ["Jeam-Eude","Clotaire","Jacqueline","Micheline"];

for (let i=0; i<prenom2.length; i++ ){
    console.log(prenom2[i]);
}

// Exercice 10

let vide = [];
vide.unshift ("élément debut1","élément debut2");
vide.push ("élément fin1","élément fin2","élément fin3");
vide.shift();
vide.splice(2,1);
console.log(vide);

prenom2.sort()
console.log(prenom2)

