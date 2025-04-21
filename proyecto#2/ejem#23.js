let operador = prompt("Introduce tu operador (Claro, Tigo, Movistar):");
let minutosInternacionales = parseInt(prompt("Introduce la cantidad de minutos internacionales consumidos:"));
let cargoFijo, valorMinuto, valorPaqueteDatos;
if (operador === "tigo") {
    cargoFijo = 45000;
    valorMinuto = 200;
    valorPaqueteDatos = 12000;
} else if (operador === "claro") {
    cargoFijo = 30000;
    valorMinuto = 100;
    valorPaqueteDatos = 18000;
} else if (operador === "movistar") {
    cargoFijo = 40000;
    valorMinuto = 250;
    valorPaqueteDatos = 8000;
} else {
    alert("Operador no válido. Por favor, ingresa Claro, Tigo o Movistar.");
}
if (cargoFijo && valorMinuto && valorPaqueteDatos) {
    let costoMinutos = minutosInternacionales * valorMinuto;
    let costoTotal = cargoFijo + costoMinutos + valorPaqueteDatos;
    alert(`Operador: ${operador.charAt(0).toUpperCase() + operador.slice(1)}\n` +
          `Cargo fijo: $${cargoFijo}\n` +
          `Costo minutos internacionales: $${costoMinutos}\n` +
          `Valor paquete de datos: $${valorPaqueteDatos}\n` +
          `Costo total: $${costoTotal}`);
}