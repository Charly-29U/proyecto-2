const generarFibonacci = (n) : String=> {
    // verificar si n es un numero valido 
    if (n <= || !Number.isInteger(n)){
        return "por favor, ingrese un numero entero positivo.";
    
    }

    let resultado: String= "";
    let a : number = 0, b : number = 1;

    // Imprimir los dos primeros numeros de la serie
    resultado += `${a}, ${b}`;

    //Generar los numeros de la serie utilizando un ciclo
    for (let i: Number = 2; i < n; i++){
        conts siguiente : Number = a + b;
        resultado += `, ${siguiente}`;
        a = b;
        b = siguiente;
    }
    // DEvolver la cadena con la serie de Fibonacci
    return resultado;
}
console.log(generarFibonacci(n:8)) // Output: "0,1,1,2,3,5,8,13"
console.log(generarFibonacci(n:0)) // Output "por favor ingrese un numero entero positivo."
console.log(generarFibonacci(n:-4)) // Output "por favor ingrese un numero entero positivo."
