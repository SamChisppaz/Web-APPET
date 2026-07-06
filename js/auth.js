// maneja las pestañas del login y valida el formulario de acceso

// espera a que la página cargue antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {

  // cambia entre "Iniciar Sesión" y "Registrarse" al hacer clic en cada pestaña
  document.querySelectorAll('.pestana').forEach(pestana => {
    pestana.addEventListener('click', () => {

      // 1uita el resaltado de todas las pestañas y se lo pone a la que se clickeó
      document.querySelectorAll('.pestana').forEach(t => t.classList.remove('activa'));
      pestana.classList.add('activa');

      // oculta los dos formularios y muestra solo el que corresponde a la pestaña
      document.getElementById('login').classList.add('oculto');
      document.getElementById('registro').classList.add('oculto');
      document.getElementById(pestana.dataset.panel).classList.remove('oculto');
    });
  });

  // al hacer clic en Iniciar Sesión valida los campos antes de continuar
  document.getElementById('btn-login').addEventListener('click', () => {

    const email    = document.getElementById('email');
    const password = document.getElementById('password');

    // orra los mensajes de error del intento anterior
    document.getElementById('error-email').textContent    = '';
    document.getElementById('error-password').textContent = '';

    let valido = true;

    // verifica que el correo no esté vacío y tenga el símbolo @
    if (!email.value.trim() || !email.value.includes('@')) {
      document.getElementById('error-email').textContent = 'Ingresa un correo válido.';
      valido = false;
    }

    // vrifica que la contraseña no este vacía
    if (!password.value.trim()) {
      document.getElementById('error-password').textContent = 'La contraseña es obligatoria.';
      valido = false;
    }

    // si los campos son válidos redirige al dashboard
    // cuando se conecte React y Express, aquí se valida contra la API
    // y según el rol del usuario (ciudadano o admin) redirige a la página correcta
    if (valido) window.location.href = 'pages/dashboard.html';
  });

});