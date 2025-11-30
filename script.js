// Datos del calendario de adviento 2025
const tareasAdviento = {
    '2025-11-30': {
        dia: 30,
        mes: 'noviembre',
        tarea: 'REZA UN AVEMARÍA DESPACIO Y DE CORAZÓN'
    },
    '2025-12-01': {
        dia: 1,
        mes: 'diciembre',
        tarea: 'TEN UN GESTO DE AMOR CON ALGUIEN QUE ESTÁ NECESITADO'
    },
    '2025-12-02': {
        dia: 2,
        mes: 'diciembre',
        tarea: 'REGALA SONRISAS'
    },
    '2025-12-03': {
        dia: 3,
        mes: 'diciembre',
        tarea: 'DA GRACIAS A DIOS ANTES DE COMER'
    },
    '2025-12-04': {
        dia: 4,
        mes: 'diciembre',
        tarea: 'REPASA POR UNOS MINUTOS LOS DIEZ MANDAMIENTOS'
    },
    '2025-12-05': {
        dia: 5,
        mes: 'diciembre',
        tarea: 'DA LAS GRACIAS A QUIEN TE HACE ALGO BUENO'
    },
    '2025-12-06': {
        dia: 6,
        mes: 'diciembre',
        tarea: 'INTENTA NO CRITICAR'
    },
    '2025-12-07': {
        dia: 7,
        mes: 'diciembre',
        tarea: 'PIDE A JESÚS QUE VENGA SU ESPÍRITU SANTO A TODOS LOS CORAZONES'
    },
    '2025-12-08': {
        dia: 8,
        mes: 'diciembre',
        tarea: 'LEE CON ATENCIÓN EL EVANGELIO DE LA ANUNCIACIÓN (Lc 1, 26-38)'
    },
    '2025-12-09': {
        dia: 9,
        mes: 'diciembre',
        tarea: 'AHORRA UN POQUITO DE DINERO PARA LA COLECTA DEL DOMINGO 14, EN AYUDA A LAS FAMILIAS DE LA CAÑADA'
    },
    '2025-12-10': {
        dia: 10,
        mes: 'diciembre',
        tarea: 'PIDE AYUDA EN UN PROBLEMA QUE TENGAS'
    },
    '2025-12-11': {
        dia: 11,
        mes: 'diciembre',
        tarea: 'DI "TE QUIERO" A LAS PERSONAS QUE AMAS'
    },
    '2025-12-12': {
        dia: 12,
        mes: 'diciembre',
        tarea: 'BUSCA UN DÍA EN EL QUE VAS A CONFESARTE ANTES DE NAVIDAD'
    },
    '2025-12-13': {
        dia: 13,
        mes: 'diciembre',
        tarea: 'REZA UN AVEMARÍA POR LOS QUE HOY SE CONFIRMAN EN LA PARROQUIA'
    },
    '2025-12-14': {
        dia: 14,
        mes: 'diciembre',
        tarea: 'ESCRIBE CON TU FAMILIA UN MENSAJE A JESÚS PARA PONER EN EL ÁRBOL DE NAVIDAD DE LA PARROQUIA'
    },
    '2025-12-15': {
        dia: 15,
        mes: 'diciembre',
        tarea: 'PREGUNTA A ALGUIEN QUERIDO CÓMO ESTÁ'
    },
    '2025-12-16': {
        dia: 16,
        mes: 'diciembre',
        tarea: 'PIENSA EN ALGUNA PERSONA QUE TIENES QUE PEDIR PERDÓN O PERDONAR'
    },
    '2025-12-17': {
        dia: 17,
        mes: 'diciembre',
        tarea: 'REPASA UN VILLANCICO'
    },
    '2025-12-18': {
        dia: 18,
        mes: 'diciembre',
        tarea: 'REGALA SONRISAS'
    },
    '2025-12-19': {
        dia: 19,
        mes: 'diciembre',
        tarea: 'TEN UN GESTO BONITO CON ALGUIEN QUE NO TE CAE BIEN'
    },
    '2025-12-20': {
        dia: 20,
        mes: 'diciembre',
        tarea: 'TEN UN GESTO DE AMOR CON ALGUIEN NECESITADO'
    },
    '2025-12-21': {
        dia: 21,
        mes: 'diciembre',
        tarea: 'LLEVA A LA PARROQUIA LA IMAGEN DEL NIÑO JESÚS PARA QUE EL SACERDOTE LO BENDIGA'
    },
    '2025-12-22': {
        dia: 22,
        mes: 'diciembre',
        tarea: 'REGALA SONRISAS'
    },
    '2025-12-23': {
        dia: 23,
        mes: 'diciembre',
        tarea: 'ADORNA CON ALGO ESPECIAL EL BELÉN DE CASA'
    },
    '2025-12-24': {
        dia: 24,
        mes: 'diciembre',
        tarea: 'REZA UN AVEMARÍA DE TODO CORAZÓN'
    },
    '2025-12-25': {
        dia: 25,
        mes: 'diciembre',
        tarea: 'DI A TODOS: ¡FELIZ NAVIDAD!'
    }
};

// Variables globales
let diaSeleccionado = null;
const fechaInicio = new Date('2025-11-30');
const fechaFin = new Date('2025-12-25');

// Función para formatear fecha a YYYY-MM-DD
function formatearFecha(fecha) {
    const año = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const dia = String(fecha.getDate()).padStart(2, '0');
    return `${año}-${mes}-${dia}`;
}

