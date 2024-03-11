let vista = null;

window.onload = function(){
    vista = new Vista();
}


function limpiarVista(){
    alert("SI funciona")
}

function mostrarModal(){
    vista.abrirModal(document.querySelector('modalUrl'));
}

function cerrarModal(){
    vista.cerrarModal('modalUrl');
}