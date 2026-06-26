const prompt = require('prompt-sync')();
let nombre, id, email, ciudadNac, ciudadRes;
let artista;
let cancion = [];
let personas = [
  {
    nombre: nombre,
    id: id,
    email: email,
    ciudadNac: ciudadNac,
    ciudadRes: ciudadRes,
    artista: artista,
    cancion: cancion
  }
];

console.log("Bienvenido a la encuesta musical RadioFM");
console.log("Por favor ingrese los siguientes datos: ");

function ingresarDatos() {
  for (let i = 0; i < 6; i++){
    personas[i].nombre = prompt("Ingrese su nombre: ");
  }
}
ingresarDatos();
console.log(personas);