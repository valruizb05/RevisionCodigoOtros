var formulario = document.getElementById('form');
var lista      = document.getElementById('lista-de-invitados');

formulario.onsubmit = function(event) {
  event.preventDefault(); 


  var campoNombre  = document.getElementById('name');
  var campoEdad    = document.getElementById('age');
  var campoNacional= document.getElementById('nationality');


  var nombre   = campoNombre.value.trim();
  var edad     = parseInt(campoEdad.value, 10);  
  var nacional = campoNacional.value;

  campoNombre.classList.remove('error');
  campoEdad.classList.remove('error');


  if (nombre.length === 0) {
    campoNombre.classList.add('error');
  }
  if (isNaN(edad) || edad < 18 || edad > 120) {
    campoEdad.classList.add('error');
  }


  if (nombre.length > 0 && !isNaN(edad) && edad >= 18 && edad <= 120) {
    agregarInvitado(nombre, edad, nacional);
    formulario.reset();
  }
};

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === 'ar')   nacionalidad = 'Argentina';
  if (nacionalidad === 'mx')   nacionalidad = 'Mexicana';
  if (nacionalidad === 'per')  nacionalidad = 'Peruana';
  if (nacionalidad === 'vnzl') nacionalidad = 'Venezolana';

  var elementoLista = document.createElement('div');
  elementoLista.classList.add('elemento-lista');

  function crearCampo(etiqueta, valor) {
    var span  = document.createElement('span');
    span.textContent = etiqueta + ': ';
    var input = document.createElement('input');
    input.value = valor;
    elementoLista.appendChild(span);
    elementoLista.appendChild(input);
    elementoLista.appendChild(document.createElement('br'));
  }

  crearCampo('Nombre', nombre);
  crearCampo('Edad',   edad);
  crearCampo('Nacionalidad', nacionalidad);

  var botonBorrar = document.createElement('button');
  botonBorrar.textContent = 'Eliminar invitado';
  botonBorrar.onclick = function() {
    lista.removeChild(elementoLista);
  };
  elementoLista.appendChild(botonBorrar);

  lista.appendChild(elementoLista);
}
