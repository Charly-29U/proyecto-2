// Función para obtener los ingredientes seleccionados y calcular el costo adicional
function obtenerIngredientes() {
    let costoAdicional = 0;
    let ingredientesValidos = {
        "tocineta": 3000,
        "pavo": 3000,
        "queso": 2500,
        "jalapeño": 0 // Jalapeño es gratis
    };

    let ingredientes = prompt("Elige los ingredientes adicionales (separados por comas): tocineta, jalapeño, pavo, queso")
        .toLowerCase().trim().split(",");

    // Limpiar y calcular el costo de los ingredientes seleccionados
    ingredientes = ingredientes.map(ing => ing.trim());
    let ingredientesElegidos = [];

    ingredientes.forEach(ing => {
        if (ingredientesValidos.hasOwnProperty(ing)) {
            costoAdicional += ingredientesValidos[ing];
            ingredientesElegidos.push(ing);
        } else {
            console.log(`❌ El ingrediente '${ing}' no está disponible.`);
        }
    });

    return { costoAdicional, ingredientesElegidos };
}

// Suponiendo que precioBase ya está definido
if (typeof precioBase !== "undefined" && precioBase > 0) {
    let { costoAdicional, ingredientesElegidos } = obtenerIngredientes();
    let precioTotal = precioBase + costoAdicional;

    alert(`  Ingredientes seleccionados: ${ingredientesElegidos.length > 0 ? ingredientesElegidos.join(", ") : "Ninguno"}
Costo adicional: $${costoAdicional.toLocaleString()}
 Precio total por tu sándwich: $${precioTotal.toLocaleString()}`);
} else {
    alert(" Error: El precio base no está definido correctamente.");
}
