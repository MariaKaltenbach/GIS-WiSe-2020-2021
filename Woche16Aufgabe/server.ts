import * as Http from "http";
import * as querystring from "querystring";
import * as Mongo from "mongodb";




export namespace Server {


  interface AllData {

    data: [{ _id: string, Vorname: string, Nachname: string, Email: string, Passwort: string }];

  }

  interface LoginData {

    data: [{ Email: string, Passwort: string }];

  }

  interface Daten {

    [type: string]: string | string[];

  }

  let daten: Mongo.Collection;


  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  let databaseUrl: string = "mongodb+srv://UserTest:<password>@mariakltb.sfhfn.mongodb.net/<dbname>?retryWrites=true&w=majority";

  startServer(port);

  connectToDatabase(databaseUrl);

  function startServer(_port: number): void {

    let server: Http.Server = Http.createServer();
    console.log("Server auf: " + _port);

    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);

    server.listen(_port);

  }


  async function connectToDatabase(_url: string): Promise<void> {

    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);

    await mongoClient.connect();

    daten = mongoClient.db("Daten").collection("Collection");
    console.log("Database connection ", daten != undefined);
  }


  function handleListen(): void {
    console.log("Listening");
  }


  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {

    if (_request.method == "POST") {
      let body: string = "";
      _request.on("data", data => {
        body += data.toString();
      });



      _request.on("end", async () => {



        let daten: Daten = querystring.parse(body);

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



  function checkMail(data: string, storeDaten: Daten): string {

    let _daten: string = "{" + "\"data\":[" + JSON.stringify(storeDaten) + "]}";
    let datenObjekt: AllData = JSON.parse(_daten);

    let allData: AllData = JSON.parse(data);



    if (allData.data.length >= 1) {

      for (let x: number = 0; x < allData.data.length; x++) {

        if (allData.data[x].Email == datenObjekt.data[0].Email) { return "Ein Konto mit dieser E-Mail exestiert bereits. Loggen Sie sich ein oder nehmen Sie eine andere E-Mail!."; }

      }

    }

    storeData(storeDaten);
    return "Erfolgreich Registiert";



  }


  function storeData(_daten: Daten): void {
    daten.insertOne(_daten);
  }



  async function retrieve(): Promise<string> {
    let alleDaten: string[] = await daten.find().toArray();
    let alleDatenString: string = "{" + "\"data\":" + JSON.stringify(alleDaten) + "}";

    return alleDatenString;
  }



  async function retrieveNames(): Promise<string> {
    let alleDaten: string[] = await daten.find().toArray();
    let alleDatenObjekt: AllData = JSON.parse("{" + "\"data\":" + JSON.stringify(alleDaten) + "}");
    let alleNamenString: string = "";
    let nummerierung: number = 1;

    if (alleDatenObjekt.data.length < 1) { return "Es Exestieren keine Nutzer zum jetzigen Zeitpunkt"; }

    for (let x: number = 0; x < alleDatenObjekt.data.length; x++) {
      alleNamenString = alleNamenString + nummerierung + ". " + alleDatenObjekt.data[x].Vorname + " " + alleDatenObjekt.data[x].Nachname + ", ";
      nummerierung++;
    }

    return alleNamenString;
  }



  async function checkLogin(_daten: Daten): Promise<string> {
    let alleDaten: string[] = await daten.find().toArray();
    let alleDatenObjekt: AllData = JSON.parse("{" + "\"data\":" + JSON.stringify(alleDaten) + "}");


    let userdaten: string = "{" + "\"data\":[" + JSON.stringify(_daten) + "]}";
    let datenObjekt: LoginData = JSON.parse(userdaten);

    if (alleDatenObjekt.data.length >= 1) {

      for (let x: number = 0; x < alleDatenObjekt.data.length; x++) {

        if (alleDatenObjekt.data[x].Email == datenObjekt.data[0].Email && (alleDatenObjekt.data[x].Passwort == datenObjekt.data[0].Passwort)) { return "Erfolgreich angemeldet. Willkommen zurück " + alleDatenObjekt.data[x].Vorname + " " + alleDatenObjekt.data[x].Nachname + "."; }

      }

    }

    return "Benutzername/E-Mail oder Passwort falsch!";
  }

}