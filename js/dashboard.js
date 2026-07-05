//Funcionalidad del dashboard//

document.addEventListener('DOMContentLoaded', () => {

  // Al hacer clic en cerrar sesión, vuelve al login, Cuando haya backend aquí se cerrará la sesión real antes de redirigir
  document.getElementById('btn-logout').addEventListener('click', () => {
    window.location.href = '../index.html';
  });

});