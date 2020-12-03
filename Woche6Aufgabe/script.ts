// Aufgabe 2

//namespace um Daten aus der data.ts zu exportieren
namespace Eisladen {

    export interface Lebensmittel {

        geschmack: string;
        preis: number;
        name: string;
        farbe: string;


    }



    export interface Waffel extends Lebensmittel {


    }


    export interface Eiskugel extends Lebensmittel {


    }



    export interface Streusel extends Lebensmittel {


    }


    //mit Canvas zeichnen
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myEiscreme");
    let context: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

    context.lineWidth = 3;

    //Eiskugel zeichnen
    function icecream(colorString: string): void {

        context.beginPath();
        context.fillStyle = colorString;
        context.strokeStyle = colorString;
        context.arc(150, 130, 120, 0, 2 * Math.PI);
        context.closePath();
        context.fill();
        context.stroke();

    }
    icecream("brown");

    //Eiskugel für die Unterseite
    /* function icecream(colorString: string): void {
 
         context.beginPath();
         context.fillStyle = colorString;
         context.arc(300, 350, 120, 0, 2 * Math.PI);
         context.closePath();
         context.fill();
         context.stroke();
 
     }*/

    // Waffel zeichnen
    function cone(colorString: string): void {

        context.beginPath();
        context.fillStyle = colorString;
        context.strokeStyle = colorString;
        context.moveTo(50, 200);
        context.lineTo(150, 600);
        context.lineTo(250, 200);
        context.closePath();
        context.fill();
        context.stroke();

    }

    cone("black");
    //waffel für die Unterseite
    /*function cone(colorString: string): void {

        context.beginPath();
        context.fillStyle = colorString;
        context.moveTo(500, 200);
        context.lineTo(600, 600);
        context.lineTo(700, 200);
        context.closePath();
        context.fill();
        context.stroke();

    }*/

