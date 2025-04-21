const contarVocales = str => {
    // convertir la cadena a minuscula para facilitar las comparacion 
    str = str.tolowerCase();
    let vocales: number 0;

    // Iterar sobre cada  caracter de la cadena 
    for (let  i : number = 0; i < str.length; i++)
        const char : String = str[i];

    // verificar si el caracter actual es una nueva vocal 
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ) {
      vocales++;
    } 
    // Devolver el recuento de vocales 
    return vocales;

}
console.log(contarVocales(str: "hola")) // Output : 2
console.log(contarVocales(str: "jghfbnb")) // Output: 0
console.log(contarVocales(str: "aeiou")) // Output: 5