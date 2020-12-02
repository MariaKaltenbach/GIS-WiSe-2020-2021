"use strict";
// Aufgabe 2
var Eisladen;
(function (Eisladen) {
    let canvas = document.getElementById("myEiscreme");
    let context = canvas.getContext("2d");
    context.lineWidth = 3;
    function icecream(colorString) {
        context.beginPath();
        context.fillStyle = colorString;
        context.arc(150, 130, 120, 0, 2 * Math.PI);
        context.closePath();
        context.fill();
        context.stroke();
    }
    /* function icecream(colorString: string): void {
 
         context.beginPath();
         context.fillStyle = colorString;
         context.arc(300, 350, 120, 0, 2 * Math.PI);
         context.closePath();
         context.fill();
         context.stroke();
 
     }*/
    function cone(colorString) {
        context.beginPath();
        context.fillStyle = colorString;
        context.moveTo(50, 200);
        context.lineTo(150, 600);
        context.lineTo(250, 200);
        context.closePath();
        context.fill();
        context.stroke();
    }
    /*function cone(colorString: string): void {

        context.beginPath();
        context.fillStyle = colorString;
        context.moveTo(500, 200);
        context.lineTo(600, 600);
        context.lineTo(700, 200);
        context.closePath();
        context.fill();
        context.stroke();

    }*/
    function sprinkles(colorString) {
        context.beginPath();
        context.fillStyle = colorString;
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
    function neuZeichnen() {
        icecream(localStorage.getItem("eiskugelFarbe"));
        sprinkles(localStorage.getItem("streuselFarbe"));
        cone(localStorage.getItem("waffelFarbe"));
    }
    neuZeichnen();
    // Daten aus der data.ts laden 
    let waffel = document.getElementById("waffel");
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
    // Daten aus der data.ts laden 
    let eiskugel = document.getElementById("eiskugel");
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
    // Daten aus der data.ts laden 
    let streusel = document.getElementById("streusel");
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
    /*localStorage.setItem("Streusel", streuselVariationen[0].farbe);
    streusel.value = localStorage.getItem("Streusel");
    localStorage.setItem("Eiskugel", eiskugelVariationen[0].farbe);
    eiskugel.value = localStorage.getItem("Eiskugfel");
    localStorage.setItem("Waffel", waffelVariationen[0].farbe);
    waffel.value = localStorage.getItem("Waffel");*/
    function canvas1() {
        let waffelFarbe = document.getElementById("waffelFarbe");
        waffelFarbe.setAttribute("src", localStorage.getItem("Waffel"));
        let eiskugelFarbe = document.getElementById("eiskugelFarbe");
        eiskugelFarbe.setAttribute("src", localStorage.getItem("Eiskugel"));
        let streuselFarbe = document.getElementById("streuselFarbe");
        streuselFarbe.setAttribute("src", localStorage.getItem("Streusel"));
    }
    canvas1();
    //Bestätigen Button um auf die "Ansicht" (Eisladenseite) zu kommen
    let button = document.getElementsByTagName("button");
    button[0].addEventListener("click", bestätigen);
    function bestätigen(_e) {
        let parent = document.getElementById("fillThis");
        parent.innerHTML = "";
    }
})(Eisladen || (Eisladen = {}));
//# sourceMappingURL=script.js.map