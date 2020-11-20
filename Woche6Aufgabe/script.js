"use strict";
// Aufgabe 1
let buttons = document.getElementsByTagName("button");
buttons[0].addEventListener("click", makeNew);
buttons[1].addEventListener("click", reset);
function makeNew(_e) {
    let div = document.createElement("div");
    div.style.backgroundColor = "black";
    div.style.height = "50px";
    div.style.width = "50px";
    div.style.marginLeft = (Math.random() * 200).toString() + "px";
    document.getElementById("fillThis")?.appendChild(div);
}
function reset(_e) {
    let parent = document.getElementById("fillThis");
    parent.innerHTML = "";
}
// Aufgabe 2
//# sourceMappingURL=script.js.map