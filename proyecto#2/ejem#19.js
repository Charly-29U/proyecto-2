let dias = parseInt(prompt("Introduce el número de días (15, 30, 3 meses):"));

let costo;

if (dias === 15) {
    costo = 18000;
} else if (dias === 30) {
    costo = 35000;
} else if (dias === 90) {
    costo = 86000;
} else {
    alert("Número de días inválido. Por favor ingresa 15, 30 o 90 días.");
}

if (costo) {
    alert(`El costo de la mensualidad es: $${costo}`);
}
