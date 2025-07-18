// Exercice1

// let ville = "Créteil"
// let prenom = "Ghislain"
// let age = "38 ans"

// document.writeln("Bonjour, je m'appelle " + prenom + ", j'ai " + age + " et j'habite à " + ville + ".");

// Exercice 2

// let long= prompt("Quelle est la longueur du rectangle (me demande pas lequel je sais pas) ?");
// let larg= prompt("Quelle est la largeur du rectangle ? (toujours aucune idée de quel rectangle on parle)");
// let unite= prompt("dans quelle unité était les mesures précédentes ?");

// document.writeln("La surface du rectangle est " + long*larg + unite + "²");

// Exercice 3

// let nrb= prompt("Donnez moi un nombre");

// if (nrb%2 == 0){
//     document.writeln("Votre nombre est pair !");
// } else{
//     document.writeln("Votre nombre est impair !");
// }

// Exercice 4

// function direBonjour(prenomf){
//     document.writeln("<p>Bonjour " + prenomf + "</p>");
// }

// let prenom= prompt("Quel est votre prenom ?");

// direBonjour(prenom);

// Exercice 5

// let nbr1 = prompt("Donnez moi un nombre");
// let nbr2 = prompt("Donnez moi un autre nombre");

// function test (nb1,nb2) {
 // if(isNaN(nb1) || isNaN(nb2)){
//     document.writeln("Ce n'est pas des nombres");
//     return;
 // }
// if (nb1 > nb2) {
//   document.writeln("<p>" + nb1 + " est plus grand que " + nb2 + "</p>");
// } else if (nb1 == nb2) {
//   document.writeln("<p>Vos deux nombres sont egaux</p>");
// } else {
//   document.writeln("<p>" + nb1 + " est inférieur à " + nb2 + "</p>");
// }
//  }

//  test (nbr1,nbr2);

// Exercice 6 

// let nb1= parseInt(prompt("Donnez moi un nombre"));
// let nb2 = parseInt(prompt("Donnez moi un autre nombre"));
// let operation = prompt("Donnez moi une opération (+,-,/,*)");

// function calcul(num1,num2,ope){
//     var resultat;
//     if (ope == "+"){
//         resultat = (num1+num2);
//     } else if (ope == "-"){
//         resultat= (num1 - num2);
//     } else if (ope == "*"){
//         resultat= (num1 * num2);
//     } else if (ope == "/"){
//         resultat= (num1 / num2); 
//     } else {
//         resultat= "que l'opération n'est pas valable !";
//     }
//  return resultat;
// }

// let resultataff = calcul(nb1,nb2,operation);

// document.writeln("Le resultat de votre opération est " +  resultataff );

// Exercice 7

// let age = parseint(prompt("Quel est votre âge ?"));

// function majorite(num1){
//     let vote= '';
//     if(num1<18){
//         vote = false;
//     } else { 
//         vote = true;
//     }
//     return vote;
// };

// let majeur= majorite(age);

// if (majeur){
//     document.writeln("Vous pouvez votez !");
// } else {
//     document.writeln("Vous ne pouvez pas votez !");
// }

// Exercice 8

// let heure = prompt("Donnez moi une heure (chiffre entier entre 0 et 23)");

// if (heure>=6 && heure <=11){
//     document.writeln("Bonjour !");
// } else if( heure>=12 && heure <=17){
//     document.writeln("Bon après-midi !")
// } else if(heure>=18 && heure<=22){
//     document.writeln("Bonsoir !")
// } else {
//     document.writeln("Bonne nuit !")
// }

// Exercice 9

// let tempc = prompt("Donnez moi une température en celsius (sans écrire l'unité)");

// function convertion(num1){
//     return (num1*1.8)+32
// };

// let tempf = convertion(tempc);

// document.writeln("En Fahrenheit celà fait: " + tempf + " degrès.")

// Exercice 10 

// let prix = parseInt(prompt("Donnez moi un prix HT !"));
// let tva = parseFloat(prompt("Donnez moi le taux de tva !"));

// function calcTva(num1,num2){
//     return (num1 + (num1 * (num2/100))) ;
// }

// let prixTTC = calcTva(prix, tva);

// document.writeln("Le prix TTC est de " + prixTTC + " euros !")

// Quelle est la différence entre let const et var ?
// Exemple différence Let et Var
// Const ne peut pas avoir sa valeur changée
function testVarLet() {
    if (true) {
        var x = 1;
        let y = 2;
    }
 
    //console.log(x); // ✅ Accessible, car var est visible dans toute la fonction
    //console.log(y); // ❌ Erreur : y is not defined (car let est bloqué dans le if)
}
 
testVarLet();
 
// Que se passe-t-il si tu déclares une variable sans lui donner de valeur
let vide; // Il ne se passe rien si je laisse la valeur vide
 
// Est ce qu'on peut changer la valeur d'une variable déclarée avec const :
 
const YES = "oui";
 
// YES = "non";
//Uncaught TypeError: Assignment to constant variable.
// Réponse : non
console.log(YES);
 
// 4 : Que va afficher ce code ?
 
let x;
 
console.log(x);
 
// 5 . Que se passe-t-il si aucune condition if ou else if n'est vraie ?
 
if (2 > 3) {
    console.log('oui');
} else if (3 < 0.5) {
    console.log('non');
} else {
    console.log("je suis else");
}
 
 
// 6. Que va afficher ce code SI note = 15 :
 
// if (note >= 16) {
//     console.log("Très bien");
// } else if (note >= 12) {
//     console.log("Assez bien"); // ICI 15 est supérieur à 12;
// } else {
//     console.log("Insuffisant");
// }
 
// 7. Quelle est la différence entre / et % en JS ?
 
// "/" est l'opérateur de division alors que % est l'opérateur de modulo
 
 
// 8. Que vaut 7 % 3 ?
 
// 2 * 3 = 6 pour arriver jusqu'à 7 il reste 1
 
 
// 9 . Que fait l'opérateur + si on l'utilise entre une chaine de caractère et un nombre ?
 
console.log("30" + 30); // Il affichera 3030
 
// 10. Que vaut TRUE && FALSE ?
/**
 * TRUE && TRUE = TRUE
 * TRUE && FALSE = FALSE
 * FALSE && FALSE = FALSE
 *
 * if(true && false) {
 *  console.log('hgighigigigi')
 * }
 *
 */
 
// 11. Que vaut FALSE || TRUE ?
 
// Il vaut TRUE et valide la condition
 
 
// 12. Que fait l'opérateur ! (non logique)?
// Il vérifie si la variable à la valeur contraire à celle true