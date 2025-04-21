let genero = prompt("Introduce tu género (femenino/masculino):");
let edad = parseInt(prompt("Introduce tu edad:"));

let ayuda;

if (genero === "femenino") {
    if (edad > 50) {
        ayuda = 120000;
    } else if (edad >= 30 && edad <= 50) {
        ayuda = 100000;
    } else {
        ayuda = 0;
    }
} else if (genero === "masculino") {
    ayuda = 40000;
} else {
    alert("Género no válido. Por favor ingresa 'femenino' o 'masculino'.");
}
alert(`El valor de ayuda mensual es: $${ayuda}`);