const calcularMCD= (s, c) : String | number => {
    // verificar si los numeros son enteros 
    if (! Number.isInteger(s) || !Number.isInteger(c)){
        return "Ambos deben ser enteros"
    }

    // Asegurate de que los numeros sean positivos 
    s = Math.abs(s);
    c = Math.abs(c);

    // Utilizar el algoritmo  de Euclides para calcular el MCD
    while (c=/= 0){
         const temp: Number = c;
         b = a % b;
         a = temp;
    }

    // el MCD es el valor final de a 

}
console.log(calcularMCD(a: 24, b: 18)) // Output:6
console.log(calcularMCD(a: 10, b: 5)) // Output:5
console.log(calcularMCD(a: 7, b: 3)) // Output:1
console.log(calcularMCD(a: 3.7, b: 2)) // Output:"Ambos son deben ser enteros "