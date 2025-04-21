// Variables globales
let cola = [];
let contadorTurnos = 0;

// Tomar un turno
function tomarTurno() {
  contadorTurnos++;
  let nuevoTurno = contadorTurnos;
  cola.push(nuevoTurno);
  alert(`🆕 Turno asignado: ${nuevoTurno}\nPor favor, espere su llamado.`);
}

// Llamar al siguiente cliente
function llamarCliente() {
  if (cola.length === 0) {
    alert("📭 No hay clientes en la cola.");
  } else {
    let turnoLlamado = cola.shift();
    alert(`📢 Llamando al turno: ${turnoLlamado}`);
  }
}

// Mostrar la cola actual
function mostrarCola() {
  if (cola.length === 0) {
    alert("🎉 La cola está vacía.");
  } else {
    alert(`👥 Turnos en espera: ${cola.join(", ")}`);
  }
}

// Mostrar cuántos turnos se han tomado
function mostrarTotalTurnos() {
  alert(`🔢 Total de turnos tomados: ${contadorTurnos}`);
}

// Menú principal
function mostrarMenu() {
  return prompt(
    "🏦 SISTEMA DE TURNOS - BANCO\n\n" +
    "1 Tomar un turno\n" +
    "2 Llamar a siguiente cliente\n" +
    "3Ver cola de espera\n" +
    "4 Ver total de turnos tomados\n" +
    "5 Salir\n\n" +
    "Seleccione una opción (1-5):"
  );
}

// Ejecutar el sistema
function iniciarSistema() {
  let salir = false;

  while (!salir) {
    let opcion = mostrarMenu();

    switch (opcion) {
      case "1":
        tomarTurno();
        break;
      case "2":
        llamarCliente();
        break;
      case "3":
        mostrarCola();
        break;
      case "4":
        mostrarTotalTurnos();
        break;
      case "5":
        salir = true;
        alert("👋 Gracias por usar el sistema de turnos.");
        break;
      default:
        alert("❌ Opción inválida. Intente de nuevo.");
    }
  }
}

// Iniciar
iniciarSistema();

