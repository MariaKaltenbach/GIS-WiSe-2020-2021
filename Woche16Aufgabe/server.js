"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const Http = require("http");
const querystring = require("querystring");
const Mongo = require("mongodb");
var Server;
(function (Server) {
    let daten;
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let databaseUrl = "mongodb+srv://UserTest:<password>@mariakltb.sfhfn.mongodb.net/<dbname>?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Server auf: " + _port);
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        daten = mongoClient.db("Daten").collection("Collection");
        console.log("Database connection ", daten != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        if (_request.method == "POST") {
            let body = "";
            _request.on("data", data => {
                body += data.toString();
            });
            _request.on("end", async () => {
                let daten = querystring.parse(body);
                //Alle User abfragen
                if (JSON.stringify(daten) == "{}") {
                    _response.setHeader("content-type", "text/html; charset=utf-8");
                    _response.setHeader("Access-Control-Allow-Origin", "*");
                    _response.write(await retrieveNames());
                    _response.end();
                }
                //Login
                else if (JSON.stringify(daten).startsWith("{\"Email")) {
                    _response.setHeader("content-type", "text/html; charset=utf-8");
                    _response.setHeader("Access-Control-Allow-Origin", "*");
                    _response.write(await checkLogin(daten));
                    _response.end();
                }
                //Registrierung
                else {
                    _response.setHeader("content-type", "text/html; charset=utf-8");
                    _response.setHeader("Access-Control-Allow-Origin", "*");
                    _response.write(checkMail(await retrieve(), daten));
                    _response.end();
                }
            });
        }
    }
    function checkMail(data, storeDaten) {
        let _daten = "{" + "\"data\":[" + JSON.stringify(storeDaten) + "]}";
        let datenObjekt = JSON.parse(_daten);
        let allData = JSON.parse(data);
        if (allData.data.length >= 1) {
            for (let x = 0; x < allData.data.length; x++) {
                if (allData.data[x].Email == datenObjekt.data[0].Email) {
                    return "Ein Konto mit dieser E-Mail exestiert bereits. Loggen Sie sich ein oder nehmen Sie eine andere E-Mail!.";
                }
            }
        }
        storeData(storeDaten);
        return "Erfolgreich Registiert";
    }
    function storeData(_daten) {
        daten.insertOne(_daten);
    }
    async function retrieve() {
        let alleDaten = await daten.find().toArray();
        let alleDatenString = "{" + "\"data\":" + JSON.stringify(alleDaten) + "}";
        return alleDatenString;
    }
    async function retrieveNames() {
        let alleDaten = await daten.find().toArray();
        let alleDatenObjekt = JSON.parse("{" + "\"data\":" + JSON.stringify(alleDaten) + "}");
        let alleNamenString = "";
        let nummerierung = 1;
        if (alleDatenObjekt.data.length < 1) {
            return "Es Exestieren keine Nutzer zum jetzigen Zeitpunkt";
        }
        for (let x = 0; x < alleDatenObjekt.data.length; x++) {
            alleNamenString = alleNamenString + nummerierung + ". " + alleDatenObjekt.data[x].Vorname + " " + alleDatenObjekt.data[x].Nachname + ", ";
            nummerierung++;
        }
        return alleNamenString;
    }
    async function checkLogin(_daten) {
        let alleDaten = await daten.find().toArray();
        let alleDatenObjekt = JSON.parse("{" + "\"data\":" + JSON.stringify(alleDaten) + "}");
        let userdaten = "{" + "\"data\":[" + JSON.stringify(_daten) + "]}";
        let datenObjekt = JSON.parse(userdaten);
        if (alleDatenObjekt.data.length >= 1) {
            for (let x = 0; x < alleDatenObjekt.data.length; x++) {
                if (alleDatenObjekt.data[x].Email == datenObjekt.data[0].Email && (alleDatenObjekt.data[x].Passwort == datenObjekt.data[0].Passwort)) {
                    return "Erfolgreich angemeldet. Willkommen zurück " + alleDatenObjekt.data[x].Vorname + " " + alleDatenObjekt.data[x].Nachname + ".";
                }
            }
        }
        return "Benutzername/E-Mail oder Passwort falsch!";
    }
})(Server = exports.Server || (exports.Server = {}));
//# sourceMappingURL=server.js.map