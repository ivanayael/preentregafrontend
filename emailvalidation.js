// Obtener el formulario y el campo de email
const formulario = document.getElementById('formulario');
const email = document.getElementById('_replyto');
const mensajeError = document.getElementById('mensaje-error');

// Evento submit del formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener el valor del campo de email
    const valorEmail = email.value.trim();

    // Expresión regular para validar el email
    const expresionRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validar el email
    if (expresionRegular.test(valorEmail)) {
        // El email es válido
        mensajeError.textContent = '';
        formulario.reset();
        console.log('Email válido');
    } else {
        // El email no es válido
        mensajeError.textContent = 'Email no válido';
    }
});