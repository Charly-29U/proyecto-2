function obtenerNumero(mensaje) {
    let numero;
    do {
        numero = parseFloat(prompt(mensaje));
    } while (isNaN(numero));
    return numero;
}

// Obtener números validados
let numero1 = obtenerNumero("Introduce el primer número:");
let numero2 = obtenerNumero("Introduce el segundo número:");
let numero3 = obtenerNumero("Introduce el tercer número:");

// Encontrar el mayor con Math.max
let mayor = Math.max(numero1, numero2, numero3);

// Mostrar el resultado
alert(`El número mayor entre ${numero1}, ${numero2} y ${numero3} es: ${mayor}`);
console.log(`El número mayor entre ${numero1}, ${numero2} y ${numero3} es: ${mayor}`);
