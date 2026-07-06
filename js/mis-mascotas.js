// funcionalidad de la página de mis mascotas

document.addEventListener('DOMContentLoaded', () => {

  // al hacer clic en cerrar sesión, vuelve al login
  document.getElementById('btn-logout').addEventListener('click', () => {
    window.location.href = '../index.html';
  });

  // ide confirmación antes de eliminar una mascota
  // xuando se conecte React y Express, aquí se hará un DELETE a la API
  document.querySelectorAll('.btn-eliminar').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm('¿Seguro que quieres eliminar esta mascota?')) {
        btn.closest('.tarjeta-mascota').remove();
      }
    });
  });

});