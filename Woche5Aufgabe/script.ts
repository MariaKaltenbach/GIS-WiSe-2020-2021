// Aufgabe 1 a 

/*let x: number = 27;
let y: number = 8;
let z: number = -1;

function min(x: number, y: number, z: number): void {

    if (x < y && x < z) {
        console.log(x);
    }
   
    else if (y < z && y < x) {
        console.log(y);
    }

    else if (z < x &&  z < y) {
        console.log(z);
    }

}

min(x, y, z);

// Aufgabe 1 b 

let n: number = 1;

function isEven(n: number): void {

    if (0 % n  == 0) {
        console.log(true);
    }

    else if ( 1 % n == 0) {
        isEven(n - 2);
        console.log(false);
    }
    


}

isEven(n);

*/

/*


// Aufgabe 1 c 
interface student {

    name: string;
    alter: number;
    matrikelnummer: number;
    studiengang: string;
    semester: number;

}

let s1: student = {name: "Larissa", alter: 23, matrikelnummer: 235462, studiengang: "Medien Informatik", semester: 3};
let s2: student = {name: "Leon", alter: 19, matrikelnummer: 235367, studiengang: "Medienkonzeption", semester: 1};
let s3: student = {name: "Kai", alter: 26, matrikelnummer: 235262, studiengang: "Online Medien", semester: 5};

let studenten: string[] = [s1, s2, s3];

// Aufgabe 2 a

function backwards(): void {

    let hallo: string = "Hallo";

    console.log(hallo.backwarts());

}


*/

// Aufgabe 3 a 
/*
let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");

let context: CanvasRenderingContext2D = canvas.getContext("2d");




context.lineWidth = 5;

context.strokeRect(75, 140, 150, 110);

context.fillRect(130, 190, 40, 60);

context.moveTo(50, 140);
context.lineTo(150, 60);  //Haus
context.lineTo(250, 140);

context.beginPath();


context.fillStyle = "green";
context.fillRect(0, 200, 500, 150);
context.strokeRect(0, 200, 500, 150); //Wiese

context.fillStyle = "lightblue";
context.fillRect(0, 0, 500, 200);
context.strokeRect(0, 0, 500, 200);  //Himmel


context.closePath();
context.stroke();




/*
context.fillRect(10, 10, 500, 1);
//context.fillRect(20, 20, 500, 500);  //Ausgefüllte Form rechteck/quadrat
//context.strokeRect(30, 30, 50, 50);  //unausgefüllte Form rechteck/quadrat
context.moveTo(50, 140);
context.lineTo(150, 60);
context.lineTo(250, 140);
context.closePath();
context.stroke();

//context.moveTo(300, 300); //Linie
//context.lineTo(400, 300); //Linie
*/

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("drwaArea");

let context: CanvasRenderingContext2D = canvas.getContext("2d");

var draw = false;

function drawLine(_e: Event): void {
    if (draw == true) {
        var posX = Event.pageX;
        var posY = Event.pageY;
        context.lineTo(posX, posY);
        context.stroke();
    }

    function start(_e: Event): void {
        var posX = Event.pageX;
        var posY = Event.pageY;
        context.moveTo(posX, posY);
        draw = true;
    }
}
