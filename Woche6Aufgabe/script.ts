

// Aufgabe 2

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


    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myEiscreme");
    let context: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

    context.lineWidth = 3;

    function icecream(colorString: string): void {

        context.beginPath();
        context.fillStyle = colorString;
        context.arc(150, 130, 120, 0, 2 * Math.PI);
        context.closePath();
        context.fill();
        context.stroke();

    }


    /* function icecream(colorString: string): void {
 
         context.beginPath();
         context.fillStyle = colorString;
         context.arc(300, 350, 120, 0, 2 * Math.PI);
         context.closePath();
         context.fill();
         context.stroke();
 
     }*/


    function cone(colorString: string): void {

        context.beginPath();
        context.fillStyle = colorString;
        context.moveTo(50, 200);
        context.lineTo(150, 600);
        context.lineTo(250, 200);
        context.closePath();
        context.fill();
        context.stroke();

    }

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


    function sprinkles(colorString: string): void {
        context.beginPath();
        context.fillStyle = colorString;
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



    function neuZeichnen(): void {
        
        icecream(localStorage.getItem("eiskugelFarbe"));
        sprinkles(localStorage.getItem("streuselFarbe"));
        cone(localStorage.getItem("waffelFarbe"));
    }

    neuZeichnen();

    // Daten aus der data.ts laden 

    let waffel: HTMLSelectElement = <HTMLSelectElement>document.getElementById("waffel");

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

    // Daten aus der data.ts laden 

    let eiskugel: HTMLSelectElement = <HTMLSelectElement>document.getElementById("eiskugel");

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


    // Daten aus der data.ts laden 

    let streusel: HTMLSelectElement = <HTMLSelectElement>document.getElementById("streusel");

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


    /*localStorage.setItem("Streusel", streuselVariationen[0].farbe);
    streusel.value = localStorage.getItem("Streusel");
    localStorage.setItem("Eiskugel", eiskugelVariationen[0].farbe);
    eiskugel.value = localStorage.getItem("Eiskugfel");
    localStorage.setItem("Waffel", waffelVariationen[0].farbe);
    waffel.value = localStorage.getItem("Waffel");*/

    function canvas1(): void {
        let waffelFarbe: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("waffelFarbe");
        waffelFarbe.setAttribute("src", localStorage.getItem("Waffel"));

        let eiskugelFarbe: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("eiskugelFarbe");
        eiskugelFarbe.setAttribute("src", localStorage.getItem("Eiskugel"));

        let streuselFarbe: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("streuselFarbe");
        streuselFarbe.setAttribute("src", localStorage.getItem("Streusel"));


    }
    canvas1();

    //Bestätigen Button um auf die "Ansicht" (Eisladenseite) zu kommen

    let button: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName("button");

    button[0].addEventListener("click", bestätigen);

    function bestätigen(_e: Event): void {
        let parent: HTMLDivElement = <HTMLDivElement>document.getElementById("fillThis");
        parent.innerHTML = "";
    }

}