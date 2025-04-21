let tipoLavadora = prompt("Introduce el tipo de lavadora (1 para grande, 2 para pequeña):");
tipoLavadora = parseInt(tipoLavadora); 
let cantidad = prompt("Introduce la cantidad de lavadoras alquiladas:");
cantidad = parseInt(cantidad);
let horas = prompt("Introduce las horas de alquiler:");
horas = parseInt(horas);
let costoHora = 0;
if (tipoLavadora === 1) {
    costoHora = 4000;
} else if (tipoLavadora === 2) {
    costoHora = 3000;
} else {
    alert("Tipo de lavadora inválido.");
}
let costoBase = costoHora * cantidad * horas;

if (cantidad > 3) {
    costoBase = costoBase * 0.97;
}
alert(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horas} horas: $${costoBase.toFixed(2)}.`);