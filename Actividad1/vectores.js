let vector1 = [1, 3, 6, 9, 17];
let vector2 = [2, 4, 10, 17, 20];

console.log("------------------------------------------------------------")
console.log("Este programa leerá 2 vectores y generará una lista ordenada")
console.log("------------------------------------------------------------")

const vectorOrdenado = vector1.concat(vector2).sort((a, b) => a - b);

console.log("El vector ordenado es: " + vectorOrdenado);
