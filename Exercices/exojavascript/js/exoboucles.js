// let mois = 0;

// for (let i = 1000; i < 2000; i += 50){
//     mois++;
//     document.writeln("<h3>J'économise depuis " + mois + " mois ! <h3>");
// }

// let argent = 1000;

// while ( argent < 2000) {
//     document.writeln("<h3>J'économise depuis " + mois + " mois ! <h3>");
//     argent+=50;
//     mois++;
// }

// document.writeln("J'ai enfin " + argent + " euros !");

// let reponse = "";
// let tour = 0;
// while (
//   reponse != "non" &&
//   reponse != "oui" &&
//   reponse != "Non" &&
//   reponse != "Oui"
// ) {
//   reponse = prompt("Voulez-vous jouez à ni oui ni non ?");
//   tour++;
// }

// document.writeln("Vous avez perdus au tour " + tour + " !");

// let tour = 0;

// for (
//   let reponse = prompt("Voulez-vous jouez à ni oui ni non ?");
//   reponse != "oui" && reponse != "non" && reponse != "Oui" && reponse != "Non";
//   reponse = prompt("Voulez-vous jouez à ni oui ni non ?")
// ) {
//     tour++;
// }
// document.writeln("Vous avez perdus au tour " + tour + " !");


// for (let i = 0; i < 101; i++){

    // if ( (i%2) == 0){
    //     document.writeln("<h2 style = color:crimson>" + i + "</h2>");
    // } else {
    //     document.writeln("<h2 style = color:blue>" + i + "</h2>");
    // } 
    
// };

let nombre = 0;

while (nombre < 101){
    if ( (nombre%2) == 0){
        document.writeln("<h2 style = color:crimson>" + nombre + "</h2>");
    } else {
        document.writeln("<h2 style = color:blue>" + nombre + "</h2>");
    } 
    nombre++;
};



