let vista = new Vista();
let evento = new Evento();
let listaEventos = [];
/*Funcion que muestra la oantalla principal apenas carga la pagina*/

document.body.onload = function () {
  vista.mostrarPlantilla("calendario", "contenido");
};

/*Funciones para mostrar las plantillas en el main*/

function volverInicio() {
  //consultar eventos en  BD
  evento.consultarEventos({}, function(data) {
    listaEventos = data.data;
    console.log(listaEventos);

    //Desplegar tarjetas de eventos en id= "contenidoEventos"
    vista.mostrarEvento("contenidoEventos", "listaEventos");
  });
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("paginaPrincipal", "contenido");

  //cargar eventos en el pantalla
}

function mostrarDetalleEvento() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("eventoDetallado", "contenido");
}

function mostrarEventos() {
  vista.limpiarContenido("contenidoEventos");
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
    vista.mostrarMensaje(data.ok, data.msj);
  }
}

/*Registrar datos de un usuario nuevo*/
function registrarUsuario() {
  //Leer datos de formuario y validar
  let data = vista.getForm("formRegistro")
  if (data.ok) {
    //Consultar en la BD si existe
    
    //Si si existe, activar sesión, cerrar modal, cambiar barra 
    sesion = !sesion;
    vista.cerrarModal("modalCrearCuenta");
    vista.cerrarModal("modalLateralSesionIniciada");
    
  } else {
    //Si no, avisar
    vista.mostrarMensaje(data.ok, data.msj);
  }
}

/*Guardar cambios (trantando de hacerlo general*/
function guardarEvento() {
  //Leer datos de formuario y validar
  let data = vista.getForm("formEvento")
  if (data.ok) {
    //Consultar en la BD si existe

    //mensaje guardado correctamente
    vista.mostrarMensaje(data.ok, data.msj);
    mostrarPerfil();
    
  } else {
    //Si no, avisar
    vista.mostrarMensaje(data.ok, data.msj);
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

//--------------------------------------------------------------------------------------CALENDARIO--------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const template = document.getElementById('calendario');
  const clone = template.content.cloneNode(true);
  document.body.appendChild(clone);

  const fecha = new Date();
  const diasMes = document.querySelector(".numDias")
  const ultimoDia = new Date (fecha.getFullYear(), fecha.getMonth() + 1, 0).getDate();
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  let opciones = {weekday: "short", year: "numeric", month: "short", day:"numeric"}

  document.querySelector(".fecha h2").innerHTML = meses[fecha.getMonth()];
  document.querySelector(".fecha p").innerHTML = fecha.toLocaleDateString("es-ES", opciones);

  let numDias = "";
  for ( let i = 1; i <=ultimoDia; i ++ ){
    numDias += `<div>${i}</div>`;
  }

  diasMes.innerHTML = numDias;
});