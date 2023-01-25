function leerTodo(x){
    var etiquetas=document.getElementsByTagName("div");
    for (var i = 0; i<etiquetas.length; i++) {
        
            etiquetas[i].style.textOverflow = "ellipsis";    
       console.log("ENTRASTE")
    }
    x.lastChild.style.textOverflow = "clip";
   /* x.lastChild.style.textOverflow = "ellipsis";*/
    console.log("les estas dando")
}
function cambiarleerTodo(x){
    var etiquetas=document.getElementsByTagName("div");
    for (var i = 0; i<etiquetas.length; i++) {
        
            etiquetas[i].style.textOverflow = "clip";    
       console.log("ENTRAST2E")
    }
    x.lastChild.style.textOverflow = "ellipsis";
   /* x.lastChild.style.textOverflow = "ellipsis";*/
    console.log("les estas2 dando")
}