function calcularSalario(horas) {
    let salario;
    switch (true) {
        case horas >= 1 && horas <= 10:
            salario = horas * 30000;
            break;
        case horas > 10:
            salario = horas * 33000;
            break;
        default:
            salario = 0;
    }
    return salario;
}

let nombre;
let horas;

do {
    nombre = prompt("Ingrese su nombre:");
} while (!nombre || nombre.trim() === "");

do {
    horas = parseFloat(prompt("Ingrese el número de horas trabajadas:"));
} while (isNaN(horas) || horas <= 0);

let salario = calcularSalario(horas);
let salarioFormateado = salario.toLocaleString();

alert(`Señor/a ${nombre}, el número de horas trabajadas es ${horas} y su salario equivale a $${salarioFormateado}`);
console.log(`Señor/a ${nombre}, el número de horas trabajadas es ${horas} y su salario equivale a $${salarioFormateado}`);
