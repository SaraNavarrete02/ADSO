// Activamos la herramienta para pedir datos por consola
const prompt = require('prompt-sync')();  

console.log("----------------------------------------------");
console.log("Bienvenido a esta calculadora de figuras planas");
console.log("----------------------------------------------");
console.log("Seleccione la figura la cual desea calcular:");
console.log("a. Triángulo");
console.log("b. Círculo");
console.log("c. Rectángulo");
console.log("d. Cuadrado");

// Pedimos la opción y la convertimos a minúscula para evitar errores
let opcion = prompt("Elija una opción (a, b, c, d): ").toLowerCase();

console.log("\n----------------------------------------------");

switch (opcion) {
  
  case 'a': // TRIÁNGULO
    console.log("--- CALCULADORA DE TRIÁNGULO ---");
    // Usamos Number() para que JavaScript sepa que son números y no texto
    let baseT = Number(prompt("Ingrese la base (b): "));
    let alturaT = Number(prompt("Ingrese la altura (h): "));
    let lado1 = Number(prompt("Ingrese el lado a: "));
    let lado2 = Number(prompt("Ingrese el lado c: "));
    
    let perimetroT = baseT + lado1 + lado2;
    let areaT = (baseT * alturaT) / 2;
    
    console.log("El perímetro del triángulo es: " + perimetroT);
    console.log("El área del triángulo es: " + areaT);
    break;

  case 'b': // CÍRCULO
    console.log("--- CALCULADORA DE CÍRCULO ---");
    let radio = Number(prompt("Ingrese el radio (r): "));
    const pi = 3.1416;
    
    // Nota: Corregimos la fórmula real del perímetro (2 * pi * radio)
    let perimetroC = 2 * pi * radio**2;
    let areaC = pi * radio**2; // radio * radio es lo mismo que radio al cuadrado
    
    console.log("El perímetro del círculo es: " + perimetroC);
    console.log("El área del círculo es: " + areaC);
    break;

  case 'c': // RECTÁNGULO
    console.log("--- CALCULADORA DE RECTÁNGULO ---");
    let baseR = Number(prompt("Ingrese la base (b): "));
    let alturaR = Number(prompt("Ingrese la altura (a): "));
    
    let perimetroR = 2 * (baseR + alturaR);
    let areaR = baseR * alturaR;
    
    console.log("El perímetro del rectángulo es: " + perimetroR);
    console.log("El área del rectángulo es: " + areaR);
    break;

  case 'd': // CUADRADO
    console.log("--- CALCULADORA DE CUADRADO ---");
    let lado = Number(prompt("Ingrese el lado (a): "));
    
    let perimetroCu = 4 * lado;
    let areaCu = lado * lado; // lado * lado es lado al cuadrado
    
    console.log("El perímetro del cuadrado es: " + perimetroCu);
    console.log("El área del cuadrado es: " + areaCu);
    break;

  default:
    console.log("Opcón no válida. Inténtalo de nuevo.");
}