    //streusel zeichnen
    function sprinkles(colorString: string): void {
        context.beginPath();
        context.fillStyle = colorString;
        context.strokeStyle = colorString;
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
    sprinkles("pink");

    /*let canvasOne: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myEiscremeReady");
    let context1: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

    context.lineWidth = 3;

    //Eiskugel für die Unterseite
    function icecream1(colorString: string): void {

        context1.beginPath();
        context1.fillStyle = colorString;
        context1.arc(300, 350, 120, 0, 2 * Math.PI);
        context1.closePath();
        context1.fill();
        context1.stroke();

    }
    icecream1("braun");

    //waffel für die Unterseite
    function cone1(colorString: string): void {

        context1.beginPath();
        context1.fillStyle = colorString;
        context1.moveTo(500, 200);
        context1.lineTo(600, 600);
        context1.lineTo(700, 200);
        context1.closePath();
        context1.fill();
        context1.stroke();

    }

    cone1("braun");

    //streusel zeichnen
    function sprinkles1(colorString: string): void {
        context1.beginPath();
        context1.fillStyle = colorString;
        context1.strokeStyle = colorString;
        context1.moveTo(80, 140);
        context1.lineTo(100, 150);
        context1.closePath();
        context1.stroke();

        context1.beginPath();
        context1.moveTo(170, 140);
        context1.lineTo(150, 150);
        context1.closePath();
        context1.stroke();

        context1.beginPath();
        context1.moveTo(230, 100);
        context1.lineTo(210, 110);
        context1.closePath();
        context1.stroke();

        context1.beginPath();
        context1.moveTo(180, 60);
        context1.lineTo(190, 80);
        context1.closePath();
        context1.stroke();

        context1.beginPath();
        context1.moveTo(130, 100);
        context1.lineTo(100, 100);
        context1.closePath();
        context1.stroke();

        context1.beginPath();
        context1.moveTo(100, 60);
        context1.lineTo(130, 40);
        context1.closePath();
        context1.stroke();

        context1.beginPath();
        context1.moveTo(190, 160);
        context1.lineTo(210, 180);
        context1.closePath();
        context1.stroke();
    }

    sprinkles1("pink");*/


    function setupSelection(selectElement: HTMLSelectElement, data: any[],) {

        function selectionChanged(_e: Event) {
            document.getElementById("waffel").setAttribute("Waffel", "farbe");
        }

        function selectionChanged1(_e: Event) {
            document.getElementById("eiskugel").setAttribute("Eiskugel", "farbe");
        }

        function selectionChanged2(_e: Event) {
            document.getElementById("streusel").setAttribute("Streusel", "farbe" );
        }

    }

    // Daten im html ausgeben lassen damit sie auf der Seite angeziegt werden
    let waffel: HTMLSelectElement = <HTMLSelectElement>document.getElementById("waffel");

    // Daten aus der data.ts laden WAFFEL
    for (let i: number = 0; i < waffelVariationen.length; i++) {
        let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
        newOptionElement.innerText = waffelVariationen[i].name;
        newOptionElement.setAttribute("value", waffelVariationen[i].farbe);
        waffel.appendChild(newOptionElement);
    }


    waffel.addEventListener("change", waffelVariationenChanged);

    function waffelVariationenChanged(_e: Event): void {
        console.log((<HTMLOptionElement>_e.target).value);
        localStorage.setItem("waffelFarbe", (<HTMLOptionElement>_e.target).value);
        neuZeichnen();
    }


    //und diese im html ausgeben lassen damit sie auf der Seite angeziegt werden
    let eiskugel: HTMLSelectElement = <HTMLSelectElement>document.getElementById("eiskugel");
    // Daten aus der data.ts laden 
    for (let i: number = 0; i < eiskugelVariationen.length; i++) {
        let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
        newOptionElement.innerText = eiskugelVariationen[i].name;
        newOptionElement.setAttribute("value", eiskugelVariationen[i].farbe);
        eiskugel.appendChild(newOptionElement);
    }

    eiskugel.addEventListener("change", eiskugelVariationenChanged);

    function eiskugelVariationenChanged(_e: Event): void {
        console.log((<HTMLOptionElement>_e.target).value);
        localStorage.setItem("eiskugelFarbe", (<HTMLOptionElement>_e.target).value);
        neuZeichnen();
    }



    //und diese im html ausgeben lassen damit sie auf der Seite angeziegt werden
    let streusel: HTMLSelectElement = <HTMLSelectElement>document.getElementById("streusel");
    // Daten aus der data.ts laden 
    for (let i: number = 0; i < streuselVariationen.length; i++) {
        let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
        newOptionElement.innerText = streuselVariationen[i].name;
        newOptionElement.setAttribute("value", streuselVariationen[i].farbe);
        streusel.appendChild(newOptionElement);
    }


    streusel.addEventListener("change", streuselVariationenChanged);

    function streuselVariationenChanged(_e: Event): void {
        console.log((<HTMLOptionElement>_e.target).value);
        localStorage.setItem("streuselFarbe", (<HTMLOptionElement>_e.target).value);
        neuZeichnen();
    }

    //Funktion damit die farbe sich ändert sobal man etwas auswählt
    function neuZeichnen(): void {

        icecream(localStorage.getItem("eiskugelFarbe"));
        sprinkles(localStorage.getItem("streuselFarbe"));
        cone(localStorage.getItem("waffelFarbe"));
    }

    neuZeichnen();

    localStorage.setItem("Streusel", streuselVariationen[0].farbe);
    streusel.value = localStorage.getItem("Streusel");
    localStorage.setItem("Eiskugel", eiskugelVariationen[0].farbe);
    eiskugel.value = localStorage.getItem("Eiskugel");
    localStorage.setItem("Waffel", waffelVariationen[0].farbe);
    waffel.value = localStorage.getItem("Waffel");

    //Bestätigen Button um auf die "Ansicht" (Eisladenseite) zu kommen

    let button: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName("button");

    button[0].addEventListener("click", bestätigen);

    function bestätigen(_e: Event): void {
        let parent: HTMLDivElement = <HTMLDivElement>document.getElementById("fillThis");
        parent.innerHTML = "";
    }


}