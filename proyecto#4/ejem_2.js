let saldo = 1000;
let transacciones = [];

const mostrarSaldo = () => {
    alert(`Saldo actual: $${saldo}`);
};

const depositar = (cantidad) => {
    saldo += cantidad;
    transacciones.push(cantidad);
    if (transacciones.length > 5) transacciones.shift();
    alert(`Depósito exitoso. Nuevo saldo: $${saldo}`);
};

const retirar = (cantidad) => {
    if (cantidad > 500) {
        alert("No puedes retirar más de $500 por transacción.");
    } else if (cantidad > saldo) {
        alert("Fondos insuficientes.");
    } else {
        saldo -= cantidad;
        transacciones.push(-cantidad);
        if (transacciones.length > 5) transacciones.shift();
        alert(`Retiro exitoso. Nuevo saldo: $${saldo}`);
    }
};

while (true) {
    let opcion = prompt("1. Consultar saldo\n2. Depositar\n3. Retirar\n4. Salir\nElige una opción:");
    if (opcion === "1") {
        mostrarSaldo();
    } else if (opcion === "2") {
        let cantidad = parseInt(prompt("Ingresa la cantidad a depositar:"));
        depositar(cantidad);
    } else if (opcion === "3") {
        let cantidad = parseInt(prompt("Ingresa la cantidad a retirar:"));
        retirar(cantidad);
    } else if (opcion === "4") {
        alert("Saliendo...");
        break;
    } else {
        alert("Opción inválida.");
    }
}