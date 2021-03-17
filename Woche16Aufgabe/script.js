"use strict";
//IDs der html seiten verlinken
let formularForm = document.getElementById("formular");
let registerButton = document.getElementById("submit");
//eventlistener wenn man die buttons drückt soll die funktion aufgerufen werden
registerButton.addEventListener("click", submitToServer);
let url = "https://giswise2021.herokuapp.com/";
//let url: string = "http://localhost:8100";
async function submitToServer(_event) {
    let formData = new FormData(document.forms[0]);
    let query = new URLSearchParams(formData);
    url = url + "?" + query.toString();
    console.log(url);
    let response = await fetch(url);
    let responseText = await response.text();
    console.log("Antwort", response);
    alert(responseText);
    let selectElement = document.getElementsByClassName("antwort")[0];
    selectElement.appendChild(document.createTextNode(responseText));
}
//# sourceMappingURL=script.js.map