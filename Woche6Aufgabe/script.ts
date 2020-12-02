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

        farbe: string;
    }




    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myEiscreme");
    let context: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

    context.lineWidth = 3;


    function icecream(colorString2: string): void {

        context.beginPath();
        context.fillStyle = colorString2;
        context.strokeStyle = colorString2;
        context.arc(150, 130, 120, 0, 2 * Math.PI);
        context.closePath();
        context.fill();
        context.stroke();

    }



    function cone(colorString1: string): void {

        context.beginPath();
        context.fillStyle = colorString1;
        context.strokeStyle = colorString1;
        context.moveTo(50, 200);
        context.lineTo(150, 600);
        context.lineTo(250, 200);
        context.closePath();
        context.fill();
        context.stroke();

    }




    function steusel(colorString: string): void {
        context.beginPath();
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



    function neuZeichnen(): void {
        icecream(localStorage.getItem("eiskugelFarbe"));
        cone(localStorage.getItem("waffelFarbe"));
        steusel(localStorage.getItem("streuselFarbe"));
    }

    neuZeichnen();

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



    let button: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName("button");

    button[0].addEventListener("click", bestätigen);

    function bestätigen(_e: Event): void {
        let parent: HTMLDivElement = <HTMLDivElement>document.getElementById("fillThis");
        parent.innerHTML = "";
    }



















    /*document.querySelector("#Button5").addEventListener("click", deleteLocalStorage);
    function deleteLocalStorage(): void {
        localStorage.clear();
    }

    let myJason2: string = myJason2;
    let myObj2: Streusel[] = JSON.parse(myJason2);
    let myJason1: string = myJason1;
    let myObj1: Eiskugel[] = JSON.parse(myJason1);
    let myJason: string = myJason;
    let myObj: Waffel[] = JSON.parse(myJason);

    let myObjONE: [] = [localStorage.getItem("Streusel"), localStorage.getItem("Eiskugel"), localStorage.getItem("Waffel")];


    let tempString: string[] = window.location.pathname.split("/");
    function open(): void {
        switch (tempString[tempString.length - 1]) {
            case "index.html":
                canvas1(myObj);
                break;

            case "index.html":
                canvas1(myObj1);
                break;

            case "index.html":
                canvas1(myObj2);
                break;

            case "Eisladen.html":
                console.log(localStorage.getItem("Streusel"));
                console.log(localStorage.getItem("Eiskugel"));
                console.log(localStorage.getItem("Waffel"));
                canvas1(myObj3);
        }
    }
    open();

    function canvas1(_info: Eisladen[]): void {
        let selectElement: HTMLDivElement = <HTMLDivElement>document.getElementsByClassName("container")[0];

        for (let i: number = 0; i < _info.length; i++) {
            let div: HTMLDivElement = <HTMLDivElement>document.createElement("div");

            selectElement.appendChild(div);

            let optionImage: HTMLImageElement = <HTMLImageElement>document.createElement("img");
            optionImage.src = _info[i].img;
            div.appendChild(optionImage);
            optionImage.addEventListener("click", auswahlZurückgeben);
        }
    }


    function auswahlZurückgeben(_event: Event): void {
        let target: HTMLImageElement = <HTMLImageElement>_event.currentTarget;
        let temporString: string[] = target.src.split("/");
        //console.log("Du hast auf " + temporString[temporString.length - 1] + " geklickt");

        switch (tempString[tempString.length - 1]) {
            case "indes.html":
                localStorage.setItem("Streusel", temporString[temporString.length - 1]);
                break;

            case "index.html":
                localStorage.setItem("Eiskugel", temporString[temporString.length - 1]);
                break;

            case "index.html":
                localStorage.setItem("Waffel", temporString[temporString.length - 1]);
                break;
        }
    }*/


}

