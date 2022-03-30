// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht 1
    [v] Schrijf een functie genaamd getEmailDomain,
    [v] die een emailadres verwacht en de domeinnaam teruggeeft.
    [v] Een domeinnaam is hetgeen dat na het @ in het adres staat
        ---- Verwachte uitkomsten:
    [v] getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
    [v] getEmailDomain("t.mellink@novi.nl") geeft novi.nl
    [v] getEmailDomain("a.wiersma@outlook.com") geeft outlook.com
*/

console.log("================opdracht1======================");
console.log(getEmailDomain("n.eeken@novi-education.nl"));
console.log(getEmailDomain("t.mellink@novi.nl"));
console.log(getEmailDomain("a.wiersma@outlook.com"));

function getEmailDomain(emailAdres) {

    let domeinnaam = [];

    domeinnaam = emailAdres.split("@").reverse();

    console.log(domeinnaam);

    return domeinnaam[0];
}

/* Opdracht 2
    [v] Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht.
    [v] De functie checkt of het emailadres een novi domein heeft (medewerker),
    [v] een novi-education domein (student),
    [v] of extern domein (zoals gmail of outlook)
        ---- Verwachte uitkomsten:
    [v] typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
    [v] typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
    [v] typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
    [v] typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
*/

console.log("================opdracht2======================");
console.log(typeOfEmail("n.eeken@novi-education.nl"));
console.log(typeOfEmail("t.mellink@novi.nl"));
console.log(typeOfEmail("novi.nlaapjesk@outlook.com"));
console.log(typeOfEmail("a.wiersma@outlook.com"));

function typeOfEmail(emailAdres) {

    let antwoord = "";

    if (emailAdres.includes("novi-education")) {

        antwoord = "Student";
    }
    if (emailAdres.includes("novi.nl")) {

        antwoord = "Medewerker";
    }
    if (emailAdres.includes("outlook.com")) {

        antwoord = "Extern";
    }

    return antwoord;
}

/* Opdracht 3
    [v] Schrijf een functie genaamd checkEmailValidity,
    [V] die een emailadres verwacht en checkt of het emailadres valide is.
    [v] De functie returned true of false, afhankelijk van de uitkomst.
    [v] Een emailadres is valide wanneer:
    [v] * Er een @ in voorkomt
    [v] * Er géén , in voorkomt
    [v] * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
        ---- Verwachte uitkomsten:
    [v] checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
    [v] checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
    [v] checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
    [v] checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
    [v] checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in
 */

console.log("================opdracht3======================");
console.log(checkEmailValidity("n.eeken@novi.nl"));
console.log(checkEmailValidity("tessmellink@novi.nl"));
console.log(checkEmailValidity("n.eekenanovi.nl"));
console.log(checkEmailValidity("n.eeken@novinl."));
console.log(checkEmailValidity("tessmellink@novi,nl"));

function checkEmailValidity(emailAdres) {

    let antwoord;
    let check = [];
    check = emailAdres.split("").reverse();

    if (emailAdres.includes("@") && !emailAdres.includes(",") && check.indexOf(".", 0)) {
        antwoord = true;
    } else {
        antwoord = false;
    }

    // bekijk check array:
    // console.log(check)

    return antwoord;
}