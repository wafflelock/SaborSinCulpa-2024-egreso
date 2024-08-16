document.getElementById('registerForm').addEventListener('submit', function(event) {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value;

    var error = '';
    if (username.length < 8) {
        error += 'El nombre de usuario debe tener al menos 8 caracteres.\n';
    }
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[.!@#$%^&*])[A-Za-z\d!@#$%.^&*]{8,}$/)) {
        error += 'La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales.\n';
    }

    if (error !== '') {
        event.preventDefault();
        document.getElementById('message').innerHTML = '<div id="error">' + error + '</div>';
    }
});

// Mostrar u ocultar la contraseña
document.getElementById('showPassword').addEventListener('change', function() {
    var passwordField = document.getElementById('password');
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});
