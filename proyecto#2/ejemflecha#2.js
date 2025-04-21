const esPrimo = num=> {
    //verificar si el numero es menor que 2(los numeros menores que 2 no son primos)
    if (num < 2){
        return false;
    }
    //verificar si el numero es 2 (el unico numero par primo)
    if (num === 2){
        return true;
    }
    //verificar si el numero es impar
    if (num %2 === 0){
        return true
    }
    // verificar si el numero es divisible por cualquier numero impar entre 3 y la raiz cuadrada del numero
    const limite: number= Math.sqrt(num);
    for (let i : number = 3; 1<= limite; i += 2){
        if (num %1 === 0){
            return
        }
    }
    // si no es divisible por ningun numero, entonces es primo
    return false;
}
console.log(esPrimo(num:7)); // Output:true
console.log(esPrimo(num:10)); // Output: false 
console.log(esPrimo(num:17)); // Output:true
console.log(esPrimo(num:0)); // Output: false 
console.log(esPrimo(num:1)); // Output: false 