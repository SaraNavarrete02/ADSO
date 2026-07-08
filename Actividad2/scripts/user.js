class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    login(email, password) {
        const usuario = {
            email: "daniel@gmail.com",
            password: "1234"
        };
        if (usuario.email == email && usuario.password === password) {
            alert("ingreso correcto");
        } else {
            alert("Correo o contraseña incorrectos");
        }
    }
    register(names, lastNames, city, dateOfBirth, email, password) {
        const nUser = {
            names: names,
            lastNames: lastNames,
            city: city,
            dateOfBirth: dateOfBirth,
            email: email,
            password: password
        }
        alert('Hola ' + nUser.names + ' ' + nUser.lastNames + ', tu registro fue exitoso, tu correo es: ' + nUser.email + ' tu ciudad es: ' + nUser.city + ' y tu fecha de nacimiento es: ' + nUser.dateOfBirth);
    }
}
/* 
    Captura de eventos -> lo hice para tomar del form el correo y la clave. 'loginForm'
    Despues evito que el formulario recargue para asi poder mostrar el alert si logra ingresar o no
    Por ultimo capturo los datos, creo un nuevo objeto y le doy los datos de correo y contraseña
    invocando el metodo login para su respectiva validacion.
*/
//Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const correoI = document.getElementById("email").value;
        const psdI = document.getElementById("psd").value;
        const nuevoUsuario = new User(correoI, psdI);
        nuevoUsuario.login(correoI, psdI);
    });
}

//Register
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const names = document.getElementById("names").value;
        const lastNames = document.getElementById("lastNames").value;
        const city = document.getElementById("city").value;
        const dateOfBirth = document.getElementById("dateOfBirth").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("psd").value;
        const nuevoUsuario = new User(email, password);
        nuevoUsuario.register(names, lastNames, city, dateOfBirth, email, password);
    });
}