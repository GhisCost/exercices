// Ghislain Costagliola

let prenom = "Ghislain";
let age = 4;
let comprehension = true;
let tailleStatueLiberte = 73.25;

// document.writeln ( " <h2> Je m'appelle " + prenom + ", j'ai " + age + " ans, ma compréhension du Javascript est évaluée à " + comprehension + " et la taille de la statue de la liberté à New York est de " + tailleStatueLiberte + " mètres. </h2>");

let prenomUtil = prompt("Quel est votre prénom ?");
let ageUtil = prompt ("Désolé pour l'indiscrétion, mais quel est votre âge ?");

document.writeln ("<h3> Bienvenue " + prenomUtil + ", je m'appelle " + prenom + ". Vous avez " + ageUtil + " aujourd'hui ! Bon anniversaire ! </h3>" );