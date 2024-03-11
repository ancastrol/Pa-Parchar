let vista = null;

window.onload = function(){
    vista = new Vista();
}


function mostrarModal(){
    vista.abrirModal();
}

function cerrarModal(){
    vista.cerrarModal();
}