"use strict";
console.log("Hallo Welt!");
/*function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func1();
    func2();
    console.log(x + " " + "Logo!");
}

a1();


function func1(): void {
    console.log("Alles" + " " + "Klar?");

}

function func2(): void {
    console.log("Alles" + " " + "Gute!");
}


function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}

a2();

let x: string = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);

function func1(y: string): void {
    y = "Bla";
    console.log(y);
}

function func2(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void {
    x = "Test";
}

let x: number = 6;
let y: number = 3;

function multiply(x: number, y: number): void {
    let z: number = x * y;

    console.log(z);
}
multiply(x, y);



function max(x: number, y: number): void {
    if (x < y) {
        console.log(y);
    }
    else {
        console.log(x);
    }
}
max(x, y);

function schleife(): void {
    let i: number = 1;
    let ergebnis: number = 0;
    while (i <= 100) {
        ergebnis += i;
        i += 1;
    }
    console.log(ergebnis);
}

schleife();




function getRandom(): void {

    for (let i: number = 0; i < 10; i++) {

        var random = Math.floor(Math.random() * 100) + 1;
        console.log(random);

    }

}

getRandom();

let n: number = 5;
let e: string;

function factorial(n: number): void {

    if (n < 1) {
        console.log(1);
    } else {
        do {
            e = n + "*";
            console.log(e);
            break;
        } while (n > 1);

    }

}

factorial(n);
*/
function leapyears() {
    for (let i = 1900; i < 2020; i++)
        if (i)
            ;
}
/*
function string(): void {
    let s: string = "";
    while (s.length < 7) {
        s = s + "#";
        console.log(s);
    }
}

string();


function fizz(): void {
    for (let i: number = 0; i < 100; i++) {
        if (i % 3 == 0) {
            console.log("Fizz");
        }

        else if (i % 5 == 0) {
            console.log("Buzz");
        }

        else {
            console.log(i);
        }

    }
}

fizz();


function fizzBuzz(): void {
    for (let i: number = 0; i < 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }

        else if (1 % 3 == 0) {
            console.log("Fizz");
        }

        else if (1 % 5 == 0) {
            console.log("Buzz");
        }

        else {
            console.log(1);
        }
    }
}
fizzBuzz();


function schachbrett(): string {
    let brett: string = "";
    let leerzeichen: string = " ";

    for (let laenge: number = 0; laenge < 8; laenge++) {
        for (let breite: number = 0; breite < 8; breite++)
            if (leerzeichen == "#") {
                brett = brett + "#";
                leerzeichen = " ";
            }
            else {
                brett = brett + "#";
                leerzeichen = " ";
            }
    }

    brett = brett + "\n";
    if (leerzeichen == "#") {
        leerzeichen = " ";
    }
    else {
        leerzeichen = "#";
    }
    console.log(brett);
    return brett;
}

schachbrett();


*/
//# sourceMappingURL=script.js.map