document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // hardcodear
    const validUsername = 'usuarioServi';
    const validPassword = 'contraseñaHogar';

if (username === validUsername && password === validPassword) {
    alert('Login correcto');
} else {
    alert('Usuario o contraseña incorrectos');
} 
});