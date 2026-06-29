/*
  dashboard.js
  Proyecto: APPET
  Funcionalidad del dashboard
*/

document.addEventListener('DOMContentLoaded', () => {

  /* Cerrar sesión: vuelve al login.
     Cuando haya backend, aquí se llamará al endpoint
     que invalide la sesión antes de redirigir. */
  document.getElementById('btn-logout').addEventListener('click', () => {
    window.location.href = '../index.html';
  });

});