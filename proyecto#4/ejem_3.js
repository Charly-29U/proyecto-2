let cola = [];
const MAX_CLIENTES = 7;

const agregarCliente = (nombre) => {
    if (cola.length < MAX_CLIENTES) {
        cola.push(nombre);
        alert(`${nombre} agregado a la cola.`);
    } else {
        alert("La cola está llena.");
    }
};

const atenderCliente = () => {
    if (cola.length > 0) {
        let atendido = cola.shift();
        alert(`${atendido} ha sido atendido.`);
    } else {
        alert("No hay clientes en la cola.");
    }
};

