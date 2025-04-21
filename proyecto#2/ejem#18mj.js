// Función para obtener y validar el género
function obtenerGenero() {
    let genero;
    do {
        genero = prompt("Introduce tu género (femenino/masculino):").toLowerCase().trim();
    } while (genero !== "femenino" && genero !== "masculino");
    return genero;
}

// Función para obtener y validar la edad
function obtenerEdad() {
    let edad;
    do {
        edad = parseInt(prompt("Introduce tu edad:"));
    } while (isNaN(edad) || edad <= 0);
    return edad;
}

// Función para calcular la ayuda mensual
function calcularAyuda(genero, edad) {
    let ayuda = 0;

    switch (genero) {
        case "femenino":
            if (edad > 50) {
                ayuda = 120000;
            } else if (edad >= 30 && edad <= 50) {
                ayuda = 100000;
            }
            break;
        case "masculino":
            ayuda = 40000;
            break;
    }

    return ayuda;
}

// Obtener datos validados
let genero = obtenerGenero();
let edad = obtenerEdad();
let ayuda = calcularAyuda(genero, edad);

// Mostrar el resultado
alert(`El valor de ayuda mensual es: $${ayuda.toLocaleString()}`);
console.log(`El valor de ayuda mensual es: $${ayuda.toLocaleString()}`);
