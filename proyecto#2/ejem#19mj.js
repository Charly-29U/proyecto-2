// Función para obtener y validar el número de días
function obtenerDias() {
    let dias;
    do {
        dias = parseInt(prompt("Introduce el número de días (15, 30 o 90):"));
    } while (isNaN(dias) || ![15, 30, 90].includes(dias));
    return dias;
}

// Función para calcular el costo según los días
function calcularCosto(dias) {
    let costo;
    switch (dias) {
        case 15:
            costo = 18000;
            break;
        case 30:
            costo = 35000;
            break;
        case 90:
            costo = 86000;
            break;
    }
    return costo;
}

// Obtener datos validados
let dias = obtenerDias();
let costo = calcularCosto(dias);

// Mostrar el resultado
alert(`El costo de la mensualidad es: $${costo.toLocaleString()}`);
console.log(`El costo de la mensualidad es: $${costo.toLocaleString()}`);
