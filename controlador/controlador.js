let vista = new Vista();

/*Funcion que muestra la oantalla principal apenas carga la pagina*/

document.body.onload = function () {
  vista.mostrarPlantilla("paginaPrincipal", "contenido");
};

/*Funciones para mostrar las plantillas en el main*/

function volverInicio() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("paginaPrincipal", "contenido");
}

function mostrarDetalleEvento() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("eventoDetallado", "contenido");
}


function mostrarMasEventos() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("MasEventos", "contenido");
}

function mostrarSeleccionRol() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("pantallaPrincipalCuadroSeleccionRol", "contenido");
}

function mostrarPantallaBusqueda() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("busqueda", "contenido");
}

function mostrarTerminosCondiciones() {
    vista.limpiarContenido("contenido");
    vista.mostrarPlantilla("pantallaTerminosYCondiciones", "contenido");
  }

  function mostrarBusquedaRelacionada() {
    vista.limpiarContenido("contenido");
    vista.mostrarPlantilla("busquedaRelacionada", "contenido");
  }

/* Funcion que identifica cuando se presiona ENTER en el input de busqueda */

function handleKeyPress(event) {
  if (event.key === "Enter") {
    mostrarBusquedaRelacionada();
  }
}

/* -------------------------------------------modales-----------------------------------------------*/

/*variable que representa si el usuario inicio sesion con TRUE o no con FALSE*/
let sesion = false;

/*Cambia el estado de la sesion al contrario del que estaba*/
function sesionIniciada() {
  sesion = !sesion;
}

/*Abre el modal lateral correspondiente a si se ha iniciado sesion o no*/
function mostrarModalLateral() {
  if (sesion == false) {
    vista.abrirModal("modalLateral");
  } else {
    vista.abrirModal("modalLateralSesionIniciada");
  }
}

function mostrarModal() {
  vista.abrirModal("modalUrl");
}
function cerrarModal() {
  vista.cerrarModal("modalUrl");
}

function cerrarModalLateral() {
  vista.cerrarModal("modalLateral");
}

function cerrarModalLateralSesionIniciada() {
  vista.cerrarModal("modalLateralSesionIniciada");
}

function mostrarModalRol() {
  vista.abrirModal("roles");
}
function cerrarModalRol() {
  vista.cerrarModal("roles");
}

function mostrarModalLogin() {
  vista.abrirModal("modalLogin");
}
function cerrarModalLogin() {
  vista.cerrarModal("modalLogin");
}

function mostrarModalCrearCuenta() {
  vista.abrirModal("modalCrearCuenta");
}
function cerrarModalCrearCuenta() {
  vista.cerrarModal("modalCrearCuenta");
}
