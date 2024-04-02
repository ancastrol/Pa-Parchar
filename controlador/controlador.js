let vista = new Vista();

/*Funcion que muestra la oantalla principal apenas carga la pagina*/

document.body.onload = function () {
  vista.mostrarPlantilla("paginaPrincipal", "contenido");
};

function volverInicio() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("paginaPrincipal", "contenido");
}

pantallaPrincipalConcuadroSeleccionRol

function mostrarDetalleEvento(){
    vista.limpiarContenido('contenido');
    vista.mostrarPlantilla('eventoDetallado', 'contenido');
}

function mostrarSeleccionRol(){
    vista.limpiarContenido('contenido');
    vista.mostrarPlantilla('pantallaPrincipalCuadroSeleccionRol', 'contenido');
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


/* modales */

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

function mostrarModalRol() {
    vista.abrirModal("roles");
  }
  function cerrarModalRol() {
    vista.cerrarModal("roles");
  }