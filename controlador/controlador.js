let vista = new Vista();

/*Funcion que muestra la oantalla principal apenas carga la pagina*/

document.body.onload = function () {
  vista.mostrarPlantilla("paginaPrincipal", "contenido");
};

function volverInicio() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("paginaPrincipal", "contenido");
}

function mostrarDetalleEvento(){
    vista.limpiarContenido('contenido');
    vista.mostrarPlantilla('eventoDetallado', 'contenido');
}

function mostrarPantallaBusqueda() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("busqueda", "contenido");
}

/* Funcion que identifica cuando se presiona ENTER en el input de busqueda */

function handleKeyPress(event) {
  if (event.key === "Enter") {
    mostrarBusquedaRelacionada();
  }
}

/* mostrar plantilla busqueda relacionada */

function mostrarBusquedaRelacionada() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("busquedaRelacionada", "contenido");
}

function mostrarModal() {
  vista.abrirModal("modalUrl");
}
function cerrarModal() {
  vista.cerrarModal("modalUrl");
}

function mostrarModalLateral() {
  vista.abrirModal("modalLateral");
}

function cerrarModalLateral() {
  vista.cerrarModal("modalLateral");
}
