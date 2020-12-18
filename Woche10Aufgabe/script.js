"use strict";
let formularForm = document.getElementById("formular-form");
let registerButton = document.getElementById("submit");
registerButton.addEventListener("click", submitToServer);
let url = "https://giswise2021.herokuapp.com/";
//let url: string = "http://localhost:8100/";
async function submitToServer(_event) {
    let formData = new FormData(document.forms[0]);
    let query = new URLSearchParams(formData);
    url = url + "?" + query.toString();
    console.log(url);
    let response = await fetch(url);
    let responseText = await response.text();
    console.log(response);
    await fetch(url + "?" + query.toString());
    alert("Response: " + responseText);
}
async function communicate(_url) {
    let response = await fetch(_url);
    console.log("Response", response);
}
function processData(_event) {
    console.log();
}
/*import * as Http from "http";
import * as Url from "url";


export namespace P_3_1Server {

   // let form: HTMLFormElement;

    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");
    }



    
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        console.log(_request.url);
        _response.end();


        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        for (let key in url.query) {
            _response.write(key + ":" + url.query[key]);
        }
        let jsonString: String = JSON.stringify(url.query);
        _response.write(jsonString);


        async function send(_event: Event): Promise<void> {
            let formData: FormData = new FormData(form);
            let query: URLSearchParams = new URLSearchParams(<undefined>formData);
            let response: Response = await fetch(url + "?" + query.toString());
            let responseText: String = await response.text();
            await fetch("index.html?" + MediaQueryList.toString());
            alert(responseText);
            console.log(query);

        }


    }



}*/
//# sourceMappingURL=script.js.map