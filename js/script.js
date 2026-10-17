
/* Función para el formulario de TechCursos */

// Buscamos el formulario en el HTML
const formulario = document.getElementById("formulario-contacto");

// Buscamos el lugar donde aparecerá el mensaje
const mensaje = document.getElementById("mensaje-formulario");

// Detectamos cuando se envía el formulario
formulario.addEventListener("submit", function(evento) {

    // Evitamos que la página se recargue
    evento.preventDefault();

    // Mostramos un mensaje al usuario
    mensaje.textContent = "¡Gracias! Tu solicitud ha sido registrada.";

    // Limpiamos los campos del formulario
    formulario.reset();

});


/* Filtro para mostrar los cursos */

const botonesFiltro = document.querySelectorAll(".filtro");
const tarjetasCurso = document.querySelectorAll(".tarjeta-curso");

botonesFiltro.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const categoria = boton.dataset.filtro;

        tarjetasCurso.forEach(function(tarjeta) {

            if (categoria === "todos" ||
                tarjeta.dataset.categoria === categoria) {

                tarjeta.hidden = false;

            } else {

                tarjeta.hidden = true;

            }

        });

        // Marcamos el botón seleccionado
        botonesFiltro.forEach(function(otroBoton) {
            otroBoton.classList.remove("activo");
        });

        boton.classList.add("activo");

    });

});
