let vista = new Vista;

function volverInicio(){
    vista.limpiarContenido('contenido');
    vista.mostrarPlantilla('paginaPrincipal', 'contenido');
}

function mostrarDetalleEvento(){
    vista.limpiarContenido('contenido');
    vista.mostrarPlantilla('eventoDetallado', 'contenido');
}

function mostrarPantallaBusqueda(){
    vista.limpiarContenido('contenido');
    vista.mostrarPlantilla('busqueda', 'contenido');
}

function mostrarModal(){
    vista.abrirModal();
}

function cerrarModal(){
    vista.cerrarModal();
}