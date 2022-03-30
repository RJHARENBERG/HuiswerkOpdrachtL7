// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om het geen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude

/* 1a: Script schrijven
    [v] De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger).
            Daar moeten namelijk speciale diploma's voor besteld worden.

    [v] Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
    [v] * Hoe kan ik iedere waarde van de array checken op deze conditie?
        1. maak een for loop.
        2. check of getal hoger of gelijk is aan 8.
        3. maak een variabelen "aantalCumLaude" aan die bij true mee telt


    [v] * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
        1. door naam index < paremeter .lengt te gebruiken in de range van de for loop.

    [v] * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
        1. maak een variabelen "aantalCumLaude" aan die bij true mee telt
    [v] Log het antwoord in de terminal.

    // ---- Verwachte uitkomst: 6
*/

function cumLaude(grades) {

    let aantalCumLaude = 0;

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8) {
            aantalCumLaude++;
        }
    }
    return aantalCumLaude;
}

/*  1b: Omschrijven tot een herbruikbare functie
    [v] Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
    [v] Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
    [v] Log het antwoord in de terminal.

        ---- Verwachte uitkomsten:
    [v] cumLaude(grades) geeft 6
    [v] cumLaude([6, 4, 5]) geeft 0
    [v] cumLaude([8, 9, 4, 6, 10]) geeft 3
*/
console.log("===================antwoordt opdracht 1=========================");
console.log(cumLaude(grades));
console.log(cumLaude([6, 4, 5]));
console.log(cumLaude([8, 9, 4, 6, 10]));

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven
    [v] De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is,
    [v] maar we beginnen met de grades array van hierboven.
    [v] Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
    [v] * Hoe wordt een gemiddelde berekend?
        1. alles bij elkaar op tellen en dan deelen door het aantal cijfers

    [v] * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
        1. variabele met alle cijvers op geteld
        2. variabelen met het aantal indexen
    [v] * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
        1. foorloop met naam index < paremeter .lengt te gebruiken
    [v] Log het antwoord in de terminal.

        // ---- Verwachte uitkomst: 6.642857142857143
*/

function averageGrade(grades) {

    let totalAmountOfGrads = 0;
    let totalNumbersOfGrads = 0;

    for (let i = 0; i < grades.length; i++) {
        totalAmountOfGrads = grades[i] + totalAmountOfGrads;
        totalNumbersOfGrads++;
    }
    return (totalAmountOfGrads / totalNumbersOfGrads).toFixed(2);
}

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

console.log("===================antwoordt opdracht 2=========================");
console.log(averageGrade(grades));
console.log(averageGrade([6, 4, 5]));
console.log(averageGrade([8, 9, 4, 6, 10]));

/* 2c: Afronden op twee decimalen
    [v] Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
        1. toFixed() metode
    [v] Tip: Google is your best friend!
*/

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven
    [v] Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
    [v] * Hoe kan ik iedere waarde van de array langsgaan?
           1. maak for loop
    [v] * Op welke conditie moet ik checken?
            1. of het het getal hoger is als het eerdere hoogste getal
    [v] * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
            1. variabele makken met hoogste getal
            2. if() maken "is getal hoger dan hoogste getal?"
    [v] Log het antwoord in de terminal.

    ---- Verwachte uitkomst: 9
*/

function highestGrade(grades) {

    let highestNumber = 0;

    for (let i = 0 ; i < grades.length; i++){
        if (grades[i] > highestNumber){
            highestNumber = grades[i];
        }
    }
    return highestNumber;
}

/* 3b: Omschrijven tot een herbruikbare functie
    [v] Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
    [v] Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
    [v] Log het antwoord in de terminal.

        ---- Verwachte uitkomsten:
    [v] highestGrade(grades) geeft 9
    [v] highestGrade([6, 4, 5]) geeft 6
    [v] highestGrade([8, 9, 4, 6, 10]) geeft 10
*/
console.log("===================antwoordt opdracht 3=========================");
console.log(highestGrade(grades));
console.log(highestGrade([6, 4, 5]));
console.log(highestGrade([8, 9, 4, 6, 10]));