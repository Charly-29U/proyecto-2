let emitePitido = prompt("¿La computadora emite un pitido al iniciarse? (sí/no)");
let discoDuroGira = prompt("¿El disco duro gira? (sí/no)");
if (emitePitido === "sí") {
    if (discoDuroGira === "sí") {
        alert("Póngase en contacto con el técnico de apoyo.");
    } else {
        alert("Verificar contactos de la unidad.");
    }
} else {
    if (discoDuroGira === "sí") {
        alert("Compruebe las conexiones de altavoces.");
    } else {
        alert("Traiga la computadora para repararla en la central.");
    }
}
