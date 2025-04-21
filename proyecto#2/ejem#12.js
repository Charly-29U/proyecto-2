let nombre = prompt("Ingrese su nombre:");
let horas = parseInt(prompt("Ingrese el número de horas trabajadas:"));
let salario;

switch (true) {
    case (horas >= 1 && horas <= 10):
        salario = horas * 30000;
        break;
    case (horas > 10):
        salario = horas * 33000;
        break;
    default:
        salario = 0;
}

alert(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a $${salario}`);
console.log(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a $${salario}`);