// Función para obtener la fecha actual (solo fecha, sin hora)
function obtenerFechaHoy() {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    return hoy;
}

// Función para mostrar la tarea de un día
function mostrarTarea(fecha) {
    const fechaStr = formatearFecha(fecha);
    const tareaInfo = tareasAdviento[fechaStr];

    const fechaActualElement = document.getElementById('fecha-actual');
    const tareaDiaElement = document.getElementById('tarea-dia');

    if (tareaInfo) {
        const nombreDia = fecha.toLocaleDateString('es-ES', { weekday: 'long' });
        fechaActualElement.textContent = `${nombreDia.charAt(0).toUpperCase() + nombreDia.slice(1)}, ${tareaInfo.dia} de ${tareaInfo.mes}`;
        tareaDiaElement.innerHTML = `<p>${tareaInfo.tarea}</p>`;
    } else {
        fechaActualElement.textContent = 'Día no disponible';
        tareaDiaElement.innerHTML = '<p>Este día no forma parte del calendario de Adviento.</p>';
    }

    diaSeleccionado = fecha;
    actualizarBotones();
    resaltarDiaEnCalendario(fecha);
}

// Función para actualizar el estado de los botones de navegación
function actualizarBotones() {
    const btnAnterior = document.getElementById('btn-anterior');
    const btnSiguiente = document.getElementById('btn-siguiente');

    const fechaAnterior = new Date(diaSeleccionado);
    fechaAnterior.setDate(fechaAnterior.getDate() - 1);

    const fechaSiguiente = new Date(diaSeleccionado);
    fechaSiguiente.setDate(fechaSiguiente.getDate() + 1);

    btnAnterior.disabled = fechaAnterior < fechaInicio;
    btnSiguiente.disabled = fechaSiguiente > fechaFin;
}

// Función para resaltar el día seleccionado en el calendario
function resaltarDiaEnCalendario(fecha) {
    const todasLasCasillas = document.querySelectorAll('.day-box');
    todasLasCasillas.forEach(casilla => {
        casilla.style.border = '';
        casilla.style.boxShadow = '';
        casilla.classList.remove('selected');
    });

    const fechaStr = formatearFecha(fecha);
    const casillaSeleccionada = document.querySelector(`[data-fecha="${fechaStr}"]`);
    if (casillaSeleccionada) {
        casillaSeleccionada.classList.add('selected');
        casillaSeleccionada.style.border = '5px solid #FFD700';
        casillaSeleccionada.style.boxShadow = '0 0 25px rgba(255, 215, 0, 0.9), 0 0 40px rgba(255, 215, 0, 0.5)';
    }
}

// Función para generar el calendario visual
function generarCalendario() {
    const calendarioGrid = document.getElementById('calendario-grid');
    const hoy = obtenerFechaHoy();

    let fechaActual = new Date(fechaInicio);

    while (fechaActual <= fechaFin) {
        const fechaStr = formatearFecha(fechaActual);
        const tareaInfo = tareasAdviento[fechaStr];

        if (tareaInfo) {
            const dayBox = document.createElement('div');
            dayBox.className = 'day-box';
            dayBox.setAttribute('data-fecha', fechaStr);

            // Determinar si es pasado, presente o futuro
            if (fechaActual < hoy) {
                dayBox.classList.add('past');
            } else if (fechaActual.getTime() === hoy.getTime()) {
                dayBox.classList.add('today');
            } else {
                dayBox.classList.add('future');
            }

            dayBox.innerHTML = `
                <div class="day-number">${tareaInfo.dia}</div>
                <div class="day-date">${tareaInfo.mes}</div>
            `;

            const fechaCopia = new Date(fechaActual);
            dayBox.addEventListener('click', () => mostrarTarea(fechaCopia));

            calendarioGrid.appendChild(dayBox);
        }

        fechaActual.setDate(fechaActual.getDate() + 1);
    }
}

// Event listeners para los botones de navegación
document.getElementById('btn-anterior').addEventListener('click', () => {
    const fechaAnterior = new Date(diaSeleccionado);
    fechaAnterior.setDate(fechaAnterior.getDate() - 1);
    if (fechaAnterior >= fechaInicio) {
        mostrarTarea(fechaAnterior);
    }
});

document.getElementById('btn-siguiente').addEventListener('click', () => {
    const fechaSiguiente = new Date(diaSeleccionado);
    fechaSiguiente.setDate(fechaSiguiente.getDate() + 1);
    if (fechaSiguiente <= fechaFin) {
        mostrarTarea(fechaSiguiente);
    }
});

document.getElementById('btn-hoy').addEventListener('click', () => {
    const hoy = obtenerFechaHoy();
    if (hoy >= fechaInicio && hoy <= fechaFin) {
        mostrarTarea(hoy);
    } else {
        mostrarTarea(fechaInicio);
    }
});

// Inicialización al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    generarCalendario();

    const hoy = obtenerFechaHoy();

    // Si estamos dentro del período de adviento, mostrar el día actual
    // Si no, mostrar el primer día
    if (hoy >= fechaInicio && hoy <= fechaFin) {
        mostrarTarea(hoy);
    } else if (hoy < fechaInicio) {
        mostrarTarea(fechaInicio);
    } else {
        mostrarTarea(fechaFin);
    }
});
