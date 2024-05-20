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

function mostrarIngresarEvento() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("ingresarEvento", "contenido");
}

function mostrarBusquedaRelacionada() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("busquedaRelacionada", "contenido");
}

function mostrarPantallaBusqueda() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("busqueda", "contenido");
}

function mostrarPerfil() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("pantallaPerfil", "contenido");
}

function mostrarCalendario() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("calendarioTemplate", "contenido");
}

function mostrarCrearEvento() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("ingresarEvento", "contenido");
}

function mostrarTerminosCondiciones() {
    vista.limpiarContenido("contenido");
    vista.mostrarPlantilla("pantallaTerminosYCondiciones", "contenido");
  }

function mostrarPoliticasPrivacidad(){
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("pantallaPoliticaPrivacidad", "contenido");
}

function cambiarColorSelect() {
  var select = document.getElementById("seleccioneRol");
  select.classList.add("seleccionado");
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
function iniciarSesion() {
  //Leer datos de formuario y validar
  let data = vista.getForm("formLogin")
  if (data.ok) {
    //Consultar en la BD si existe
    
    //Si si existe, activar sesión, cerrar modal, cambiar barra 
    sesion = !sesion;
    vista.cerrarModal("modalLogin");
    vista.cerrarModal("modalLateralSesionIniciada");
    
  } else {
    //Si no, avisar
    
  }
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

function mostrarModalNombre() {
  vista.abrirModal("contModalNombre");
}

function cerrarModalNombre() {
  vista.cerrarModal("contModalNombre");
}

function mostrarModalEmail() {
  vista.abrirModal("contModalEmail");
}

function cerrarModalEmail() {
  vista.cerrarModal("contModalEmail");
}

function mostrarModalContraseña() {
  vista.abrirModal("contModalContraseña");
}

function cerrarModalContraseña() {
  vista.cerrarModal("contModalContraseña");
}