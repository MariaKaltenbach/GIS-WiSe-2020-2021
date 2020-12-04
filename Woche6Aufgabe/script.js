"use strict";
//namespace um Daten aus der data.ts zu exportieren
var Eisladen;
(function (Eisladen) {
    let path = window.location.pathname;
    let page = path.split("/").pop();
    //mit Canvas zeichnen
    let canvas = document.getElementById("myEiscreme");
    let context = canvas.getContext("2d");
    context.lineWidth = 3;
    //Eiskugel zeichnen
    function icecream(_colorString, _x, _y) {
        context.beginPath();
        context.fillStyle = _colorString;
        context.strokeStyle = _colorString;
        context.arc(150 + _x, 130 + _y, 120, 0, 2 * Math.PI);
        context.closePath();
        context.fill();
        context.stroke();
    }
    // Waffel zeichnen
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
    //streusel zeichnen
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
    if (page == "Ergebnis.html") {
        icecream(localStorage.getItem("eiskugelFarbe"), 0, 0); //Ergebnis der Eiscreme wird ausgegeben
        cone(localStorage.getItem("waffelFarbe"), 0, 0); //Ergenis der Eiscreme wird ausgegeben
        sprinkles(localStorage.getItem("streuselFarbe"), 0, 0); //Ergenbis der eiscreme wird ausgegeben
    }
    if (page == "index.html") {
        neuZeichnen();
    }
    //funnction um die for-Schleifen zu verbinden, damit sich der code nicht so oft widerholt
    /*function setupSelection(_selectElement: HTMLSelectElement, _data: any[],) {

        function selectionChanged(_e: Event) {
            document.getElementById("waffel").setAttribute("Waffel", "farbe");
        }

        function selectionChanged1(_e: Event) {
            document.getElementById("eiskugel").setAttribute("Eiskugel", "farbe");
        }

        function selectionChanged2(_e: Event) {
            document.getElementById("streusel").setAttribute("Streusel", "farbe");
        }

    }
*/
    // Daten im html ausgeben lassen damit sie auf der Seite angeziegt werden
    let waffel = document.getElementById("waffel");
    // Daten aus der data.ts laden WAFFEL
    for (let i = 0; i < Eisladen.waffelVariationen.length; i++) {
        let newOptionElement = document.createElement("OPTION");
        newOptionElement.innerText = Eisladen.waffelVariationen[i].name;
        newOptionElement.setAttribute("value", Eisladen.waffelVariationen[i].farbe);
        waffel.appendChild(newOptionElement);
    }
    waffel.addEventListener("change", waffelVariationenChanged);
    function waffelVariationenChanged(_e) {
        console.log(_e.target.value);
        localStorage.setItem("waffelFarbe", _e.target.value);
        neuZeichnen();
    }
    //und diese im html ausgeben lassen damit sie auf der Seite angeziegt werden
    let eiskugel = document.getElementById("eiskugel");
    // Daten aus der data.ts laden 
    for (let i = 0; i < Eisladen.eiskugelVariationen.length; i++) {
        let newOptionElement = document.createElement("OPTION");
        newOptionElement.innerText = Eisladen.eiskugelVariationen[i].name;
        newOptionElement.setAttribute("value", Eisladen.eiskugelVariationen[i].farbe);
        eiskugel.appendChild(newOptionElement);
    }
    eiskugel.addEventListener("change", eiskugelVariationenChanged);
    function eiskugelVariationenChanged(_e) {
        console.log(_e.target.value);
        localStorage.setItem("eiskugelFarbe", _e.target.value);
        neuZeichnen();
    }
    //und diese im html ausgeben lassen damit sie auf der Seite angeziegt werden
    let streusel = document.getElementById("streusel");
    // Daten aus der data.ts laden 
    for (let i = 0; i < Eisladen.streuselVariationen.length; i++) {
        let newOptionElement = document.createElement("OPTION");
        newOptionElement.innerText = Eisladen.streuselVariationen[i].name;
        newOptionElement.setAttribute("value", Eisladen.streuselVariationen[i].farbe);
        streusel.appendChild(newOptionElement);
    }
    streusel.addEventListener("change", streuselVariationenChanged);
    function streuselVariationenChanged(_e) {
        console.log(_e.target.value);
        localStorage.setItem("streuselFarbe", _e.target.value);
        neuZeichnen();
    }
    if (localStorage.getItem("streuselFarbe") == null) {
        localStorage.setItem("streuselFarbe", Eisladen.streuselVariationen[0].farbe);
    }
    streusel.value = localStorage.getItem("streuselFarbe");
    if (localStorage.getItem("eiskugelFarbe") == null) {
        localStorage.setItem("eiskugelFarbe", Eisladen.eiskugelVariationen[0].farbe);
    }
    eiskugel.value = localStorage.getItem("eiskugelFarbe");
    if (localStorage.getItem("waffelFarbe") == null) {
        localStorage.setItem("waffelFarbe", Eisladen.waffelVariationen[0].farbe);
    }
    waffel.value = localStorage.getItem("waffelFarbe");
    //Funktion damit die farbe sich ändert sobal man etwas auswählt
    function neuZeichnen() {
        icecream(localStorage.getItem("eiskugelFarbe"), 300, 100);
        cone(localStorage.getItem("waffelFarbe"), 40, 100);
        sprinkles(localStorage.getItem("streuselFarbe"), 0, 0);
    }
})(Eisladen || (Eisladen = {}));
//# sourceMappingURL=script.js.map