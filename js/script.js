"use strict";
// Husk fra dag 1: skriv "use strict" herunder


// Eksempel: vi henter knappen ved hjælp af dens id-attribut
const getToggleBtn = document.getElementById("toggleBtn");

const getToggleText = document.getElementById("toggleText");

const getToggleIcon = document.getElementById("toggleIcon");

const getMoreInfo = document.getElementById("moreInfo");

// Skriv selv: hent de tre andre elementer på samme måde, ved hjælp af deres id.
// Variablerne skal hedde getToggleText, getToggleIcon og getMoreInfo


// Eksempel: vi lytter efter klik på knappen og kører en anonym function
getToggleBtn.addEventListener("click", function() {
    if (getMoreInfo.hidden == true) {
        getMoreInfo.hidden = false;
        getToggleText.textContent = `Vis mindre`;
        getToggleIcon.style.transform = `rotate(180deg)`;
    } else {
     getMoreInfo.hidden = true
    getToggleText.textContent = `Vi mere`;
    getToggleIcon.style.transform = `rotate(0deg)`; }
}
    // Skriv if/else-strukturen selv herinde.
    // Nyt i dag: getMoreInfo.hidden viser/skjuler et element med det samme (true = skjult, false = synligt).
    // Hvis getMoreInfo.hidden er true (dvs. indholdet er skjult lige nu), så:
    //   - sæt getMoreInfo.hidden til false
    //   - sæt getToggleText.textContent til `Vis mindre`
    //   - sæt getToggleIcon.style.transform til `rotate(180deg)`
    // Ellers:
    //   - sæt getMoreInfo.hidden til true
    //   - sæt getToggleText.textContent til `Vis mere`
    //   - sæt getToggleIcon.style.transform til `rotate(0deg)`
    // Ekstra (valgfrit, hvis du er hurtigt færdig): brug getToggleBtn.setAttribute("aria-expanded", "true"/"false")
    // i hver gren, så skærmlæsere også kan se, om indholdet er foldet ud.

);


