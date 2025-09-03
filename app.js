// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para guardar los nombres
const nombres = [];

// Función para añadir un amigo a la lista
function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  if (nombre === '') {
    alert('Por favor, escribe un nombre válido.');
    return;
  }

  nombres.push(nombre);
  actualizarLista();
  input.value = '';
  input.focus();
}

// Función para actualizar visualmente la lista
function actualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  nombres.forEach(nombre => {
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

// Función para sortear un nombre aleatoriamente
function sortearAmigo() {
  if (nombres.length === 0) {
    alert('No hay nombres para sortear. Agrega al menos uno.');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * nombres.length);
  const nombreSorteado = nombres[indiceAleatorio];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = ''; // Limpiar resultado anterior

  const li = document.createElement('li');
  li.textContent = `🎉 El amigo secreto es: ${nombreSorteado}`;
  resultado.appendChild(li);
}


/* Creamos un array vacío para almacenar los nombres ingresados
const nombres = [];

// Función que se ejecuta al hacer clic en el botón "Adicionar"
function adicionarNombre() {
  // Obtenemos el input de texto por su ID
  const input = document.getElementById('nombreInput');
  
  // Tomamos el valor del input, eliminando espacios al inicio y al final
  const nombre = input.value.trim();

  // Validamos que el campo no esté vacío
  if (nombre === '') {
    alert('Por favor, ingresa un nombre válido.');
    return; // Salimos de la función si el nombre está vacío
  }

  // Agregamos el nombre al array de nombres
  nombres.push(nombre);

  // Actualizamos la lista visible en la página
  actualizarLista();

  // Limpiamos el input y colocamos el cursor en él nuevamente
  input.value = '';
  input.focus();
}

// Función para actualizar la lista de nombres en la interfaz
function actualizarLista() {
  // Obtenemos el elemento <ul> (o <ol>) donde se mostrarán los nombres
  const lista = document.getElementById('listaNombres');

  // Limpiamos la lista actual para no duplicar elementos
  lista.innerHTML = '';

  // Recorremos el array de nombres y los agregamos al DOM
  nombres.forEach(nombre => {
    const li = document.createElement('li'); // Creamos un nuevo elemento <li>
    li.textContent = nombre;                 // Le asignamos el texto del nombre
    lista.appendChild(li);                   // Lo agregamos a la lista en la página
  });
}

// Función para sortear aleatoriamente un nombre de la lista
function sortearAmigo() {
  // Validamos que haya al menos un nombre antes de sortear
  if (nombres.length === 0) {
    alert('Agrega al menos un nombre antes de sortear.');
    return;
  }

  // Generamos un número aleatorio entre 0 y la cantidad de nombres - 1
  const indiceAleatorio = Math.floor(Math.random() * nombres.length);

  // Obtenemos el nombre que corresponde
*/
