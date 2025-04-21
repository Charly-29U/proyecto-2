let fisica = parseFloat(prompt("Introduce la calificación de Física (0-10):"));

let quimica = parseFloat(prompt("Introduce la calificación de Química (0-10):"));

let biologia = parseFloat(prompt("Introduce la calificación de Biología (0-10):"));

let matematicas = parseFloat(prompt("Introduce la calificación de Matemáticas (0-10):"));

let informatica = parseFloat(prompt("Introduce la calificación de Informática (0-10):"));

let sumaCalificaciones = fisica + quimica + biologia + matematicas + informatica;

let porcentaje = (sumaCalificaciones / 50) * 100;

let calificacion;

if (porcentaje < 60) {
    calificacion = "Mala";
} else if (porcentaje >= 60 && porcentaje <= 80) {
    calificacion = "Buena";
} else {
    calificacion = "Excelente";
}

alert(`Tu porcentaje es ${porcentaje.toFixed(2)}% y tu calificación es ${calificacion}.`);