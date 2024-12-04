// Obtén los turnos desde el Local Storage
const turnos = JSON.parse(localStorage.getItem('turnos')) || [];

// Obtén el contenedor donde se mostrarán los turnos
const tableBody = document.getElementById('turnosTableBody');

// Genera las filas de la tabla
turnos.forEach((turno) => {
    const row = document.createElement('tr');

    // Crea las celdas para cada propiedad del turno
    row.innerHTML = `
    <td>${turno.servicio}</td>
    <td>${turno.direccion}</td>
    <td>${turno.fecha}</td>
    <td>${turno.medioPago}</td>
    `;

    // Agrega la fila al cuerpo de la tabla
    tableBody.appendChild(row);
});