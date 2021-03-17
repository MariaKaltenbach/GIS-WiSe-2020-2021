//IDs der html seiten verlinken
let formularForm: HTMLFormElement = <HTMLFormElement>document.getElementById("formular");
let registerButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit");

//eventlistener wenn man die buttons drückt soll die funktion aufgerufen werden
registerButton.addEventListener("click", submitToServer);

let url: string = "https://giswise2021.herokuapp.com/";
//let url: string = "http://localhost:8100";

async function submitToServer(_event: Event): Promise<void> {

    let formData: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<undefined>formData);

    url = url + "?" + query.toString();
    console.log(url);

    let response: Response = await fetch(url);
    let responseText: string = await response.text();
    console.log("Antwort", response);
    alert(responseText);

    let selectElement: HTMLDivElement = <HTMLDivElement>document.getElementsByClassName("antwort")[0];
    selectElement.appendChild(document.createTextNode(responseText));
}
