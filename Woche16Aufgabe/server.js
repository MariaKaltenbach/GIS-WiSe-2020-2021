"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
//importiert Http Modul 
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Server;
(function (Server) {
    let userAnlegen;
    let databaseUrl = "mongodb+srv://UserTest:<password>@mariakltb.sfhfn.mongodb.net/<dbname>?retryWrites=true&w=majority";
    async function connectDB() {
        let mongoClient = new Mongo.MongoClient("localhost:27017");
        await mongoClient.connect();
        let data = mongoClient.db("Test").collection("Students");
        data.find({ "Name": "Maria" });
    }
    connectDB();
    console.log("Starting server");
    //heroku port nummer für den localhost anlegen
    let port = Number(process.env.PORT);
    //wenn kein Port definiert ist soll port nummer 8100 genommen werden
    if (!port)
        port = 8100;
    //server erstellen
    let server = Http.createServer();
    server.addListener("request", handleRequest); //es wird angeftagt
    server.addListener("listening", handleListen); //und gehorcht
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q = Url.parse(_request.url, true);
            //Server antwort in HTML ausgeben
            for (let key in q.query) {
                _response.write(key + ":" + q.query[key] + "<br/>");
            }
            //Server antwort in Json sting ausgeben
            let stringJSON = JSON.stringify(q.query);
            _response.write(stringJSON);
        }
        _response.end();
    }
    if (q.pathname == "/anfrage") {
    }
    else if (q.pathname == "/registration") {
    }
    else if (q.pathname == "/login") {
    }
})(Server = exports.Server || (exports.Server = {}));
//# sourceMappingURL=server.js.map