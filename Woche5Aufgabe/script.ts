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


// Aufgabe 1 c 
interface Student {

    name: string;
    alter: number;
    matrikelnummer: number;
    studiengang: string;
    semester: number;

}

let s1: Student = { name: "Larissa", alter: 23, matrikelnummer: 235462, studiengang: "Medien Informatik", semester: 3 };
let s2: Student = { name: "Leon", alter: 19, matrikelnummer: 235367, studiengang: "Medienkonzeption", semester: 1 };
let s3: Student = { name: "Kai", alter: 26, matrikelnummer: 235262, studiengang: "Online Medien", semester: 5 };

// tslint:disable-next-line: typedef
let assoArray = { s1, s2, s3, "name": "Serena", "alter": 22, "matrikelnummer": 238746, "studiengang": "Wirtschaftsinfromatik", "semester": 7 };

function showInfo(): void {

    console.log(s1);
    console.log(s2);
    console.log(s3);
    console.log(assoArray);
}

showInfo();
*/
// Aufgabe 2 a


/*

*/

// Aufgabe 3 a 

/*let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");

let context: CanvasRenderingContext2D = canvas.getContext("2d");


context.lineWidth = 3;

context.fillStyle = "green";
context.fillRect(0, 200, 500, 150);
context.strokeRect(0, 200, 500, 150); //Wiese

context.fillStyle = "lightblue";
context.fillRect(0, 0, 500, 200);
context.strokeRect(0, 0, 500, 200);  //Himmel


// Wall
context.strokeRect(75, 140, 150, 110);
context.clearRect(75, 140, 150, 110);

// Door
context.fillStyle = "#000";
context.fillRect(130, 190, 40, 60);

//tree
context.fillStyle = "brown";
context.fillRect(280, 140, 30, 150);


// Roof

context.beginPath();

context.moveTo(50, 140);
context.lineTo(150, 60);
context.lineTo(250, 140);
context.strokeStyle = "grey";
context.fillStyle = "grey";
context.fill();
context.closePath();
context.stroke();


//baum krone
context.beginPath();
context.moveTo(170, 80);
context.bezierCurveTo(130, 100, 130, 150, 230, 150);
context.bezierCurveTo(250, 180, 320, 180, 340, 150);
context.bezierCurveTo(420, 150, 420, 120, 390, 100);
context.bezierCurveTo(430, 40, 370, 30, 340, 50);
context.bezierCurveTo(320, 5, 250, 20, 250, 50);
context.bezierCurveTo(200, 5, 150, 20, 170, 80);
context.closePath();
context.lineWidth = 5;
context.fillStyle = "green";
context.fill();
context.strokeStyle = "lightgreen";
context.stroke();

//clouds

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

