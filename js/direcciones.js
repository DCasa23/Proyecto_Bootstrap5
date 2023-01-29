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

$("#crearinicio").click(function(e) {
    e.preventDefault();
    window.location.href = 'html/crearusuario.html';
})
$("#volveriniciarsesion").click(function(e) {
    e.preventDefault();
    window.location.href = '../index.html';
})
$("#crearusuario").click(function(e) {
    e.preventDefault();
    window.location.href = 'principal.html';
})
$("#preguntascrear").click(function(e) {
    e.preventDefault();
    window.location.href = 'crearcortas.html';
})
$("#desarrollocrear").click(function(e) {
    e.preventDefault();
    window.location.href = 'creardesarrollo.html';
})
$("#testcrear").click(function(e) {
    e.preventDefault();
    window.location.href = 'creartest.html';
})
$("#tarjetascrear").click(function(e) {
    e.preventDefault();
    window.location.href = 'creartarjeta.html';
})

$("#proyectoscortas").click(function(e) {
    e.preventDefault();
    window.location.href = 'preguntas.html';
})
$("#proyectostest").click(function(e) {
    e.preventDefault();
    window.location.href = 'test.html';
})
$("#proyectosdesarrollo").click(function(e) {
    e.preventDefault();
    window.location.href = 'desarrollo.html';
})
$("#proyectostarjetas").click(function(e) {
    e.preventDefault();
    window.location.href = 'tarjetas.html';
})
$("#botonusuario").click(function(e) {
    e.preventDefault();
    window.location.href = 'perfil.html';
})
$("#proyectosboton").click(function(e) {
    e.preventDefault();
    window.location.href = 'principal.html';
})