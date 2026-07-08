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
        if (this.email === email && this.password === password) {
            alert("Login correcto");
        } else {
            alert("Correo o contraseña incorrectos");
        }
    }
    register() {

        
    }
}
/* 
    Captura de eventos -> lo hice para tomar del form el correo y la clave. 'loginForm'
    Despues evito que el formulario recargue para asi poder mostrar el alert si logra ingresar o no
    Por ultimo capturo los datos, creo un nuevo objeto y le doy los datos de correo y contraseña
    invocando el metodo login para su respectiva validacion.
*/
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const correoI = document.getElementById("email").value;
    const psdI = document.getElementById("psd").value;
    const nuevoUsuario = new User(correoI, psdI);
    nuevoUsuario.login(correoI, psdI);
});

