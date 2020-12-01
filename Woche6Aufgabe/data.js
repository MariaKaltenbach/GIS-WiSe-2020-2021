"use strict";
var Eisladen;
(function (Eisladen) {
    Eisladen.waffelVariationen = [
        { geschmack: "nichts", preis: 0.00, name: "Keine", farbe: "nichts" },
        { geschmack: "Schokolade", preis: 0.70, name: "Schokowaffel", farbe: "Braun" },
        { geschmack: "Vanille", preis: 0.70, name: "Vanillewaffel", farbe: "Gelb" },
        { geschmack: "Haselnuss", preis: 0.70, name: "Haselnusswaffel", farbe: "Hellbraun" }
    ];
    let myWaffel = Eisladen.waffelVariationen;
    let myJSON = JSON.stringify(myWaffel);
    console.log(myJSON);
    Eisladen.eiskugelVariationen = [
        { geschmack: "nichts", preis: 0.00, name: "Keine", farbe: "nichts" },
        { geschmack: "Schokolade", preis: 1.20, name: "Schokoeis", farbe: "Braun" },
        { geschmack: "Vanille", preis: 1.20, name: "Vanilleeis", farbe: "Gelb" },
        { geschmack: "Erdbeere", preis: 1.20, name: "Erdbeereis", farbe: "Rosa" }
    ];
    let myEiskugel = Eisladen.eiskugelVariationen;
    let myJSON1 = JSON.stringify(myEiskugel);
    console.log(myJSON1);
    Eisladen.streuselVariationen = [
        { geschmack: "nichts", preis: 0.00, name: "Keine", form: "nichts" },
        { geschmack: "Zucker", preis: 0.20, name: "Zuckerstreusel", form: "Kügelchen" },
        { geschmack: "Schokolade", preis: 0.20, name: "Schokostreusel", form: "Streusel" },
        { geschmack: "Weißeschokolade", preis: 0.20, name: "Weißseschokostreusel", form: "Streusel" }
    ];
    let myStreusel = Eisladen.streuselVariationen;
    let myJSON2 = JSON.stringify(myStreusel);
    console.log(myJSON2);
})(Eisladen || (Eisladen = {}));
//# sourceMappingURL=data.js.map