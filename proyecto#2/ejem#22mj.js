// Función para obtener y validar respuestas sí/no
function obtenerRespuesta(pregunta) {
    let respuesta;
    do {
        respuesta = prompt(pregunta + " (sí/no)").toLowerCase().trim();
    } while (respuesta !== "sí" && respuesta !== "no");
    return respuesta;
}

// Preguntar al usuario con validación
let emitePitido = obtenerRespuesta("¿La computadora emite un pitido al iniciarse?");
let discoDuroGira = obtenerRespuesta("¿El disco duro gira?");

// Determinar el diagnóstico
if (emitePitido === "sí") {
    if (discoDuroGira === "sí") {
        alert("Póngase en contacto con el técnico de apoyo.");
    } else {
        alert(" Verificar contactos de la unidad.");
    }
} else {
    if (discoDuroGira === "sí") {
        alert(" Compruebe las conexiones de altavoces.");
    } else {
        alert(" Traiga la computadora para repararla en la central.");
    }
}
