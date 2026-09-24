# JavaScript – DOM Hide/Show Toggle

## Klasseøvelse

I denne klasseøvelse arbejder vi videre med **JavaScript DOM, events, conditionals og visning/skjulning af HTML-indhold**.

Vi skal arbejde med en **Vis mere / Vis mindre-knap**, som viser og skjuler ekstra indhold på siden. Samtidig ændrer vi knappens tekst og roterer et ikon med JavaScript.

Øvelsen gennemføres sammen på holdet, hvor underviseren gennemgår og skriver koden på storskærm. Du arbejder samtidig med projektet på din egen computer og følger øvelsen trin for trin.

---

# Fremgangsmåde – sådan kommer du i gang med projektet

I denne øvelse skal du bruge **GitHub Template-metoden**.

Du skal derfor **ikke downloade projektet som ZIP og ikke bruge Fork**.

Følg denne rækkefølge:

```text
GitHub Template
↓
Dit eget repository på GitHub.com
↓
GitHub Desktop
↓
Visual Studio Code
↓
Arbejd med øvelsen
↓
Commit
↓
Push
```

> Følg punkterne **ét ad gangen og i den viste rækkefølge**.

---

## 1. Opret dit eget repository på GitHub.com

Åbn det udleverede **template-repository** på GitHub.com.

Du skal være logget ind på din egen GitHub-konto.

Klik på:

**Use this template**

Vælg derefter:

**Create a new repository**

Vælg din egen GitHub-konto som ejer, og brug det repository-navn, som din underviser har angivet.

Klik derefter på:

**Create repository**

Vent et øjeblik, mens GitHub opretter dit nye repository.

### Kontrollér, at du er i dit eget repository

Når repositoryet er oprettet, skal du kontrollere navnet øverst på siden.

Det skal være **dit eget GitHub-brugernavn**, der står foran repositoryets navn.

Det kan fx se sådan ud:

```text
dit-brugernavn/js-dom-hide-show-toggle-classex
```

> **Stop her og kontrollér dette, før du går videre.**

---

## 2. Hent dit repository ned på din computer

Nu ligger projektet på **GitHub.com**, men du skal også have det ned på din egen computer.

Åbn **GitHub Desktop**.

Vælg:

**File → Clone repository...**

Vælg fanebladet **GitHub.com**, og find det repository, du netop har oprettet.

Hvis repositoryet ikke vises, kan du i stedet vælge fanebladet **URL** og indsætte adressen til dit repository fra GitHub.com.

### Vælg, hvor projektet skal gemmes

I feltet **Local path** vælger du, hvor projektet skal ligge på din computer.

> **Local path** betyder den mappe på din computer, hvor projektets filer bliver gemt.

Klik derefter på:

**Clone**

Vent, mens GitHub Desktop henter projektet ned på din computer.

---

## 3. Åbn projektet i Visual Studio Code

Når projektet er klonet, vælg:

**Open in Visual Studio Code**

Du skal arbejde direkte i den projektmappe, som GitHub Desktop har klonet.

Kontrollér, at projektet har denne struktur:

