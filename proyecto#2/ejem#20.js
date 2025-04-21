let angulo1 = parseInt(prompt("Introduce el primer ángulo del triángulo:"));
let angulo2 = parseInt(prompt("Introduce el segundo ángulo del triángulo:"));
let angulo3 = parseInt(prompt("Introduce el tercer ángulo del triángulo:"));

if (angulo1 + angulo2 + angulo3 === 180) {
    alert("El triángulo es válido.");
} else {
    alert("El triángulo no es válido.");
}
