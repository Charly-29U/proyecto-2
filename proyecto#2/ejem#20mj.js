// Función para obtener y validar un ángulo
function obtenerAngulo(numero) {
    let angulo;
    do {
        angulo = parseInt(prompt(`Introduce el ángulo ${numero} del triángulo:`));
    } while (isNaN(angulo) || angulo <= 0 || angulo >= 180);
    return angulo;
}

// Función para verificar si los ángulos forman un triángulo válido
function esTrianguloValido(a1, a2, a3) {
    return a1 + a2 + a3 === 180;
}

// Obtener los ángulos validados
let angulo1 = obtenerAngulo(1);
let angulo2 = obtenerAngulo(2);
let angulo3 = obtenerAngulo(3);

// Verificar si es un triángulo válido
if (esTrianguloValido(angulo1, angulo2, angulo3)) {
    alert("El triángulo es válido.");
} else {
    alert("El triángulo no es válido.");
}
