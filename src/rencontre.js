
// Fonction pop-up pour le bouton ENVOYER l'inscription aux rencontres 
const inscriptionBtn = document.getElementById("inscription-btn");
const popup = document.getElementById("inscription-popup");
const closePopup = document.getElementById("closeForm");
const closeCross = document.getElementById("closeCross")

inscriptionBtn.addEventListener("click", function () {
    popup.classList.remove("hidden");
    popup.classList.add("flex");
});

popup.addEventListener("click", function (event) {
    if (event.target === popup) {
        popup.classList.add("hidden");
        popup.classList.remove("flex");
    }
});

closePopup.addEventListener("click", function () {
  popup.classList.add("hidden") ; 
});

closeCross.addEventListener("click", function() {
    popup.classList.add("hidden");
});



// Fonction pour obtenir la date du prochain mercredi
function getNextWednesday() {
    let date = new Date();
    let day = date.getDay();
    let nextWednesday = new Date();
    nextWednesday.setDate(date.getDate() + (3 + 7 - day) % 7);
    return nextWednesday;
}

// Afficher la date du prochain mercredi
let nextWednesday = getNextWednesday();
document.getElementById("date").innerHTML = "La prochaine rencontre se tiendra le " + nextWednesday.toLocaleDateString();
