
/*let formularForm: HTMLFormElement = <HTMLFormElement>document.getElementById("formular");

let registerButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit");
registerButton.addEventListener("click", submitToServer);

//let url: string = "https://giswise2021.herokuapp.com/";
let url: string = "http://localhost:8100";

async function submitToServer(_event: Event): Promise<void> {

    let formData: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<undefined>formData);


    url = url + "?" + query.toString();
    console.log(url);

    let response: Response = await fetch(url + "?" + query.toString());
    let responseText: string = await response.text();
    console.log(response);
    alert(responseText);
}

async function communicate(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    console.log("Response", response);
}

function processData(_event: Event): void {


    console.log();
}

*/