let poulet = prompt("Combien avez-vous de poulet ?");
let cheval = prompt("Combien de chevaux avez-vous ?");
let vache = prompt("Combien de vaches avez-vous ?");

function nombredepattes(pouletf,chevalf,vachef){
    return (pouletf*2) + (chevalf*4) + (vachef*4);
}

let nbrpt = nombredepattes(poulet,cheval,vache);
while(Number.isNaN(nbrpt)){
 poulet = prompt("Combien avez-vous de poulet ?");
 cheval = prompt("Combien de chevaux avez-vous ?");
 vache = prompt("Combien de vaches avez-vous ?");
 nbrpt = nombredepattes(poulet,cheval,vache);
};


document.writeln("<p>Les animaux de votre ferme ont " + nbrpt + " pattes en tout !</p>");

