
const nombre = document.getElementById("nombre")
const apellidos = document.getElementById("apellidos")
const correo = document.getElementById("correo")
const telefono = document.getElementById("telefono")
const usuario = document.getElementById("usuario")
const fecha = document.getElementById("ingreso")
const form = document.getElementById("renovacion")
const password = document.getElementById("password")
const ciudad = document.getElementById("optionciudad")
const rol = document.getElementById("optionrol")
const pago = document.getElementById("optionpago")
const plan = document.getElementById("optionplan")

console.log(rol);



class Usuario {

    constructor(nombreUsuario, usuarioUsuario, passwordUsuario, fechaEntrada, fechaRenueva, apellidosUsuario, correoUsuario, telefonoUsuario, ciudadUsuario, planUsuario, rolUsuario, pagoUsuario) {
        this.nombreUsuario = nombreUsuario;
        this.usuarioUsuario = usuarioUsuario;
        this.passwordUsuario = passwordUsuario;
        this.fechaEntrada = fechaEntrada;
        this.fechaRenueva = fechaRenueva;
        this.correoUsuario = correoUsuario;
        this.apellidosUsuario = apellidosUsuario;
        this.telefonoUsuario = telefonoUsuario;
        this.ciudadUsuario = ciudadUsuario;
        this.planUsuario = planUsuario;
        this.pagoUsuario = pagoUsuario;
        this.rolUsuario = rolUsuario;

    }



}



datosTotales = new Usuario(nombre.placeholder, usuario.placeholder, password.placeholder, ingreso.placeholder, renovacion.placeholder, apellidos.placeholder, correo.placeholder, telefono.placeholder, ciudad.value, plan.value, rol.value, pago.value);
const myJSON = JSON.stringify(datosTotales);
const ObjCliente = JSON.parse(myJSON);
localStorage.setItem('nombre', ObjCliente.nombreUsuario);
localStorage.setItem('usuario', ObjCliente.usuarioUsuario);
localStorage.setItem('password', ObjCliente.passwordUsuario);
localStorage.setItem('apellidos', ObjCliente.apellidosUsuario);
localStorage.setItem('correo', ObjCliente.correoUsuario);
localStorage.setItem('telefono', ObjCliente.telefonoUsuario);
localStorage.setItem('ingreso', ObjCliente.fechaEntrada);
localStorage.setItem('renovacion', ObjCliente.fechaRenueva);
localStorage.setItem('plan', ObjCliente.planUsuario);
localStorage.setItem('ciudad', ObjCliente.ciudadUsuario);
localStorage.setItem('pago', ObjCliente.pagoUsuario);
localStorage.setItem('rol', ObjCliente.rolUsuario);



