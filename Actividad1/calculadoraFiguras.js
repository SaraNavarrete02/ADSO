const prompt = require('prompt-sync')();  
const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });
let respuesta = 0;
console.log("----------------------------------------------");
console.log("Bienvendo a esta calculadora de figuras planas");
console.log("----------------------------------------------");
console.log("Seleccione la figura la cual desea calcular");
console.log(" ");
console.log("a. Calcular área y perimetro de un triangulo");
console.log("b. Calcular área y perimetro de un circulo");
console.log("c. Calcular área y perimetro de un rectangulo");
console.log("d. Calcular área y perimetro de un cuadrado");
respuesta = prompt();

/* Función para calcular el área y el perimetro del circulo
async function calcularAreaYPerimetroDeUnCirculo() {
  const radio = await pregunta("Radio: ");
  let perimetro = (2 * 3.1416 * radio);
  let area = (3.1416 * radio ** 2)
  console.log("Perimetro: " , perimetro)
  console.log("Área: " , área)
}
*/

/* Función para calcular el área y el perimetro de un cuadrado
async function calcularAreaYPerimetroDeUnCuadrado() {
  const lado = await pregunta("Lado: ");
  let perimetro = (4 * lado);
  let area = (lado ** 2);
  console.log("Perimetro: " , perimetro);
  console.log("Área: ",area);
}
*/

/* Función para calcular el área y el perimetro de un rectangulo
async function calcularAreaYPerimetroDeUnRectangulo() {
  const base = await pregunta("Base: ");
  const altura = await pregunta("Altura: ");
  let perimetro = (2 * (base + altura));
  let area = (base * altura);
  console.log("Perimetro: ", perimetro);
  console.log("Área: ", area);
}
*/

/* Función para calcular el área y el perimetro de un triangulo
async function calcularAreaYPerimetroDeUnTriangulo() {
  con
}
*/

switch (opcion.toLowerCase) {
  case 'a':
    calcularAreaYPerimetroDeUnTriangulo();
    break;
  case 'b':
    calcularAreaYPerimetroDeUnCirculo();
    break;
  case 'c':
    calcularAreaYPerimetroDeUnRectangulo();
    break;
  case 'd':
    calcularAreaYPerimetroDeUnTriangulo();
}
