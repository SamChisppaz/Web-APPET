//Validación del formulario de actualización de perfil

document.addEventListener('DOMContentLoaded', () => {

  // al hacer clic en cerrar sesión, vuelve al login
  document.getElementById('btn-logout').addEventListener('click', () => {
    window.location.href = '../index.html';
  });

  // cuando el usuario envía el formulario
  document.getElementById('form-perfil').addEventListener('submit', (e) => {
    // Evita que la página se recargue al enviar
    e.preventDefault();

    // guarda cada campo en un objeto para trabajarlos más fácil
    const celular           = document.getElementById('celular');
    const direccion         = document.getElementById('direccion');
    const passwordActual    = document.getElementById('password-actual');
    const passwordNueva     = document.getElementById('password-nueva');
    const passwordConfirmar = document.getElementById('password-confirmar');

    /* limpia todos los errores antes de volver a validar */
    [celular, direccion, passwordActual, passwordNueva, passwordConfirmar]
      .forEach(campo => limpiar(campo));

    let valido = true;

    // el usuario debe llenar al menos un campo para poder actualizar
    const hayAlgo = [celular, direccion, passwordActual, passwordNueva, passwordConfirmar]
      .some(campo => campo.value.trim() !== '');

    if (!hayAlgo) {
      error(celular, 'error-celular', 'Completa al menos un campo para actualizar.');
      return;
    }

    // si el usuario toca cualquier campo de contraseña, los tres son obligatorios
    if (passwordNueva.value || passwordConfirmar.value || passwordActual.value) {
      if (!passwordActual.value.trim()) {
        error(passwordActual, 'error-password-actual', 'Ingresa tu contraseña actual.');
        valido = false;
      }
      if (!passwordNueva.value.trim()) {
        error(passwordNueva, 'error-password-nueva', 'Ingresa la nueva contraseña.');
        valido = false;
      } else if (passwordNueva.value.length < 8 || !/[A-Z]/.test(passwordNueva.value) || !/[0-9]/.test(passwordNueva.value)) {
        error(passwordNueva, 'error-password-nueva', 'Mín. 8 caracteres, 1 mayúscula y 1 número.');
        valido = false;
      }
      // verifica que la contraseña nueva y la confirmación sean iguales
      if (passwordNueva.value !== passwordConfirmar.value) {
        error(passwordConfirmar, 'error-password-confirmar', 'Las contraseñas no coinciden.');
        valido = false;
      }
    }

    if (!valido) return;

    // por ahora mostrara un mensaje de prueba, cuando haya backend, aquí se envían los datos al servidor
    alert('¡Perfil actualizado! (simulación)');
  });

  // marca el campo en rojo y muestra el mensaje de error debajo
  function mostrarError(input, idSpan, mensaje) {
    input.classList.add('con-error');
    document.getElementById(idSpan).textContent = mensaje;
  }
 
  // quita el error visual de un campo
  function limpiar(input) {
    input.classList.remove('con-error');
    const span = document.getElementById(`error-${input.id}`);
    if (span) span.textContent = '';
  }
 
});