// Tendrán que hacer un ejemplo de las diferencias entre var, let y const
const diferenciasVarLetConst = () =>{
  var name = "Mario"; //Variable que puede ser asignado o no
  const lastname = "Rodriguez"; //Variable que no cambia
  if (true) {
    console.log(`Nombre del Alumno: ${name} ${lastname}`);
    var base = 12; // Variable que solo existe en este bloque
    let altura = 6;
    const areaTriangulo = (base * altura) / 2;
    console.log(`El area de un triangulo es: ${areaTriangulo}`);
  }
}

const obtenerDatos = async () => {
  const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await respuesta.json();
  console.log(`GET: ${JSON.stringify(posts)}`);
};

const crearDato = async () => {
  const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Insert New',
      body: 'Mario Rodriguez',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const postCreado = await respuesta.json();
  console.log(`POST: ${JSON.stringify(postCreado)}`);
};

const actualizarDatos = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'Actualizar Dato',
      body: 'Mario Rodriguez',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(response => response.json())
  .then(json => console.log(`PUT: ${JSON.stringify(json)}`));
};

const eliminarDatos = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(json => console.log(`DELETE: ${JSON.stringify(json)}`));
};

const simulacionPromesa = (tiempoEnSegundos) => new Promise((resolve, reject) => {
  if (tiempoEnSegundos < 1 || tiempoEnSegundos > 10) {
    reject('El tiempo debe estar entre 1 y 10 segundos.');
  } else {
    setTimeout(() => {
      resolve(`Simulación completada después de ${tiempoEnSegundos} segundos`);
    }, tiempoEnSegundos * 1000);
  }
});

const probarTryCatchFinally = () => {
  try {
    console.error('Este es un error simulado');
  } catch (error) {
    console.error(`Error en el catch`);
  } finally {
    console.log('Finally: Este bloque se ejecuta siempre');
  }
};

diferenciasVarLetConst();
obtenerDatos();
crearDato();
actualizarDatos();
eliminarDatos();
simulacionPromesa(5)
  .then(resultado => console.log(`Promesa: ${resultado}`))
  .catch(error => console.error(`Promesa: ${error}`));
probarTryCatchFinally();
