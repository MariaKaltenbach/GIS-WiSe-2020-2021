//importiert Http Modul 
import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Server {


    interface userAnlegen {

        "Vorname": string;
        "Nachname": string;
        "E-Mail": string;
        "Passwort": string;

    }

    let userAnlegen: Mongo.Collection;
    let databaseUrl: string = "mongodb+srv://UserTest:<password>@mariakltb.sfhfn.mongodb.net/<dbname>?retryWrites=true&w=majority";

    async function connectDB(): Promise<void> {
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient("localhost:27017");
        await mongoClient.connect();

        let data: Mongo.Collection = mongoClient.db("Test").collection("Students");
        data.find({ "Name": "Maria" });

    }
    connectDB();



    console.log("Starting server");
    //heroku port nummer für den localhost anlegen
    let port: number = Number(process.env.PORT);
    //wenn kein Port definiert ist soll port nummer 8100 genommen werden
    if (!port)
        port = 8100;

    //server erstellen
    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest); //es wird angeftagt
    server.addListener("listening", handleListen); //und gehorcht
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

            //Server antwort in HTML ausgeben
            for (let key in q.query) {
                _response.write(key + ":" + q.query[key] + "<br/>");
            }

            //Server antwort in Json sting ausgeben
            let stringJSON: string = JSON.stringify(q.query);
            _response.write(stringJSON);
        }

        _response.end();

    }

    if (q.pathname == "/anfrage") {


    }

    else if(q.pathname == "/registration") {

    }

    else if(q.pathname == "/login") {

    }

}