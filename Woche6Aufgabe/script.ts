// Aufgabe 1
/*
let buttons: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName("button");

buttons[0].addEventListener("click", makeNew);
buttons[1].addEventListener("click", reset);

function makeNew(_e: Event): void {
    let div: HTMLDivElement = document.createElement("div");
    div.style.backgroundColor = "black";
    div.style.height = "50px";
    div.style.width = "50px";
    div.style.marginLeft = (Math.random() * 200).toString() + "px";
    document.getElementById("fillThis")?.appendChild(div);
}

function reset(_e: Event): void {
let parent: HTMLDivElement = <HTMLDivElement>document.getElementById("fillThis");
parent.innerHTML = "";
}
*/

/*     <button>
    new
</button>
    <button>
    refresh
</button>

    <div id="fillThis">

    </div>
*/

// Aufgabe 2

namespace Eisladen {


    export interface Lebensmittel {

        geschmack: string;
        preis: number;
        name: string;


    }



    export interface Waffel extends Lebensmittel {

        farbe: string;
    }



    export interface Eiskugel extends Lebensmittel {

        farbe: string;
    }



    export interface Streusel extends Lebensmittel {

        form: string;
    }




    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myEiscreme");
    let context: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

    context.lineWidth = 3;


    function icecream(): void {

        context.beginPath();
        context.fillStyle = "lightyellow";
        context.arc(150, 130, 120, 0, 2 * Math.PI);
        context.closePath();
        context.fill();
        context.stroke();

    }

    icecream();

    function cone(): void {

        context.beginPath();
        context.fillStyle = "beige";
        context.moveTo(50, 200);
        context.lineTo(150, 600);
        context.lineTo(250, 200);
        context.closePath();
        context.fill();
        context.stroke();

    }

    cone();


    function steusel(): void {
        context.beginPath();
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

    steusel();



    let waffel: HTMLSelectElement = <HTMLSelectElement>document.getElementById("waffel");

    for (let i: number = 0; i < waffelVariationen.length; i++) {
        let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
        newOptionElement.innerText = waffelVariationen[i].name;
        newOptionElement.setAttribute("value", waffelVariationen[i].name + "_valueTag");
        waffel.appendChild(newOptionElement);
    }

    waffel.addEventListener("change", waffelVariationenChanged);

    function waffelVariationenChanged(_e: Event) {
        console.log((<HTMLHeadingElement>_e.target).value);
    }

    let eiskugel: HTMLSelectElement = <HTMLSelectElement>document.getElementById("eiskugel");

    for (let i: number = 0; i < eiskugelVariationen.length; i++) {
        let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
        newOptionElement.innerText = eiskugelVariationen[i].name;
        newOptionElement.setAttribute("value", eiskugelVariationen[i].name + "_valueTag");
        eiskugel.appendChild(newOptionElement);
    }

    eiskugel.addEventListener("change", eiskugelVariationenChanged);

    function eiskugelVariationenChanged(_e: Event) {
        console.log((<HTMLHeadingElement>_e.target).value);
    }


    let streusel: HTMLSelectElement = <HTMLSelectElement>document.getElementById("streusel");

    for (let i: number = 0; i < streuselVariationen.length; i++) {
        let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
        newOptionElement.innerText = streuselVariationen[i].name;
        newOptionElement.setAttribute("value", streuselVariationen[i].name + "_valueTag");
        streusel.appendChild(newOptionElement);
    }


    streusel.addEventListener("change", streuselVariationenChanged);

    function streuselVariationenChanged(_e: Event) {
        console.log((<HTMLHeadingElement>_e.target).value);
    }

    let button: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName("button");

    button[0].addEventListener("click", bestätigen);

    function bestätigen(_e: Event): void {
        let parent: HTMLDivElement = <HTMLDivElement>document.getElementById("fillThis");
        parent.innerHTML = "";
    }






}