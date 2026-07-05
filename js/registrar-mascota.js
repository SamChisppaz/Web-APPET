// vlidación del formulario para registrar una mascota

// espera a que la página cargue completamente antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {

  // al hacer clic en cerrar sesión se deuelve al login
  document.getElementById('btn-logout').addEventListener('click', () => {
    window.location.href = '../index.html';
  });

  // cuando el usuario envia el formulario
  document.getElementById('form-mascota').addEventListener('submit', (e) => {

    //evita que la página se recargue al enviar
    e.preventDefault();

    // guarda cada campo en un objeto para trabajarlos más fácil
    const campos = {
      nombre:  document.getElementById('nombre'),
      especie: document.getElementById('especie'),
      raza:    document.getElementById('raza'),
      edad:    document.getElementById('edad'),
      sexo:    document.getElementById('sexo'),
    };

    // borra los errores del intento anterior antes de volver a validar
    Object.values(campos).forEach(campo => {
      campo.classList.remove('con-error');
      document.getElementById(`error-${campo.id}`).textContent = '';
    });

    let valido = true;

    // verifica que el nombre no este vacío
    if (!campos.nombre.value.trim()) {
      mostrarError(campos.nombre, 'El nombre es obligatorio.');
      valido = false;
    }

    // verifica que se haya seleccionado una especie
    if (!campos.especie.value) {
      mostrarError(campos.especie, 'Selecciona una especie.');
      valido = false;
    }

    // verifica que la raza no esté vacía
    if (!campos.raza.value.trim()) {
      mostrarError(campos.raza, 'La raza es obligatoria.');
      valido = false;
    }

    // verifica que la edad sea un número mayor a 0
    if (!campos.edad.value || campos.edad.value <= 0) {
      mostrarError(campos.edad, 'Ingresa una edad válida.');
      valido = false;
    }

    // verifica que se haya seleccionado el sexo
    if (!campos.sexo.value) {
      mostrarError(campos.sexo, 'Selecciona el sexo.');
      valido = false;
    }

    // si algún campo falló, no continúa
    if (!valido) return;

    // por ahora muestra un mensaje de prueba
    // cuando se conecte React y Express, aquí se envían los datos a la API
    alert('¡Mascota registrada! (simulación)');
  });

  // marca el campo en rojo y muestra el mensaje de error debajo
  function mostrarError(input, mensaje) {
    input.classList.add('con-error');
    document.getElementById(`error-${input.id}`).textContent = mensaje;
  }

});