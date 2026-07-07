/*controla las acciones básicas de la vista de perfil.*/

document.addEventListener("DOMContentLoaded", () => {

  const formulario = document.getElementById("form-perfil");
  const btnLogout = document.getElementById("btn-logout");

  // vuelve al inicio cuando el usuario cierra la sesión
  btnLogout.addEventListener("click", () => {
    window.location.href = "../index.html";
  });

  // controla el envío del formulario
  formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    // obtiene todos los campos del formulario
    const datos = {
      celular: document.getElementById("celular").value.trim(),
      direccion: document.getElementById("direccion").value.trim(),
      passwordActual: document.getElementById("password-actual").value.trim(),
      passwordNueva: document.getElementById("password-nueva").value.trim(),
      passwordConfirmar: document.getElementById("password-confirmar").value.trim()
    };

    // verifica que al menos un campo tenga información
    const hayCambios = Object.values(datos).some(valor => valor !== "");

    if (!hayCambios) {
      alert("Completa al menos un campo para actualizar.");
      return;
    }

    // aquí después se enviarán los datos al backend con fetch()
    alert("Perfil actualizado correctamente.");

  });

});