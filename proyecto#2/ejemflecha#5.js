const invertirCadena= str => str.split('').reverse().join();
/* str.split('') : convierte la cadena de texto str en un arreglo de caracteres utlizados el metodo split('').
 Esto significa que cada caracter de la cadena se convierten  en un elemento del arreglo.
 .reverse(): Invierte el elemento del arreglo de carateres utilizando el metodo reverse().
  .join(''): convierte el arreglo de caracteres invertido nuevamente en una cadena de texto utilizando join('').
  Esto significa que los caracteres del arreglo se unen en una nueva cadena sin separadore  entre ellos 
  */
 console.log(invertirCadena(str:"no")) // Output:"on"
 console.log(invertirCadena(str:"palo")) // output:"olap"
 console.log(invertirCadena(str:"pes")) //Output: "sep"