const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let personas = [];

// Función auxiliar para hacer preguntas en la consola
function pregunta(texto) {
  return new Promise((resolve) => {
    rl.question(texto, (respuesta) => {
      resolve(respuesta);
    });
  });
}

// Función para agregar una persona
async function agregarPersona() {
  console.log('\n--- Agregar Nueva Persona ---');
  
  try {
    const nombre = await pregunta('Nombre: ');
    const cedula = await pregunta('Número de Identificación (Cédula): ');
    const fechaNacimiento = await pregunta('Fecha de Nacimiento (DD/MM/YYYY): ');
    const correo = await pregunta('Correo Electrónico: ');
    const ciudadResidencia = await pregunta('Ciudad de Residencia: ');
    const ciudadOrigen = await pregunta('Ciudad de Origen: ');
    
    const canciones = [];
    console.log('\nIngrese hasta 3 canciones favoritas:');
    
    for (let i = 1; i <= 3; i++) {
      const artista = await pregunta(`Artista canción ${i}: `);
      if (artista.trim() === '') break;
      
      const titulo = await pregunta(`Título canción ${i}: `);
      if (titulo.trim() === '') break;
      
      canciones.push({
        artista: artista,
        titulo: titulo
      });
    }
    
    const persona = {
      nombre,
      cedula,
      fechaNacimiento,
      correo,
      ciudadResidencia,
      ciudadOrigen,
      canciones
    };
    
    personas.push(persona);
    console.log('\n Persona agregada exitosamente.');
  } catch (error) {
    console.log('\nError al agregar la persona:', error);
  }
}

// Función para mostrar información de una persona por posición
async function mostrarPersona() {
  if (personas.length === 0) {
    console.log('\nNo hay personas registradas.');
    return;
  }
  
  console.log('\n--- Mostrar Información de Persona ---');
  console.log(`Total de personas registradas: ${personas.length}`);
  
  try {
    const posicion = await pregunta('Ingrese la posición (1 a ' + personas.length + '): ');
    const indice = parseInt(posicion) - 1;
    
    if (indice < 0 || indice >= personas.length) {
      console.log('Posición inválida.');
      return;
    }
    
    const persona = personas[indice];
    console.log('\n--- Información de la Persona ---');
    console.log(`Nombre: ${persona.nombre}`);
    console.log(`Cédula: ${persona.cedula}`);
    console.log(`Fecha de Nacimiento: ${persona.fechaNacimiento}`);
    console.log(`Correo: ${persona.correo}`);
    console.log(`Ciudad de Residencia: ${persona.ciudadResidencia}`);
    console.log(`Ciudad de Origen: ${persona.ciudadOrigen}`);
    
    console.log('\nCanciones Favoritas:');
    if (persona.canciones.length === 0) {
      console.log('  Sin canciones registradas.');
    } else {
      persona.canciones.forEach((cancion, idx) => {
        console.log(`  ${idx + 1}. "${cancion.titulo}" - ${cancion.artista}`);
      });
    }
  } catch (error) {
    console.log('\nError al mostrar la información:', error);
  }
}

// Función principal del menú
async function menu() {
  let salir = false;
  
  while (!salir) {
    console.log('\n===== ENCUESTA MUSICAL =====');
    console.log('a. Agregar una persona');
    console.log('b. Mostrar información de una persona');
    console.log('c. Salir');
    
    try {
      const opcion = await pregunta('\nSeleccione una opción (a/b/c): ');
      
      switch (opcion.toLowerCase()) {
        case 'a':
          await agregarPersona();
          break;
        case 'b':
          await mostrarPersona();
          break;
        case 'c':
          salir = true;
          console.log('\n¡Hasta luego!');
          rl.close();
          break;
        default:
          console.log('Opción inválida. Intente de nuevo.');
      }
    } catch (error) {
      console.log('\nError en el menú:', error);
    }
  }
}

// Iniciar la aplicación
menu().catch(console.error);
