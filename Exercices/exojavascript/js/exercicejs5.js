// Exercice 1

// let nb1 = prompt("Donnez un nombre s'il vous plait.");

// if(nb1 > 0){
//     document.writeln("Le nombre est positif !");
// } else if(nb1 < 0) {
// document.writeln("le nombre est négatif !");
// } else {
//     document.writeln("le nombre est nul !");
// }

// Exercice 2

// let age = prompt("Quel est votre âge ?");

// if (age > 120){
//     document.writeln("Donc t'es mort crétin !");
// } else if (age >= 18){
//     document.writeln("Vous prétendez être majeur !");
// }
// else{
//     document.writeln("Vous prétendez être mineur !");
// }

// Exercice 3

// let jour = prompt("Quel jour de la semaine sommes-nous ?");

// switch (jour) {
//   case "lundi":
//   case "Lundi":
//     document.writeln("J'aime pas le lundi... reviens demain !");
//     break;
//   case "mardi":
//   case "Mardi":
//     document.writeln(
//       "fait chier le mardi y a pas d'excuses pour pas bosser..."
//     );
//     break;
//   case "mercredi":
//   case "Mercredi":
//     document.writeln(
//       "Le jour des enfants ? C'était tellement bien quand y avais pas école le mecredi"
//     );
//     break;
//   case "jeudi":
//   case "Mecredi":
//     document.writeln("Déjà jeudi ? ouah j'ai pas vu la semaine passer moi");
//     break;
//   case "vendredi":
//   case "Vendredi":
//     document.writeln(
//       "T'as cru qu'on bossais le vendredi, on est déjà chez nous, reviens lundi !"
//     );
//     break;
//   case "samedi":
//   case "Samedi":
//     document.writeln("C'est le WEEKEND ! DEGAGE !");
//     break;
//   case "Dimanche":
//   case "dimanche":
//     document.writeln(
//       "C'est le 'jour du seigneur' va à la messe sombre pécheur"
//     );
//     break;

//   default:
//     document.writeln("UN JOUR DE LA SEMAINE ! Espèce de couillon !");
// }

// Exercice 4

// let langage = prompt("Quel est votre langage de programation préféré ?");

// switch(langage){
//     case "Python":
//         case "python":
//         document.writeln("Avoue que c'est juste parce que c'est nom de serpent ! Ou alors t'es un fan d'ia... Honte à toi");
//         break;
//     case "Javascript":
//         case "javascript":
//         document.writeln("Tu suis juste la mode hein !");
//         break;
//     case "C++":
//         document.writeln("control freak va !");
//         break;
//     case "PHP":
//         case "php":
//             case "Php":
//         document.writeln("T'aime bien géré l'arrière, hein ?");
//         break;
//     default:
//         document.writeln("Ouais nan désolé je suis pas un geek à ce point là, je connais pas ça...");
// }

// Exercice 5

// let choix = prompt("Que voulez vous ? Une entrée ? Un plat ? ou un dessert ?");

// switch (choix) {
//   case "entrée":
//     let debut = prompt("Préférez-vous une salade ou un feuilletté au fromage?");
//     switch (debut) {
//       case "salade":
//         document.writeln(" Vous avez choisis une salade !");
//         break;
//       case "feuilletté au fromage":
//         document.writeln("Vous avez choisis un feuilletté au fromage !");
//         console.log(typeof debut);
//         break;
//       default:
//         document.writeln("on a dit salade ou feuilletté, débile !");
//         break;
//     }
//     break;
//   case "plat":
//     let millieu = prompt(
//       "Souhaitez-vous un poulet rôti ou des côtes de porc ?"
//     );
//     switch (millieu) {
//       case "poulet roti":
//         document.writeln("Vous avez choisir un poulet rôti !");
//         break;
//       case "cote de porc":
//         document.writeln("Vous avez choisi des côtes de porc !");
//         break;
//       default:
//         document.writeln("POULET OU PORC !!!! Crétin !!!");
//         break;
//     }
//     break;
//   case "dessert":
//     let fin = prompt(
//       "Choisissez entre un moelleux au chocolat ou une crêpe suzette."
//     );
//     switch (fin) {
//       case "moelleux au chocolat":
//         document.writeln(
//           "Vous avez choisi un moelleux au chocolat ! bon choix !"
//         );
//         break;
//       case "crêpe suzette":
//         document.writeln("Vous avez choisi une crêpe suzette ! Miam !");
//         break;
//       default:
//         document.writeln("Vous meritez pas de dessert du coup ! dégagez !");
//         break;
//     }
//     break;

//   default:
//     document.writeln("Vous êtes vraiment con ou vous savez pas lire !");
//     break;
// }

// Exercice 6

// let nb1 = parseInt(prompt("Donnez-moi un chiffre s'il vous plait"));

// let nb2 = parseInt(prompt(" Donnez-moi un autre chiffre."));

// let operation = prompt(
//   "Choississez une opération (addition, soustraction, multiplication, division)"
// );
// switch (operation) {
//   case "+":
//   case "addition":
//     document.writeln(
//       "Le resultat de l'addition entre " +
//         nb1 +
//         " et " +
//         nb2 +
//         " est " +
//         (nb1 + nb2) +
//         " !"
//     );
//     break;
//   case "-":
//   case "soustraction":
//     document.writeln(
//       "Le resultat de la soustraction entre " +
//         nb1 +
//         " et " +
//         nb2 +
//         " est " +
//         (nb1 - nb2) +
//         " !"
//     );
//     break;
//   case "*":
//   case "multplication":
//     document.writeln(
//       "Le resultat de la multiplication entre " +
//         nb1 +
//         " et " +
//         nb2 +
//         " est " +
//         nb1 * nb2 +
//         " !"
//     );
//     break;
//   case "/":
//   case "division":
//     document.writeln(
//       "Le resultat de la division entre " +
//         nb1 +
//         " et " +
//         nb2 +
//         " est " +
//         nb1 / nb2 +
//         " et son reste est " +
//         (nb1 % nb2) +
//         " !"
//     );
//     break;
//   default:
//     document.writeln(
//       "Merci de retourner en primaire pour qu'on vous explique ce quest un nombre, une addition, une soustraction, une division ou une multiplication !"
//     );
//     break;
// }
