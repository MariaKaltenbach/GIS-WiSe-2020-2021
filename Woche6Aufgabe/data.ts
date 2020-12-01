namespace Eisladen {

    export let waffelVariationen: Waffel[] = [
        { geschmack: "nichts", preis: 0.00, name: "Keine", farbe: "nichts" },
        { geschmack: "Schokolade", preis: 0.70, name: "Schokowaffel", farbe: "Braun" },
        { geschmack: "Vanille", preis: 0.70, name: "Vanillewaffel", farbe: "Gelb"},
        { geschmack: "Haselnuss", preis: 0.70, name: "Haselnusswaffel", farbe: "Hellbraun" }
    ];

    let myWaffel: Waffel[] = waffelVariationen;
    let myJSON: string = JSON.stringify(myWaffel);
    console.log(myJSON);

    export let eiskugelVariationen: Eiskugel[] = [
        { geschmack: "nichts", preis: 0.00, name: "Keine", farbe: "nichts" },
        { geschmack: "Schokolade", preis: 1.20, name: "Schokoeis", farbe: "Braun" },
        { geschmack: "Vanille", preis: 1.20, name: "Vanilleeis", farbe: "Gelb" },
        { geschmack: "Erdbeere", preis: 1.20, name: "Erdbeereis", farbe: "Rosa" }

    ];

    let myEiskugel: Eiskugel[] = eiskugelVariationen;
    let myJSON1: string = JSON.stringify(myEiskugel);
    console.log(myJSON1);

    export let streuselVariationen: Streusel[] = [
        { geschmack: "nichts", preis: 0.00, name: "Keine", form: "nichts" },
        { geschmack: "Zucker", preis: 0.20, name: "Zuckerstreusel", form: "Kügelchen" },
        { geschmack: "Schokolade", preis: 0.20, name: "Schokostreusel", form: "Streusel" },
        { geschmack: "Weißeschokolade", preis: 0.20, name: "Weißseschokostreusel", form: "Streusel"}
    ];

    let myStreusel: Streusel[] = streuselVariationen;
    let myJSON2: string = JSON.stringify(myStreusel);
    console.log(myJSON2);

}



