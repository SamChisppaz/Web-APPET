// maneja las pestañas del login y valida el formulario de acceso

// espera a que la página cargue antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {

  const login = document.getElementById('login');
  const registro = document.getElementById('registro');

  const email = document.getElementById('email');
  const password = document.getElementById('password');

  const errorEmail = document.getElementById('error-email');
  const errorPassword = document.getElementById('error-password');

  const btnLogin = document.getElementById('btn-login');

  // cambia entre iniciar Sesión y reegistrarse al hacer clic en cada pestaña
  document.querySelectorAll('.pestana').forEach(pestana => {

    pestana.addEventListener('click', () => {

      // quita el resaltado de todas las pestañas y se lo pone a la que se clickeo
      document.querySelectorAll('.pestana').forEach(t => t.classList.remove('activa'));
      pestana.classList.add('activa');

      // oculta los dos formularios y muestra solo el que corresponde a la pestaña
      login.classList.add('oculto');
      registro.classList.add('oculto');
      document.getElementById(pestana.dataset.panel).classList.remove('oculto');

    });

  });

  // al hacer clic en iniciar Sesión valida los campos antes de continuar
  btnLogin.addEventListener('click', () => {

    // borra los mensajes de error del intento anterior
    errorEmail.textContent = '';
    errorPassword.textContent = '';

    let valido = true;

    // verifica que el correo no esté vacío y tenga el símbolo @
    if (!email.value.trim() || !email.value.includes('@')) {
      errorEmail.textContent = 'Ingresa un correo válido.';
      valido = false;
    }

    // verifica que la contraseña no este vacía
    if (!password.value.trim()) {
      errorPassword.textContent = 'La contraseña es obligatoria.';
      valido = false;
    }

    // si los campos son válidos redirige al dashboard
    // según el rol del usuario (ciudadano o admin) redirige a la página correcta
    if (valido) {
      window.location.href = 'pages/dashboard.html';
    }

  });

});