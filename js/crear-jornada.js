/* controla las acciones básicas de la vista para crear una jornada.*/

document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("form-jornada");
    const btnLogout = document.getElementById("btn-logout");

    // vuelve al inicio cuando el administrador cierra la sesión
    btnLogout.addEventListener("click", () => {
        window.location.href = "../index.html";
    });

    // por ahora solo evita el envío del formulario
    formulario.addEventListener("submit", (event) => {

        event.preventDefault();

        // aquí se enviarán los datos al backend con fetch()
        alert("Jornada creada correctamente.");

    });

});