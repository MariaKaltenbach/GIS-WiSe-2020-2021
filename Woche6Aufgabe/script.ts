//namespace um Daten aus der data.ts zu exportieren
namespace Eisladen {

    export interface Lebensmittel {

        geschmack: string;
        preis: number;
        name: string;
        farbe: string;
    }

    export interface Waffel extends Lebensmittel { }

    export interface Eiskugel extends Lebensmittel { }

    export interface Streusel extends Lebensmittel { }


    let path: string = window.location.pathname;
    let page: string = path.split("/").pop();

    //mit Canvas zeichnen
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myEiscreme");
    let context: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

    context.lineWidth = 3;


    //Eiskugel zeichnen
    function icecream(_colorString: string, _x: number, _y: number): void {

        context.beginPath();
        context.fillStyle = _colorString;
        context.strokeStyle = _colorString;
        context.arc(150 + _x, 130 + _y, 120, 0, 2 * Math.PI);
        context.closePath();
        context.fill();
        context.stroke();

    }



    // Waffel zeichnen
    function cone(_colorString: string, _x: number, _y: number): void {

        context.beginPath();
        context.fillStyle = _colorString;
        context.strokeStyle = _colorString;
        context.moveTo(50 + _x, 200 + _y);
        context.lineTo(150 + _x, 600 + _y);
        context.lineTo(250 + _x, 200 + _y);
        context.closePath();
        context.fill();
        context.stroke();

    }


    //streusel zeichnen
    function sprinkles(_colorString: string, _x: number, _y: number): void {
        context.beginPath();
        context.fillStyle = _colorString;
        context.strokeStyle = _colorString;
        context.moveTo(80, 140);
        context.lineTo(100, 150);
        context.closePath();
        context.stroke();

        context.beginPath();
        context.moveTo(170, 140);
        context.lineTo(150, 150);
        context.closePath();
        context.stroke();

        context.beginPath();
        context.moveTo(230, 100);
        context.lineTo(210, 110);
        context.closePath();
        context.stroke();

        context.beginPath();
        context.moveTo(180, 60);
        context.lineTo(190, 80);
        context.closePath();
        context.stroke();

        context.beginPath();
        context.moveTo(130, 100);
        context.lineTo(100, 100);
        context.closePath();
        context.stroke();

        context.beginPath();
        context.moveTo(100, 60);
        context.lineTo(130, 40);
        context.closePath();
        context.stroke();

        context.beginPath();
        context.moveTo(190, 160);
        context.lineTo(210, 180);
        context.closePath();
        context.stroke();
    }

    if (page == "Ergebnis.html") {

        icecream(localStorage.getItem("eiskugelFarbe"), 0, 0);  //Ergebnis der Eiscreme wird ausgegeben
        cone(localStorage.getItem("waffelFarbe"), 0, 0);  //Ergenis der Eiscreme wird ausgegeben
        sprinkles(localStorage.getItem("streuselFarbe"), 0, 0);  //Ergenbis der eiscreme wird ausgegeben

    }

    if (page == "index.html") {

        neuZeichnen();
    }



    //funnction um die for-Schleifen zu verbinden, damit sich der code nicht so oft widerholt
    /*function setupSelection(_selectElement: HTMLSelectElement, _data: any[],) {

        function selectionChanged(_e: Event) {
            document.getElementById("waffel").setAttribute("Waffel", "farbe");
        }

        function selectionChanged1(_e: Event) {
            document.getElementById("eiskugel").setAttribute("Eiskugel", "farbe");
        }

        function selectionChanged2(_e: Event) {
            document.getElementById("streusel").setAttribute("Streusel", "farbe");
        }

    }
*/



    // Daten im html ausgeben lassen damit sie auf der Seite angeziegt werden
    let waffelSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById("waffel");

    // Daten aus der data.ts laden WAFFEL
    for (let i: number = 0; i < waffelVariationen.length; i++) {
        let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
        newOptionElement.innerText = waffelVariationen[i].name;
        newOptionElement.setAttribute("value", waffelVariationen[i].farbe);
        waffelSelect.appendChild(newOptionElement);
    }
    waffelSelect.addEventListener("change", waffelVariationenChanged);

    function waffelVariationenChanged(_e: Event): void {
        console.log((<HTMLOptionElement>_e.target).value);
        localStorage.setItem("waffelFarbe", (<HTMLOptionElement>_e.target).value);
        neuZeichnen();
    }




    //und diese im html ausgeben lassen damit sie auf der Seite angeziegt werden
    let eiskugelSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById("eiskugel");
    // Daten aus der data.ts laden 
    for (let i: number = 0; i < eiskugelVariationen.length; i++) {
        let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
        newOptionElement.innerText = eiskugelVariationen[i].name;
        newOptionElement.setAttribute("value", eiskugelVariationen[i].farbe);
        eiskugelSelect.appendChild(newOptionElement);
    }
    eiskugelSelect.addEventListener("change", eiskugelVariationenChanged);

    function eiskugelVariationenChanged(_e: Event): void {
        console.log((<HTMLOptionElement>_e.target).value);
        localStorage.setItem("eiskugelFarbe", (<HTMLOptionElement>_e.target).value);
        neuZeichnen();

    }




    //und diese im html ausgeben lassen damit sie auf der Seite angeziegt werden
    let streuselSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById("streusel");
    // Daten aus der data.ts laden 
    for (let i: number = 0; i < streuselVariationen.length; i++) {
        let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
        newOptionElement.innerText = streuselVariationen[i].name;
        newOptionElement.setAttribute("value", streuselVariationen[i].farbe);
        streuselSelect.appendChild(newOptionElement);
    }
    streuselSelect.addEventListener("change", streuselVariationenChanged);

    function streuselVariationenChanged(_e: Event): void {
        console.log((<HTMLOptionElement>_e.target).value);
        localStorage.setItem("streuselFarbe", (<HTMLOptionElement>_e.target).value);
        neuZeichnen();
    }


    if (localStorage.getItem("streuselFarbe") == null) {

        localStorage.setItem("streuselFarbe", streuselVariationen[0].farbe);

    }
    streuselSelect.value = localStorage.getItem("streuselFarbe");


    if (localStorage.getItem("eiskugelFarbe") == null) {

        localStorage.setItem("eiskugelFarbe", eiskugelVariationen[0].farbe);

    }
    eiskugelSelect.value = localStorage.getItem("eiskugelFarbe");


    if (localStorage.getItem("waffelFarbe") == null) {

        localStorage.setItem("waffelFarbe", waffelVariationen[0].farbe);

    }
    waffelSelect.value = localStorage.getItem("waffelFarbe");




    //Funktion damit die farbe sich ändert sobal man etwas auswählt
    function neuZeichnen(): void {

        icecream(localStorage.getItem("eiskugelFarbe"), 300, 100);
        cone(localStorage.getItem("waffelFarbe"), 40, 100);
        sprinkles(localStorage.getItem("streuselFarbe"), 0, 0);
    }


    async function loadDataFromJSON(_url: RequestInfo): Promise<Lebensmittel> {
        let response: Response = await fetch(_url);
        let result: Lebensmittel = await response.json();
        return result;

    }
    loadDataFromJSON("gis-communication.herokuapp.com");
}