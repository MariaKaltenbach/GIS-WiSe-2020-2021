"use strict";
//namespace um Daten aus der data.ts zu exportieren
var Eisladen;
(function (Eisladen) {
    //regionend
    //bekommt den Pfad der Seite auf welcher man sich befindet
    let path = window.location.pathname;
    let page = path.split("/").pop();
    //region Canvas
    //mit Canvas zeichnen
    let canvas = document.getElementById("myEiscreme");
    let context = canvas.getContext("2d");
    context.lineWidth = 3;
    //Eiskugel zeichnen Ergebnisseite
    // x und y Koordinaten um die Position auf dern index.html seite verändern zu können
    //color String damit sich die Farbe bei der auswahl ändert
    function icecream(_colorString, _x, _y) {
        context.beginPath();
        context.fillStyle = _colorString;
        context.strokeStyle = _colorString;
        context.arc(150 + _x, 130 + _y, 120, 0, 2 * Math.PI);
        context.closePath();
        context.fill();
        context.stroke();
    }
    // Waffel zeichnen Ergebnisseite
    function cone(_colorString, _x, _y) {
        context.beginPath();
        context.fillStyle = _colorString;
        context.strokeStyle = _colorString;
        context.moveTo(50 + _x, 200 + _y);
        context.lineTo(150 + _x, 600 + _y);
        context.lineTo(250 + _x, 200 + _y);
        context.closePath();
        context.fill();
        context.stroke();
    }
    //streusel zeichnen Ergebnisseite
    function sprinkles(_colorString, _x, _y) {
        context.beginPath();
        context.fillStyle = _colorString;
        context.strokeStyle = _colorString;
        context.moveTo(80, 140);
        context.lineTo(100, 150);
        context.closePath();
        context.stroke();
        context.beginPath();
        context.moveTo(170, 140);
        context.lineTo(150, 150);
        context.closePath();
        context.stroke();
        context.beginPath();
        context.moveTo(230, 100);
        context.lineTo(210, 110);
        context.closePath();
        context.stroke();
        context.beginPath();
        context.moveTo(180, 60);
        context.lineTo(190, 80);
        context.closePath();
        context.stroke();
        context.beginPath();
        context.moveTo(130, 100);
        context.lineTo(100, 100);
        context.closePath();
        context.stroke();
        context.beginPath();
        context.moveTo(100, 60);
        context.lineTo(130, 40);
        context.closePath();
        context.stroke();
        context.beginPath();
        context.moveTo(190, 160);
        context.lineTo(210, 180);
        context.closePath();
        context.stroke();
    }
    //regionend
    //region: Abfrage (welche Seite geöffnet ist)
    //Canvas explizit auf der Ergebnis seite zeichnen
    if (page == "Ergebnis.html") {
        icecream(localStorage.getItem("eiskugelFarbe"), 0, 0); //Ergebnis der Eiscreme wird ausgegeben
        cone(localStorage.getItem("waffelFarbe"), 0, 0); //Ergenis der Eiscreme wird ausgegeben
        sprinkles(localStorage.getItem("streuselFarbe"), 0, 0); //Ergenbis der eiscreme wird ausgegeben
        serverAnfrage("https://gis-communication.herokuapp.com");
    }
    //Canvas auf der index.html seite zeichnen 
    if (page == "index.html") {
        neuZeichnen();
    }
    //regionend
    //region Change Events (namen der auswahlmöglichkeiten ausgeben lassen und events damit man diese ändern kann)
    // Daten im html ausgeben lassen damit sie auf der Seite angeziegt werden
    let waffelSelect = document.getElementById("waffel");
    // Daten aus der data.ts laden WAFFEL
    for (let i = 0; i < Eisladen.waffelVariation.length; i++) {
        let newOptionElement = document.createElement("OPTION");
        newOptionElement.innerText = Eisladen.waffelVariation[i].name;
        newOptionElement.setAttribute("value", Eisladen.waffelVariation[i].farbe);
        waffelSelect.appendChild(newOptionElement);
    }
    //Change Event, damit man die Auswahlmöglichkeiten ändern kann
    waffelSelect.addEventListener("change", waffelVariationChanged);
    function waffelVariationChanged(_e) {
        console.log(_e.target.value);
        localStorage.setItem("waffelFarbe", _e.target.value);
        neuZeichnen();
    }
    //und diese im html ausgeben lassen damit sie auf der Seite angeziegt werden
    let eiskugelSelect = document.getElementById("eiskugel");
    // Daten aus der data.ts laden 
    for (let i = 0; i < Eisladen.eiskugelVariation.length; i++) {
        let newOptionElement = document.createElement("OPTION");
        newOptionElement.innerText = Eisladen.eiskugelVariation[i].name;
        newOptionElement.setAttribute("value", Eisladen.eiskugelVariation[i].farbe);
        eiskugelSelect.appendChild(newOptionElement);
    }
    //Change Event, damit man die Auswahlmöglichkeiten ändern kann
    eiskugelSelect.addEventListener("change", eiskugelVariationChanged);
    function eiskugelVariationChanged(_e) {
        console.log(_e.target.value);
        localStorage.setItem("eiskugelFarbe", _e.target.value);
        neuZeichnen();
    }
    //und diese im html ausgeben lassen damit sie auf der Seite angeziegt werden
    let streuselSelect = document.getElementById("streusel");
    // Daten aus der data.ts laden 
    for (let i = 0; i < Eisladen.streuselVariation.length; i++) {
        let newOptionElement = document.createElement("OPTION");
        newOptionElement.innerText = Eisladen.streuselVariation[i].name;
        newOptionElement.setAttribute("value", Eisladen.streuselVariation[i].farbe);
        streuselSelect.appendChild(newOptionElement);
    }
    //Change Event, damit man die Auswahlmöglichkeiten ändern kann
    streuselSelect.addEventListener("change", streuselVariationChanged);
    function streuselVariationChanged(_e) {
        console.log(_e.target.value);
        localStorage.setItem("streuselFarbe", _e.target.value);
        neuZeichnen();
    }
    //endregion
    //
    if (localStorage.getItem("streuselFarbe") == null) {
        localStorage.setItem("streuselFarbe", Eisladen.streuselVariation[0].farbe);
    }
    streuselSelect.value = localStorage.getItem("streuselFarbe");
    if (localStorage.getItem("eiskugelFarbe") == null) {
        localStorage.setItem("eiskugelFarbe", Eisladen.eiskugelVariation[0].farbe);
    }
    eiskugelSelect.value = localStorage.getItem("eiskugelFarbe");
    if (localStorage.getItem("waffelFarbe") == null) {
        localStorage.setItem("waffelFarbe", Eisladen.waffelVariation[0].farbe);
    }
    waffelSelect.value = localStorage.getItem("waffelFarbe");
    //region Canvas
    //Funktion damit die farbe sich ändert sobalt man etwas auswählt
    //Canvas auf der index.html zeichnen, mit addierten werten um die position zu ändern
    function neuZeichnen() {
        icecream(localStorage.getItem("eiskugelFarbe"), 300, 100);
        cone(localStorage.getItem("waffelFarbe"), 40, 100);
        sprinkles(localStorage.getItem("streuselFarbe"), 0, 0);
    }
    //regionend
    //region JSON (daten aus json laden)
    jsonLaden("http://127.0.0.1:5500/Woche6Aufgabe/data.json");
    async function jsonLaden(_url) {
        let response = await fetch(_url);
        let data = await response.json();
        localStorage.setItem("dataWaffel", JSON.stringify(data.WaffelJSON));
        localStorage.setItem("dataEiskugel", JSON.stringify(data.EiskugelJSON));
        localStorage.setItem("dataStreusel", JSON.stringify(data.StreuselJSON));
    }
    let waffel = JSON.parse(localStorage.getItem("dataWaffel"));
    let eiskugel = JSON.parse(localStorage.getItem("dataEiskugel"));
    let streusel = JSON.parse(localStorage.getItem("dataStreusel"));
    //regionend
    //region Server anfrage 
    async function serverAnfrage(_url) {
        let query = new URLSearchParams(localStorage);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        let serverNachricht = await response.json();
        let serverAntwort = document.getElementById("serverAntwort");
        let text = document.createElement("p");
        if (serverNachricht.message !== undefined) {
            text.innerText = serverNachricht.message;
        }
        if (serverNachricht.error !== undefined) {
            text.setAttribute("style", "color:red");
            text.innerText = serverNachricht.error;
        }
        serverAntwort.appendChild(text);
    }
    //regionend
})(Eisladen || (Eisladen = {}));
//# sourceMappingURL=script.js.map