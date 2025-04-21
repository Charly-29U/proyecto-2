// Función para obtener y validar el número de copias
function obtenerCopias() {
    let copias;
    do {
        copias = parseInt(prompt("Introduce el número de copias que deseas imprimir:"));
    } while (isNaN(copias) || copias <= 0);
    return copias;
}

// Función para determinar el precio por copia según la cantidad
function calcularPrecioPorCopia(copias) {
    let precio;
    switch (true) {
        case (copias <= 499):
            precio = 120;
            break;
        case (copias <= 749):
            precio = 100;
            break;
        case (copias <= 999):
            precio = 80;
            break;
        default:
            precio = 50;
    }
    return precio;
}

// Obtener número de copias validado
let copias = obtenerCopias();
let precioPorCopia = calcularPrecioPorCopia(copias);
let precioTotal = precioPorCopia * copias;

// Mostrar el resultado con formato de moneda
alert(`Número de copias: ${copias}
 Precio por copia: $${precioPorCopia.toLocaleString()}
 Precio total: $${precioTotal.toLocaleString()}`);
