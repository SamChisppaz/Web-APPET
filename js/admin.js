/*controla las acciones básicas del panel del administrador*/

document.addEventListener("DOMContentLoaded", () => {

  const btnLogout = document.getElementById("btn-logout");
  const filtroJornada = document.getElementById("filtro-jornada");

  // vuelve al inicio cuando el administrador cierra la sesión
  btnLogout.addEventListener("click", () => {
    window.location.href = "../index.html";
  });

  // filtra las solicitudes según la jornada seleccionada
  filtroJornada.addEventListener("change", (event) => {

    const valor = event.target.value;
    const filas = document.querySelectorAll("#cuerpo-tabla tr");

    filas.forEach(fila => {

      const jornada = fila.cells[3].textContent.toLowerCase();

      if (valor === "todas" || jornada.includes(valor)) {
        fila.style.display = "";
      } else {
        fila.style.display = "none";
      }

    });

  });

});