function obtenerCalificacion(materia) {
    let nota;
    do {
        nota = parseFloat(prompt(`Introduce la calificación de ${materia} (0-10):`));
    } while (isNaN(nota) || nota < 0 || nota > 10);
    return nota;
}

// Obtener calificaciones validadas
let fisica = obtenerCalificacion("Física");
let quimica = obtenerCalificacion("Química");
let biologia = obtenerCalificacion("Biología");
let matematicas = obtenerCalificacion("Matemáticas");
let informatica = obtenerCalificacion("Informática");

// Calcular el porcentaje
let sumaCalificaciones = fisica + quimica + biologia + matematicas + informatica;
let porcentaje = (sumaCalificaciones / 50) * 100;
let calificacion;

// Determinar la calificación
switch (true) {
    case porcentaje < 60:
        calificacion = "Mala";
        break;
    case porcentaje >= 60 && porcentaje <= 80:
        calificacion = "Buena";
        break;
    default:
        calificacion = "Excelente";
}

// Mostrar el resultado
alert(`Tu porcentaje es ${porcentaje.toFixed(2)}% y tu calificación es ${calificacion}.`);
console.log(`Tu porcentaje es ${porcentaje.toFixed(2)}% y tu calificación es ${calificacion}.`);