```text
js-dom-hide-show-toggle-classex/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

---

# Klasseøvelsen

I øvelsen arbejder vi med disse filer:

- `index.html`
- `css/style.css`
- `js/script.js`

Læs kommentarerne i koden, inden du begynder at skrive.

---

## 4. Forbind JavaScript-filen med HTML-filen

Åbn:

```text
index.html
```

I filen finder du denne kommentar:

```html
<!-- Husk fra dag 1: skriv scriptet, der linker til js/script.js, herunder -->
```

Vi skal forbinde JavaScript-filen med HTML-dokumentet.

JavaScript-filen ligger i mappen:

```text
js/
```

og hedder:

```text
script.js
```

> **Vær opmærksom på filstien:** `script.js` ligger ikke i samme mappe som `index.html`, men i undermappen `js`.

Skriv det korrekte `<script>`-element på det angivne sted.

Gem derefter filen.

---

## 5. Tilpas knappen med CSS Flexbox

Åbn:

```text
css/style.css
```

I `.toggle-btn` finder du en kommentar, der beder dig bruge **CSS Flexbox** til at placere ikonet og teksten side om side.

Du skal arbejde med:

```css
display: flex;
align-items: center;
gap: ...;
```

Målet er, at pil-ikonet og teksten står pænt ved siden af hinanden og er centreret lodret.

---

## 6. Åbn `js/script.js`

Start med at skrive:

```js
"use strict";
```

I filen er knappen allerede hentet fra DOM'en:

```js
const getToggleBtn = document.getElementById("toggleBtn");
```

Det betyder, at JavaScript nu har adgang til HTML-elementet med:

```html
id="toggleBtn"
```

---

## 7. Hent de øvrige elementer fra DOM'en

Du skal selv hente tre elementer ved hjælp af:

```text
document.getElementById()
```

Variablerne skal hedde:

```js
getToggleText
getToggleIcon
getMoreInfo
```

De skal pege på HTML-elementerne med id'erne:

```text
toggleText
toggleIcon
moreInfo
```

> Brug `getToggleBtn` som eksempel, men skriv selv de tre linjer.

---

## 8. Forstå `hidden`-attributten

Det ekstra indhold i `index.html` starter sådan:

```html
<div id="moreInfo" hidden>
```

Attributten `hidden` betyder, at indholdet er skjult, når siden indlæses.

I JavaScript kan du undersøge og ændre denne tilstand med:

```js
getMoreInfo.hidden
```

Værdien er en boolean:

```text
true  = indholdet er skjult
false = indholdet er synligt
```

---

## 9. Skriv `if/else`-strukturen

Event listeneren er allerede startet:

```js
getToggleBtn.addEventListener("click", function() {

    // Din kode skal skrives her

});
```

Du skal selv skrive en `if/else`-struktur inde i event listeneren.

Hvis:

```js
getMoreInfo.hidden
```

er `true`, skal du:

- sætte `getMoreInfo.hidden` til `false`
- ændre teksten til **Vis mindre**
- rotere ikonet `180deg`

Ellers skal du:

- sætte `getMoreInfo.hidden` til `true`
- ændre teksten til **Vis mere**
- rotere ikonet tilbage til `0deg`

Du skal arbejde med:

```text
.hidden
.textContent
.style.transform
```

---

## 10. Test Vis mere / Vis mindre

Åbn `index.html` med **Live Server**.

Klik på knappen flere gange og kontrollér:

- at det ekstra indhold vises ved klik på **Vis mere**
- at knappens tekst ændres til **Vis mindre**
- at pil-ikonet roteres
- at indholdet skjules igen ved næste klik
- at teksten ændres tilbage til **Vis mere**
- at pil-ikonet roteres tilbage

Hvis noget ikke virker:

1. Åbn browserens Developer Tools.
2. Gå til **Console** og læs eventuelle fejlmeddelelser.
3. Kontrollér, at alle fire DOM-elementer er hentet korrekt.
4. Kontrollér din `if/else`-struktur.
5. Kontrollér brugen af `.hidden`.
6. Kontrollér brugen af `.textContent`.
7. Kontrollér brugen af `.style.transform`.
8. Gem filerne og test igen.

---

## 11. Ekstra: Opdatér `aria-expanded`

Hvis du bliver hurtigt færdig, kan du arbejde videre med tilgængeligheden.

Knappen har allerede:

```html
aria-expanded="false"
```

Når indholdet vises, kan du ændre værdien til:

```text
true
```

Når indholdet skjules igen, kan du ændre den tilbage til:

```text
false
```

Brug:

```js
getToggleBtn.setAttribute()
```

> Formålet er, at skærmlæsere også kan få information om, hvorvidt indholdet er foldet ud eller sammen.

---

## 12. Arbejd progressivt med commits

Du skal ikke vente med at committe, til hele øvelsen er færdig.

Lav commits løbende, når du har afsluttet en tydelig del af arbejdet.

Du kan eksempelvis lave commits efter:

```text
Forbundet JavaScript med index.html
```

```text
Tilpasset toggle-knappen med Flexbox
```

```text
Hentet DOM-elementerne
```

```text
Tilføjet hide show funktionalitet
```

```text
Tilføjet rotation af toggle-ikon
```

```text
Testet Vis mere og Vis mindre
```

Skriv selv korte og meningsfulde commit-beskeder, der beskriver, hvad du har ændret.

> Formålet er, at din Git-historik viser, hvordan du har arbejdet med øvelsen trin for trin.

---

## 13. Push til GitHub.com

Når du har lavet et commit i GitHub Desktop, skal du huske at klikke på:

**Push origin**

På den måde bliver dine ændringer sendt fra din computer til dit repository på GitHub.com.

Gå gerne ind på GitHub.com bagefter og kontrollér, at dine seneste commits kan ses.

---

# Når øvelsen er færdig

Kontrollér følgende:

- [ ] Jeg har oprettet mit eget repository med **Use this template**
- [ ] Jeg arbejder i mit eget repository
- [ ] Jeg har klonet projektet med GitHub Desktop
- [ ] Projektet er åbnet i Visual Studio Code
- [ ] `js/script.js` er forbundet korrekt med `index.html`
- [ ] Jeg har tilpasset toggle-knappen med CSS Flexbox
- [ ] Jeg har skrevet `"use strict";`
- [ ] Jeg har hentet `toggleText` fra DOM'en
- [ ] Jeg har hentet `toggleIcon` fra DOM'en
- [ ] Jeg har hentet `moreInfo` fra DOM'en
- [ ] Jeg har arbejdet med `addEventListener()`
- [ ] Jeg har skrevet en `if/else`-struktur
- [ ] Jeg har arbejdet med `.hidden`
- [ ] Jeg har arbejdet med `.textContent`
- [ ] Jeg har arbejdet med `.style.transform`
- [ ] **Vis mere** viser det ekstra indhold
- [ ] **Vis mindre** skjuler indholdet igen
- [ ] Jeg har testet løsningen i browseren
- [ ] Jeg har lavet løbende commits
- [ ] Jeg har pushet mine commits til GitHub.com

> **Husk:** Formålet er både at træne **JavaScript DOM, events, conditionals, boolean-værdier og hide/show-funktionalitet** og at øve workflowet mellem **GitHub.com → GitHub Desktop → Visual Studio Code → Commit → Push**.
