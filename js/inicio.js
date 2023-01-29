//Observamos el usuario y contraseña guardado, solo se conservan para facilitar la tarea de correción de la tarea.
console.log("El usuario: "+localStorage.getItem('usuario'));
console.log("La contraseña: "+localStorage.getItem('password'));

//Si no se introduce un usuario conocido, se observará una ventana emergente para acceder

$("#BotonInicio").click((function (e) {
    e.preventDefault();
    if(document.getElementById("usuarioform").value!=localStorage.getItem('usuario') || document.getElementById("passwordform").value!=localStorage.getItem('password')){
    $("#mensajeCrear").removeClass("d-none");
    $("#mensajeCrear").addClass("d-block");
    console.log("El usuario: "+localStorage.getItem('usuario'));
    }else{
        window.location.href = 'html/perfil.html';
    }}))

//Enlace para crear usuario
/*
$("#crearinicio").click(function(e) {
    e.preventDefault();
    window.location.href = 'html/crearusuario.html';
})*/