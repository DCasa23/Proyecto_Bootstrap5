const nombre = document.getElementById("nombre")
const apellidos = document.getElementById("apellidos")
const correo = document.getElementById("correo")
const telefono = document.getElementById("telefo")
const dni = document.getElementById("dniform")
const usuario = document.getElementById("usuario")
const fecha = document.getElementById("ingreso")
const form = document.getElementById("renovacion")
const password = document.getElementById("password")
const ciudad = document.getElementById("ciudad")
const rol = document.getElementById("rol")
const pago = document.getElementById("pago")
const plan = document.getElementById("plan")





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



datosTotales = new Usuario(nombre.placeholder, usuario.placeholder, password.placeholder, ingreso.placeholder,renovacion.placeholder, apellidos.value, correo.value, telefono.value,ciudad.option, plan.option, rol.option,  pago.option);
        const myJSON = JSON.stringify(datosTotales);
        const ObjCliente = JSON.parse(myJSON);
        localStorage.setItem('nombre', ObjCliente.nombreUsuario);
        localStorage.setItem('ingreso', ObjCliente.fechaUsuario);
        localStorage.setItem('usuario', ObjCliente.usuarioUsuario);
        localStorage.setItem('password', ObjCliente.passwordUsuario);
        localStorage.setItem('apellidos', ObjCliente.apellidosUsuario);
        localStorage.setItem('correo', ObjCliente.correoUsuario);
        localStorage.setItem('DNI', ObjCliente.DNIUsuario);
        localStorage.setItem('telefono', ObjCliente.telefonoUsuario);
        localStorage.setItem('direccion', ObjCliente.direccionUsuario);
        localStorage.setItem('CP', ObjCliente.CPUsuario);
        localStorage.setItem('ciudad', ObjCliente.ciudadUsuario);
        localStorage.setItem('pais', ObjCliente.paisUsuario);
        localStorage.setItem('SWIFT', ObjCliente.SWIFTUsuario);
        localStorage.setItem('IBAN', ObjCliente.IBANUsuario);
    