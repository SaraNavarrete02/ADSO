/* Se instala la libreria prompt-sync para poder ingresar datos por consola de manera sincronica */
const prompt = require('prompt-sync')();
let sorteo = [];
//Bienvenida al aplicativo y solicitud de datos al usuario.
console.log("Bienvenido a la encuesta musical RadioFM");
console.log("Por favor ingrese los siguientes datos: ");

function ingresarDatos() {
  //Se declaran las variables de usuario, artista y canciones favoritas.
let nombre, id, email, ciudadNac, ciudadRes;
let artista;
let cancion = [];
// Se arma un objeto con los datos necesarios, asi creando a una persona diferente las veces necesarias.
let persona = 
  {
    nombre: nombre,
    id: id,
    email: email,
    ciudadNac: ciudadNac,
    ciudadRes: ciudadRes,
    artista: artista,
    cancion: cancion
  };

  //Se crea un for anidado para poder almacenar datos de un usuario y una lista de canciones favoritas.
  for (let i = 0; i < 2; i++){
    
    persona.nombre = prompt("Ingrese su nombre: ");
    persona.id = prompt("Ingrese su ID: ");
    persona.email = prompt("Ingrese su correo electrónico: ");
    persona.ciudadNac = prompt("Ingrese su ciudad de nacimiento: ");
    persona.ciudadRes = prompt("Ingrese su ciudad de residencia: ");
    persona.artista = prompt("Ingrese su artista favorito: ");
    for (let y = 0; y < 3; y++) {
      persona.cancion[y] = prompt(`Ingrese su canción favorita numero ${y+1}: `);
    }
    sorteo.push(persona);
  }
}
//Se llama a la funcion principal para activarla y después através de un consol.log se muestra la respuesta en consola. 
ingresarDatos();
console.log(sorteo);