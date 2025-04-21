if (precioBase !== 0) {
    let ingredientes = prompt("Elige los ingredientes adicionales (separados por comas): tocineta, jalapeño, pavo, queso");
    let costoAdicional = 0;
    if (ingredientes === "tocineta") {
        costoAdicional += 3000;
    } else if (ingredientes === "pavo") {
        costoAdicional += 3000;
    } else if (ingredientes === "queso") {
        costoAdicional += 2500;
    } else if (ingredientes === "jalapeño") {
        // Jalapeño es gratis, no se añade costo
    } else {
        console.log("ese ingrediente no lo tenemos");
    }
    let precioTotal = precioBase + costoAdicional;
    alert("El precio total por tu sándwich es: $" + precioTotal);
}