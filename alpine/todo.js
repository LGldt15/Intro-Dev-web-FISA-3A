document.cookie ="theme=dark; max-age=2592000; path=/";

function setCookie(name, value, days) {
// votre code
}

function getCookie(name) {
// votre code
}

function deleteCookie(name) {
// votre code
}


//init tableau vide
let taches =[];
//affichage des taches

function afficheTaches(){
    let textHTML="";

for(let i=0; i<taches.length;i++){
    if(taches[i]!=""){
    textHTML += "<li >"+ " <input type=checkbox onclick='enleveTache(" + i + ")'></input>" + taches[i]
    //ajout du remove
    +"</li>";
}}
  document.getElementById("mesTaches").innerHTML = textHTML;

}

function ajouteTache(){
    let textTache=document.getElementById("tache");
    let text = textTache.value;
  if (text === "") {
    return;
  }
  //ajout dans le tableau des taches
  taches.push(text);
  sauveTaches();
  afficheTaches();

}

function sauveTaches(){
localStorage.setItem('taches',JSON.stringify(taches));

}

function chargeTaches(){
taches = JSON.parse(localStorage.getItem('taches')) || [];
    afficheTaches();

}


function enleveTache(i) {
    taches.splice(i, 1);
    sauveTaches();
    afficheTaches();
}

chargeTaches();

//statistiques

function tachesTotales() {

}

function tachesTerminées(){

}

function tachesRestantes(){

}


