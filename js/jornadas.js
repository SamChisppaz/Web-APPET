// muestra las jornadas disponibles según el tipo seleccionado

document.addEventListener('DOMContentLoaded', () => {

  const tipo = new URLSearchParams(window.location.search).get('tipo') || 'vacunacion';

  const titulo = document.getElementById('titulo-pagina');
  const contenedor = document.getElementById('lista-jornadas');
  const btnLogout = document.getElementById('btn-logout');

  // datos de ejemplo, después se obtendrán desde el backend
  const datos = {
    vacunacion: [
      {
        dia: '25',
        mes: 'Marzo',
        lugar: 'Parque principal',
        hora: '10:00 AM - 5:00 PM',
        disponible: true
      },
      {
        dia: '19',
        mes: 'Mayo',
        lugar: 'Parque principal',
        hora: '9:00 AM - 4:00 PM',
        disponible: false
      },
      {
        dia: '12',
        mes: 'Octubre',
        lugar: 'Parque principal',
        hora: '8:00 AM - 3:00 PM',
        disponible: true
      }
    ],

    esterilizacion: [
      {
        dia: '10',
        mes: 'Abril',
        lugar: 'Centro de salud',
        hora: '8:00 AM - 2:00 PM',
        disponible: true
      },
      {
        dia: '22',
        mes: 'Junio',
        lugar: 'Centro de salud',
        hora: '9:00 AM - 3:00 PM',
        disponible: false
      }
    ]
  };

  // cambia el título según la jornada seleccionada
  titulo.textContent =
    tipo === 'esterilizacion'
      ? 'Jornadas de esterilización'
      : 'Jornadas de vacunación';

  const jornadas = datos[tipo] || [];

  // muestra un mensaje si no existen jornadas disponibles
  if (jornadas.length === 0) {

    contenedor.innerHTML = `
      <div class="sin-jornadas">
        <i class="fa-solid fa-calendar-xmark"></i>
        <p>No hay jornadas disponibles en este momento.</p>
      </div>
    `;

    return;
  }

  // crea una tarjeta para cada jornada
  jornadas.forEach(jornada => {

    const tarjeta = document.createElement('div');

    tarjeta.className = `tarjeta-jornada ${jornada.disponible ? '' : 'no-disponible'}`;

    tarjeta.innerHTML = `
      <div class="fecha-box">
        <span class="fecha-dia">${jornada.dia}</span>
        <span class="fecha-mes">${jornada.mes}</span>
      </div>

      <div class="info-jornada">

        <div class="ciudad-fila">
          <span class="ciudad">Tunja</span>

          <span class="badge ${jornada.disponible ? 'badge-disponible' : 'badge-agotado'}">
            ${jornada.disponible ? 'Disponible' : 'Agotado'}
          </span>
        </div>

        <div class="detalle-fila">
          <span><i class="fa-solid fa-location-dot"></i> ${jornada.lugar}</span>
          <span><i class="fa-regular fa-clock"></i> ${jornada.hora}</span>
        </div>

      </div>

      <button
        class="btn-solicitud ${jornada.disponible ? 'activo' : 'inactivo'}"
        ${jornada.disponible ? '' : 'disabled'}>

        ${jornada.disponible ? 'Enviar solicitud' : 'No disponible'}
        <i class="fa-solid fa-circle-arrow-right"></i>

      </button>
    `;

    // simula el envío de una solicitud
    if (jornada.disponible) {

      const boton = tarjeta.querySelector('.btn-solicitud');

      boton.addEventListener('click', () => {

        const numero = Math.floor(Math.random() * 900) + 100;

        alert(`¡Solicitud enviada con éxito!\nNúmero de solicitud: #${numero}`);

      });

    }

    contenedor.appendChild(tarjeta);

  });

  // vuelve al inicio cuando el usuario cierra la sesión
  btnLogout.addEventListener('click', () => {
    window.location.href = '../index.html';
  });

});