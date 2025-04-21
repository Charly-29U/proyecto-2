// Variables para estadísticas
let totalUsuarios = 0;
let totalLlamadas = 0;
let totalAsesoriasEstudiantes = 0;
let totalAsesoriasDirectivos = 0;

// Función para mostrar menú
function mostrarMenu() {
  return prompt(
    "📋 MENÚ PRINCIPAL\n\n" +
    "1. Registrar atención\n" +
    "2. Ver estadísticas\n" +
    "3. Salir\n\n" +
    "Seleccione una opción (1-3):"
  );
}

// Función para registrar atención
function registrarAtencion() {
  let cedula = prompt("Ingrese número de cédula:");
  if (!cedula) {
    alert("❌ Cédula no válida.");
    return;
  }

  let tipoAtencion = prompt("Tipo de atención:\n1. llamada\n2. asesoria").toLowerCase();

  if (tipoAtencion === "1" || tipoAtencion === "llamada") {
    totalUsuarios++;
    totalLlamadas++;
    alert(`📞 Usuario ${cedula} atendido por llamada telefónica.`);
  } else if (tipoAtencion === "2" || tipoAtencion === "asesoria") {
    let tipoAsesoria = prompt("Tipo de asesoría:\n1. estudiante\n2. directivo").toLowerCase();

    if (tipoAsesoria === "1" || tipoAsesoria === "estudiante") {
      totalUsuarios++;
      totalAsesoriasEstudiantes++;
      alert(`🎓 Usuario ${cedula} atendido por asesoría a estudiante.`);
    } else if (tipoAsesoria === "2" || tipoAsesoria === "directivo") {
      totalUsuarios++;
      totalAsesoriasDirectivos++;
      alert(`🏢 Usuario ${cedula} atendido por asesoría a directivo.`);
    } else {
      alert("❌ Tipo de asesoría no válido.");
      return;
    }

    let transferencia = confirm("¿Desea transferir al usuario a llamada telefónica?");
    if (transferencia) {
      totalUsuarios++;
      totalLlamadas++;
      alert("🔁 Usuario transferido a llamada telefónica.");
    }
  } else {
    alert("❌ Tipo de atención inválido.");
  }
}

// Función para mostrar estadísticas
function mostrarEstadisticas() {
  alert(
    `📊 ESTADÍSTICAS:\n\n` +
    `👥 Total usuarios atendidos: ${totalUsuarios}\n` +
    `📞 Llamadas telefónicas: ${totalLlamadas}\n` +
    `🎓 Asesorías a estudiantes: ${totalAsesoriasEstudiantes}\n` +
    `🏢 Asesorías a directivos: ${totalAsesoriasDirectivos}`
  );
}

// Función principal con menú
function iniciarSistema() {
  let salir = false;

  while (!salir) {
    let opcion = mostrarMenu();

    switch (opcion) {
      case "1":
        registrarAtencion();
        break;
      case "2":
        mostrarEstadisticas();
        break;
      case "3":
        salir = true;
        alert("👋 ¡Gracias por usar el sistema!");
        break;
      default:
        alert("Opción no válida. Intente nuevamente.");
    }
  }
}

// Iniciar el sistema
iniciarSistema();
