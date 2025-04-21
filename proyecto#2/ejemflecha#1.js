const calcularfactorial= num => {
    //verificar si el numero es positivo
    if (num < 0){
        return "El numero debe ser positivo";
    }
    //verificar si el numero es 0
    else if (num == 0 ) {
        return 1;
    }
    // calcular el factoral
    else{
        let factorial: number = 1;
        for (let i: number = 1; i <= num; i++)

            {
            factorial *= i;
        }
        return factorial;
    }
}