// Agregar el evento submit al formulario
document.getElementById('form').addEventListener('submit', function (event) {
    // Evitar el envío predeterminado del formulario
    event.preventDefault();

    // Obtener los valores ingresados en los campos
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Credenciales válidas (hardcodeadas)
    const validEmail = 'usuarioServi@gmail.com';
    const validPassword = 'hogar';

    //validan las credenciales
    if (email === validEmail && password === validPassword) {
        // Si las credenciales coinciden, redirigir a home.html
        window.location.href = 'servicios.html';
        alert('Login correcto');
    } else {
    alert('Usuario o contraseña incorrectos');
    } 
});

