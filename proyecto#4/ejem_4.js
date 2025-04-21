let productos = ["Galletas", "Chocolates", "Gaseosa", "Caramelos", "Papas"];
let stock = [3, 2, 1, 5, 4];

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