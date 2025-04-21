cont calcularPOtencia= (base, exponente) : String | number => {
    if (!Number.isNaN(base) || !Number.isInteger(exponente)){
        return " Ambos numeros deben ser enteros.";
    }

    // manejar el caso cuando el exponente es 0
    if ( exponente === 0) {
        return 1;
    }

    // Manejar el caso cuando la base es 0 y el exponente es negativo
    if (base === 0 && exponente < 0){
        return "No se puede realizar la operacion.";
    }
    let resultado : number = 1 

    // calcular la potencia utilizando un ciclo
    for (let i : number = 0; i < Math.abs(exponente); i++){
        resutado *= base;
    }
    // Devolver el resultado inverso si el exponente es negativo
    return exponente < 0 ? / resultado : resultado;

}

console.log(calcularMCD(base : 3, exponente : 3)) //OUtput: 27
console.log(calcularMCD(base : 6, exponente : -3)) //OUtput: 0,0046
console.log(calcularMCD(base : 3.5, exponente : 2)) //OUtput: "Ambos numeros deben ser enteros."
