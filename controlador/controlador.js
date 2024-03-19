let vista = new Vista;

function volverInicio(){
    vista.limpiarContenido('contenido');
    vista.mostrarPlantilla('paginaPrincipal', 'contenido');
}

function mostrarDetalleEvento(){
    vista.limpiarContenido('contenido');
    vista.mostrarPlantilla('eventoDetallado', 'contenido');
}

function mostrarModal(){
    vista.abrirModal('modalUrl');
}

function cerrarModal(){
    vista.cerrarModal('modalUrl');
}