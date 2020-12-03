"use strict";
//namespace um Daten aus der data.ts zu exportieren
var Eisladen;
(function (Eisladen) {
    //mit Canvas zeichnen
    let canvas = document.getElementById("myEiscreme");
    let context = canvas.getContext("2d");
    context.lineWidth = 3;
    //Eiskugel zeichnen
    function icecream(_colorString) {
        context.beginPath();
        context.fillStyle = _colorString;
        context.strokeStyle = _colorString;
        context.arc(150, 130, 120, 0, 2 * Math.PI);
        context.closePath();
        context.fill();
        context.stroke();
    }
    icecream(localStorage.getItem("eiskugelFarbe")); //Ergebnis der Eiscreme wird ausgegeben
    // Waffel zeichnen
    function cone(_colorString) {
        context.beginPath();
        context.fillStyle = _colorString;
        context.strokeStyle = _colorString;
        context.moveTo(50, 200);
        context.lineTo(150, 600);
        context.lineTo(250, 200);
        context.closePath();
        context.fill();
        context.stroke();
    }
    cone(localStorage.getItem("waffelFarbe")); //Ergenis der Eiscreme wird ausgegeben
    //streusel zeichnen
    function sprinkles(_colorString) {
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
    sprinkles(localStorage.getItem("streuselFarbe")); //Ergenbis der eiscreme wird ausgegeben
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
    localStorage.setItem("Streusel", Eisladen.streuselVariationen[0].farbe);
    streusel.value = localStorage.getItem("Streusel");
    localStorage.setItem("Eiskugel", Eisladen.eiskugelVariationen[0].farbe);
    eiskugel.value = localStorage.getItem("Eiskugel");
    localStorage.setItem("Waffel", Eisladen.waffelVariationen[0].farbe);
    waffel.value = localStorage.getItem("Waffel");
    //Funktion damit die farbe sich ändert sobal man etwas auswählt
    function neuZeichnen() {
        icecream(localStorage.getItem("eiskugelFarbe"));
        sprinkles(localStorage.getItem("streuselFarbe"));
        cone(localStorage.getItem("waffelFarbe"));
    }
    neuZeichnen();
    //Bestätigen Button um auf die "Ansicht" (Eisladenseite) zu kommen
    let button = document.getElementsByTagName("button");
    button[0].addEventListener("click", bestätigen);
    function bestätigen(_e) {
        let parent = document.getElementById("fillThis");
        parent.innerHTML = "";
    }
})(Eisladen || (Eisladen = {}));
let canvas = document.getElementById("myEiscreme1");
let context = canvas.getContext("2d");
context.lineWidth = 3;
//Eiskugel für die Unterseite
function icecreamUnterseite(_colorString) {
    context.beginPath();
    context.fillStyle = _colorString;
    context.strokeStyle = _colorString;
    context.arc(300, 350, 120, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
    context.stroke();
}
icecreamUnterseite(localStorage.getItem("eiskugelFarbe"));
//waffel für die Unterseite
function coneUnterseite(_colorString) {
    context.beginPath();
    context.fillStyle = _colorString;
    context.strokeStyle = _colorString;
    context.moveTo(500, 200);
    context.lineTo(600, 600);
    context.lineTo(700, 200);
    context.closePath();
    context.fill();
    context.stroke();
}
coneUnterseite(localStorage.getItem("waffelFarbe"));
//streusel zeichnen
function sprinklesUnterseite(_colorString) {
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
sprinklesUnterseite(localStorage.get("streuselFarbe"));
//# sourceMappingURL=script.js.map