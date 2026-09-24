// Husk fra dag 1: skriv "use strict" herunder


// Eksempel: vi henter knappen ved hjælp af dens id-attribut
const getToggleBtn = document.getElementById("toggleBtn");

// Skriv selv: hent de tre andre elementer på samme måde, ved hjælp af deres id.
// Variablerne skal hedde getToggleText, getToggleIcon og getMoreInfo


// Eksempel: vi lytter efter klik på knappen og kører en anonym function
getToggleBtn.addEventListener("click", function() {

    // Skriv if/else-strukturen selv herinde.
    //
    // Nyt i dag: getMoreInfo.hidden viser/skjuler et element med det samme (true = skjult, false = synligt).
    //
    // Hvis getMoreInfo.hidden er true (dvs. indholdet er skjult lige nu), så:
    //   - sæt getMoreInfo.hidden til false
    //   - sæt getToggleText.textContent til `Vis mindre`
    //   - sæt getToggleIcon.style.transform til `rotate(180deg)`
    // Ellers:
    //   - sæt getMoreInfo.hidden til true
    //   - sæt getToggleText.textContent til `Vis mere`
    //   - sæt getToggleIcon.style.transform til `rotate(0deg)`
    //
    // Ekstra (valgfrit, hvis du er hurtigt færdig): brug getToggleBtn.setAttribute("aria-expanded", "true"/"false")
    // i hver gren, så skærmlæsere også kan se, om indholdet er foldet ud.

});
