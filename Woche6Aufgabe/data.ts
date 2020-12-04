namespace Eisladen {

    export let waffelVariationen: Waffel[] = [
        { geschmack: "Schokolade", preis: 0.70, name: "Schokowaffel", farbe: "black" },
        { geschmack: "Vanille", preis: 0.70, name: "Vanillewaffel", farbe: "beige"},
        { geschmack: "Haselnuss", preis: 0.70, name: "Haselnusswaffel", farbe: "brown" }
    ];

    let myWaffel: Waffel[] = waffelVariationen;
    let myJSON: string = JSON.stringify(myWaffel);
    console.log(myJSON);

    export let eiskugelVariationen: Eiskugel[] = [
        { geschmack: "Schokolade", preis: 1.20, name: "Schokoeis", farbe: "brown" },
        { geschmack: "Vanille", preis: 1.20, name: "Vanilleeis", farbe: "yellow" },
        { geschmack: "Erdbeere", preis: 1.20, name: "Erdbeereis", farbe: "pink" }

    ];

    let myEiskugel: Eiskugel[] = eiskugelVariationen;
    let myJSON1: string = JSON.stringify(myEiskugel);
    console.log(myJSON1);

    export let streuselVariationen: Streusel[] = [
        { geschmack: "Zucker", preis: 0.20, name: "Zuckerstreusel", farbe: "pink" },
        { geschmack: "Schokolade", preis: 0.20, name: "Schokostreusel", farbe: "brown" },
        { geschmack: "Weißeschokolade", preis: 0.20, name: "Weißeschokostreusel", farbe: "white"}
    ];

    let myStreusel: Streusel[] = streuselVariationen;
    let myJSON2: string = JSON.stringify(myStreusel);
    console.log(myJSON2);

    
}



