"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
const Url = require("url");
var P_3_1Server;
(function (P_3_1Server) {
    let form;
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        console.log(_request.url);
        _response.end();
        let url = Url.parse(_request.url, true);
        for (let key in url.query) {
            _response.write(key + ":" + url.query[key]);
        }
        let jsonString = JSON.stringify(url.query);
        _response.write(jsonString);
        async function send(_event) {
            let formData = new FormData(form);
            let query = new URLSearchParams(formData);
            let response = await fetch(url + "?" + query.toString());
            let responseText = await response.text();
            await fetch("index.html?" + MediaQueryList.toString());
            alert(responseText);
            console.log(query);
        }
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=script.js.map