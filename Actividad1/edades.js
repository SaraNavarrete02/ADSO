const prompt = require('prompt-sync')();

// Creas un vector (array) vacío para guardar las 10 edades
let edades = [];

// Variables para contar los grupos de edad
let menores = 0;       // Menores de 18
let mayores = 0;       // Entre 18 y 59
let adultosMayores = 0; // 60 o más

// Variables para guardar la edad más baja y más alta
// Las empezamos en extremos para que cualquier edad ingresada las reemplace fácilmente
let edadMasBaja = 121; 
let edadMasAlta = 0;

// Variable para sumar todas las edades y luego sacar el promedio
let sumaEdades = 0;

console.log("=== REGISTRO DE 10 EDADES ===");

// 1. CICLO PARA PEDIR LAS 10 EDADES
for (let i = 0; i < 10; i++) {
  let edadValida = false;
  let edadInput = 0;

  // Este ciclo se repite HASTA que el usuario ponga una edad correcta
  while (edadValida === false) {
    edadInput = Number(prompt("Ingrese la edad de la persona " + (i + 1) + ": "));

    // Validamos que esté entre 1 y 120
    if (edadInput >= 1 && edadInput <= 120) {
      edadValida = true; // La edad es correcta, salimos del "while"
    } else {
      console.log("¡Error! La edad debe estar entre 1 y 120 años. Intente de nuevo.");
    }
  }

  // Guardamos la edad válida en nuestro vector
  edades.push(edadInput);
}

// 2. CICLO PARA REVISAR LOS DATOS DEL VECTOR
for (let i = 0; i < edades.length; i++) {
  let edadActual = edades[i];

  // Acumulamos la edad para el promedio
  sumaEdades = sumaEdades + edadActual;

  // Clasificamos según la edad
  if (edadActual < 18) {
    menores = menores + 1;
  } else if (edadActual >= 18 && edadActual < 60) {
    mayores = mayores + 1;
  } else if (edadActual >= 60) {
    adultosMayores = adultosMayores + 1;
  }

  // Buscamos la edad más baja
  if (edadActual < edadMasBaja) {
    edadMasBaja = edadActual;
  }

  // Buscamos la edad más alta
  if (edadActual > edadMasAlta) {
    edadMasAlta = edadActual;
  }
}

// 3. CALCULAR EL PROMEDIO
let promedio = sumaEdades / 10;

// 4. MOSTRAR RESULTADOS
console.log("\n==================================");
console.log("       RESULTADOS DEL ANÁLISIS     ");
console.log("==================================");
console.log("Vector de edades ingresadas:", edades);
console.log("Cantidad de menores de edad (< 18): " + menores);
console.log("Cantidad de mayores de edad (18 - 59): " + mayores);
console.log("Cantidad de adultos mayores (>= 60): " + adultosMayores);
console.log("Edad más baja: " + edadMasBaja + " años");
console.log("Edad más alta: " + edadMasAlta + " años");
console.log("Promedio de edades: " + promedio + " años");
