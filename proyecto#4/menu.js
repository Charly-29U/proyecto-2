// Inicialización de datos para cada programa
//-------- hotel----------------
let habitaciones = [0, 0, 0, 0, 0]; // Estado de habitaciones (0 = libre, 1 = ocupada)
// cajero automatico 
let saldo = 1000; // Saldo inicial del cajero
let transacciones = []; // Historial de transacciones
//----------super mercado--------------
let cola = []; // Cola de clientes
const MAX_CLIENTES = 7; // Máximo de clientes en la cola
//----------- maquina expendedora------------
let productos = ["Galletas", "Chocolates", "Gaseosa", "Caramelos", "Papas"];
let stock = [3, 2, 1, 5, 4]; // Cantidad de cada producto

// ---------------- Hotel ------------
//-----------mostrar estado de la habitacion (libre o ocupada)-------------
const mostrarEstado = () => {
    let estado = "Estado de habitaciones:\n";
    let libres = 0;
    for (let i = 0; i < habitaciones.length; i++) {
        if (habitaciones[i] === 0) libres++;
        estado += `Habitación ${i + 1}: ${habitaciones[i] === 0 ? "Libre" : "Ocupada"}\n`;
    }
    estado += `Total habitaciones libres: ${libres}`;
    alert(estado);
};
//-------------reservar---------------
const reservarHabitacion = (num) => {
    if (num < 1 || num > 5) {
        alert("Número de habitación inválido. Usa 1-5.");
    } else if (habitaciones[num - 1] === 1) {
        alert("Habitación ya ocupada.");
    } else {
        habitaciones[num - 1] = 1;
        alert(`Habitación ${num} reservada con éxito.`);
    }
};
//--------------librar habitacion-----------
const liberarHabitacion = (num) => {
    if (num < 1 || num > 5) {
        alert("Número de habitación inválido. Usa 1-5.");
    } else if (habitaciones[num - 1] === 0) {
        alert("Habitación ya está libre.");
    } else {
        habitaciones[num - 1] = 0;
        alert(`Habitación ${num} liberada con éxito.`);
    }
};

// ------------------ CAJERO AUTOMÁTICO --------------
//---------saldo----------
const mostrarSaldo = () => {
    alert(`Saldo actual: $${saldo}`);
};

const depositar = (cantidad) => {
    saldo += cantidad;
    transacciones.push(cantidad);
    if (transacciones.length > 5) transacciones.shift();
    alert(`Depósito exitoso. Nuevo saldo: $${saldo}`);
};
// --------------retirar------------
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

// ---------------------- COLA DE SUPERMERCADO -------------------
//-----------agregar cliente --------------
const agregarCliente = (nombre) => {
    if (cola.length < MAX_CLIENTES) {
        cola.push(nombre);
        alert(`${nombre} agregado a la cola.`);
    } else {
        alert("La cola está llena.");
    }
};
//---------atender cliente-----------
const atenderCliente = () => {
    if (cola.length > 0) {
        let atendido = cola.shift();
        alert(`${atendido} ha sido atendido.`);
    } else {
        alert("No hay clientes en la cola.");
    }
};

// ------------ MÁQUINA EXPENDEDORA ---------------
const comprarProducto = (codigo) => {
    if (codigo < 1 || codigo > 5) {
        alert("Código inválido.");
    } else if (stock[codigo - 1] === 0) {
        let sugerido = stock.findIndex(s => s > 0);
        alert(`Producto agotado. Puedes comprar: ${productos[sugerido]}`);
    } else {
        stock[codigo - 1]--;
        alert(`Has comprado ${productos[codigo - 1]}.`);
    }
};

// ------------- MENÚ PRINCIPAL ---------------
const menuPrincipal = () => {
    while (true) {
        let opcion = prompt("Menú Principal\n1. Sistema de Reservas de Hotel\n2. Cajero Automático\n3. Cola de Supermercado\n4. Máquina Expendedora\n5. Salir\nElige una opción:");

        if (opcion === "1") {
            while (true) {
                let subopcion = prompt("Sistema de Reservas de Hotel\n1. Ver estado\n2. Reservar\n3. Liberar\n4. Volver al menú principal");
                if (subopcion === "1") {
                    mostrarEstado();
                } else if (subopcion === "2") {
                    let num = parseInt(prompt("Ingresa el número de habitación (1-5):"));
                    reservarHabitacion(num);
                } else if (subopcion === "3") {
                    let num = parseInt(prompt("Ingresa el número de habitación (1-5):"));
                    liberarHabitacion(num);
                } else if (subopcion === "4") {
                    break;
                }
            }
        } else if (opcion === "2") {
            while (true) {
                let subopcion = prompt("Cajero Automático\n1. Consultar saldo\n2. Depositar\n3. Retirar\n4. Volver al menú principal");
                if (subopcion === "1") {
                    mostrarSaldo();
                } else if (subopcion === "2") {
                    let cantidad = parseInt(prompt("Ingresa la cantidad a depositar:"));
                    depositar(cantidad);
                } else if (subopcion === "3") {
                    let cantidad = parseInt(prompt("Ingresa la cantidad a retirar:"));
                    retirar(cantidad);
                } else if (subopcion === "4") {
                    break;
                }
            }
        } else if (opcion === "3") {
            while (true) {
                let subopcion = prompt("Cola de Supermercado\n1. Agregar cliente\n2. Atender cliente\n3. Volver al menú principal");
                if (subopcion === "1") {
                    let nombre = prompt("Ingresa el nombre del cliente:");
                    agregarCliente(nombre);
                } else if (subopcion === "2") {
                    atenderCliente();
                } else if (subopcion === "3") {
                    break;
                }
            }
        } else if (opcion === "4") {
            while (true) {
                let subopcion = prompt("Máquina Expendedora\n1. Comprar producto\n2. Volver al menú principal");
                if (subopcion === "1") {
                    let codigo = parseInt(prompt("Ingresa el código del producto (1-5):"));
                    comprarProducto(codigo);
                } else if (subopcion === "2") {
                    break;
                }
            }
        } else if (opcion === "5") {
            alert("Saliendo...");
            break;
        } else {
            alert("Opción inválida.");
        }
    }
};
