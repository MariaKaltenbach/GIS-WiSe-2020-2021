"use strict";
// Aufgabe 1
/*
let buttons: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName("button");

buttons[0].addEventListener("click", makeNew);
buttons[1].addEventListener("click", reset);

function makeNew(_e: Event): void {
    let div: HTMLDivElement = document.createElement("div");
    div.style.backgroundColor = "black";
    div.style.height = "50px";
    div.style.width = "50px";
    div.style.marginLeft = (Math.random() * 200).toString() + "px";
    document.getElementById("fillThis")?.appendChild(div);
}

function reset(_e: Event): void {
let parent: HTMLDivElement = <HTMLDivElement>document.getElementById("fillThis");
parent.innerHTML = "";
}
*/
let w1 = { geschmack: "Schokolade", preis: 0.70, name: "Schokowaffel" };
let w2 = { geschmack: "Vanille", preis: 0.70, name: "Vanillewaffel" };
let w3 = { geschmack: "Haselnuss", preis: 0.70, name: "Haselnusswaffel" };
let e1 = { geschmack: "Schokolade", preis: 1.20, name: "Schokoeis" };
let e2 = { geschmack: "Vanille", preis: 1.20, name: "Vanilleeis" };
let e3 = { geschmack: "Erdbeere", preis: 1.20, name: "Erdbeereis" };
let s1 = { geschmack: "Zucker", preis: 0.20, name: "Zuckerstreusel" };
let s2 = { geschmack: "Schokolade", preis: 0.20, name: "Schokostreusel" };
let s3 = { geschmack: "Weißeschokolade", preis: 0.20, name: "Weißseschokostreusel" };
let canvas = document.getElementById("myEiscreme");
let context = canvas.getContext("2d");
context.lineWidth = 3;
function cone() {
    context.beginPath();
    context.fillStyle = "beige";
    context.moveTo(50, 200);
    context.lineTo(150, 600);
    context.lineTo(250, 200);
    context.closePath();
    context.fill();
    context.stroke();
}
cone();
function icecream() {
    context.fillStyle = "lightyellow";
    context.arc(150, 130, 120, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
}
icecream();
let button = document.getElementsByTagName("button");
button[0].addEventListener("click", bestätigen);
function div(_e) {
    let div = document.createElement("div");
    document.getElementById("fillThis")?.appendChild(div);
}
function bestätigen(_e) {
    let parent = document.getElementById("fillThis");
    parent.innerHTML = "";
}
//# sourceMappingURL=script.js.map