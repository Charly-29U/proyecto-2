function calcularCostoAlquiler(tipo, cantidad, horas) {
    let costoHora;
    
    switch (tipo) {
        case 1:
            costoHora = 4000;
            break;
        case 2:
            costoHora = 3000;
            break;
        default:
            return null; // Devuelve null si el tipo de lavadora es inválido
    }

    let costoBase = costoHora * cantidad * horas;

    // Aplicar descuento del 3% si se alquilan más de 3 lavadoras
    if (cantidad > 3) {
        costoBase *= 0.97;
    }

    return costoBase;
}

let tipoLavadora, cantidad, horas;

do {
    tipoLavadora = parseInt(prompt("Introduce el tipo de lavadora (1 para grande, 2 para pequeña):"));
} while (isNaN(tipoLavadora) || (tipoLavadora !== 1 && tipoLavadora !== 2));

do {
    cantidad = parseInt(prompt("Introduce la cantidad de lavadoras alquiladas:"));
} while (isNaN(cantidad) || cantidad <= 0);

do {
    horas = parseInt(prompt("Introduce las horas de alquiler:"));
} while (isNaN(horas) || horas <= 0);

let costoTotal = calcularCostoAlquiler(tipoLavadora, cantidad, horas);

if (costoTotal !== null) {
    alert(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horas} horas: $${costoTotal.toLocaleString()}.`);
    console.log(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horas} horas: $${costoTotal.toLocaleString()}.`);
} else {
    alert("Error: Tipo de lavadora inválido.");
}
