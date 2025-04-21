const sumaDigitos = num=>{
    // convertir el numeros a una cadena de texto
    const numString: String = Math.abs(num).tosString();

    // inicializar la variable para almacenar la suma
    let suma : Number = 0;

    // Iterar sobre cada digito  de la cadena de texto
    for (let i: Number= 0; i< numString.length; i++){
        // convertir el digito actual de cadena a numero
        const digito: Number= parseInt(numString[i]);
        
        // sumar el digito a la variable suma
        suma += digito;

    }   
    // Devolver la suma de los digitos 
    return suma;

} 
console.log(sumaDigitos(num3345)); //Output: 15
console.log(sumaDigitos(num-562)); //Output: 13
console.log(sumaDigitos(num1)); //Output: 1