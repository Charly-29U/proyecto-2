const esPalindromo= num =>{
    // verificar si el numeroes entero
    if(!number.isInteger(num)){
        return "el valor debe ser un numero entero"
    }

    // convertir el termino a una cadena de texto
    conts numString: String = Math.abs(num).toString();

    // Inicializar una variable para almacenar el numero invertido
    let numInvertido : String = "";

    // Iterar sobre la cadena de texto y construir el numero Invertido
    for (let i : number = numString.length - 1; i >= 0; i--){
        numInvertido += numString[i;]
    }

    return numString === numInvertido
}

console.log(esPalindromo(num: 12321)); // Output: true
console.log(esPalindromo(num: 54765)); // Output: false
console.log(esPalindromo(num: 3.14)); //Output: "el valor debe ser un numero entero"

