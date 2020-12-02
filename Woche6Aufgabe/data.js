"use strict";
var Eisladen;
(function (Eisladen) {
    Eisladen.waffelVariationen = [
        { geschmack: "Schokolade", preis: 0.70, name: "Schokowaffel", farbe: "Braun" },
        { geschmack: "Vanille", preis: 0.70, name: "Vanillewaffel", farbe: "Gelb" },
        { geschmack: "Haselnuss", preis: 0.70, name: "Haselnusswaffel", farbe: "Hellbraun" }
    ];
    let myWaffel = Eisladen.waffelVariationen;
    let myJSON = JSON.stringify(myWaffel);
    console.log(myJSON);
    Eisladen.eiskugelVariationen = [
        { geschmack: "Schokolade", preis: 1.20, name: "Schokoeis", farbe: "Braun" },
        { geschmack: "Vanille", preis: 1.20, name: "Vanilleeis", farbe: "Gelb" },
        { geschmack: "Erdbeere", preis: 1.20, name: "Erdbeereis", farbe: "Rosa" }
    ];
    let myEiskugel = Eisladen.eiskugelVariationen;
    let myJSON1 = JSON.stringify(myEiskugel);
    console.log(myJSON1);
    Eisladen.streuselVariationen = [
        { geschmack: "Zucker", preis: 0.20, name: "Zuckerstreusel", farbe: "pink" },
        { geschmack: "Schokolade", preis: 0.20, name: "Schokostreusel", farbe: "braum" },
        { geschmack: "Weißeschokolade", preis: 0.20, name: "Weißseschokostreusel", farbe: "beige" }
    ];
    let myStreusel = Eisladen.streuselVariationen;
    let myJSON2 = JSON.stringify(myStreusel);
    console.log(myJSON2);
})(Eisladen || (Eisladen = {}));
//# sourceMappingURL=data.js.map