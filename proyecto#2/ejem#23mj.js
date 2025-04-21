// Función para obtener y validar el operador
function obtenerOperador() {
    let operador;
    do {
        operador = prompt("Introduce tu operador (Claro, Tigo, Movistar):")
            .toLowerCase().trim();
    } while (!["claro", "tigo", "movistar"].includes(operador));
    return operador.charAt(0).toUpperCase() + operador.slice(1); // Capitaliza la primera letra
}

// Función para obtener la tarifa según el operador
function calcularTarifa(operador) {
    let cargoFijo, valorMinuto, valorPaqueteDatos;
    switch (operador.toLowerCase()) {
        case "tigo":
            cargoFijo = 45000;
            valorMinuto = 200;
            valorPaqueteDatos = 12000;
            break;
        case "claro":
            cargoFijo = 30000;
            valorMinuto = 100;
            valorPaqueteDatos = 18000;
            break;
        case "movistar":
            cargoFijo = 40000;
            valorMinuto = 250;
            valorPaqueteDatos = 8000;
            break;
    }
    return { cargoFijo, valorMinuto, valorPaqueteDatos };
}

// Obtener datos validados
let operador = obtenerOperador();
let minutosInternacionales = parseInt(prompt("Introduce la cantidad de minutos internacionales consumidos:"));
while (isNaN(minutosInternacionales) || minutosInternacionales < 0) {
    minutosInternacionales = parseInt(prompt("Introduce un número válido de minutos internacionales:"));
}

// Calcular costos
let { cargoFijo, valorMinuto, valorPaqueteDatos } = calcularTarifa(operador);
let costoMinutos = minutosInternacionales * valorMinuto;
let costoTotal = cargoFijo + costoMinutos + valorPaqueteDatos;

// Mostrar el resultado con formato de moneda
alert(`📡 Operador: ${operador}
 Cargo fijo: $${cargoFijo.toLocaleString()}
 Costo minutos internacionales: $${costoMinutos.toLocaleString()}
 Valor paquete de datos: $${valorPaqueteDatos.toLocaleString()}
 Costo total: $${costoTotal.toLocaleString()}`);
