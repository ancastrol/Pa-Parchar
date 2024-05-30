let vista = new Vista();
let eventoObj = new Evento();
let usuarioObj = new Usuario();
let listaEventos = [];
/*variable que representa si el usuario inicio sesion con TRUE o no con FALSE*/
let sesion = false;
/*Funcion que muestra la oantalla principal apenas carga la pagina*/

document.body.onload = function () {
  volverInicio();
};

/*Funciones para mostrar las plantillas en el main*/

function volverInicio() {
  vista.mostrarPlantilla("paginaPrincipal", "contenido");
  //consultar eventos en  BD
  if(sesion == false){
    eventoObj.consultarEventos({}, function (data) {
      listaEventos = data.data;
      console.log(listaEventos);

      //Desplegar tarjetas de eventos en id= "contenidoEventos"
      vista.mostrarEvento("contenidoEventos", listaEventos);
      vista.mostrarCarrusel("contenidoCarrusel", listaEventos);
    });
  }
  else{
    eventoObj.consultarEventosUsuario(usuarioObj.id, function(data) {
      listaEventos = data.data;
      console.log(listaEventos);
      vista.mostrarEvento("contenidoEventos", listaEventos);
      vista.mostrarCarrusel("contenidoCarrusel", listaEventos);
    });
  }
}

function mostrarCarrusel() {
  //consultar eventos en  BD
  eventoObj.consultarEventosCarrusel({}, function (data) {
    listaEventos = data.data;
    console.log(listaEventos);

    //Desplegar tarjetas de eventos en id= "contenidoEventos"
    vista.mostrarCarrusel("contenidoCarrusel", listaEventos);
  });
}

function mostrarMasEventos() {
  //consultar eventos en  BD
  eventoObj.consultarMasEventos(function (data) {
    listaEventos = data.data;
    console.log(listaEventos);

    //Desplegar tarjetas de eventos en id= "contenidoEventos"
    vista.mostrarEvento("contenidoEventos", listaEventos);
  });

  //cargar eventos en el pantalla
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("MasEventos", "contenido");
}


//Mostrar detalle de evento
function mostrarDetalleEvento() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("eventoDetallado", "contenido");
  let id_eventoStr = this.attributes["data-id"].value;
  let id_evento = parseInt(id_eventoStr);
  eventoObj.consultarDetalleEvento(id_evento, function(data) {
    evento = data.data;
    console.log(evento);
    vista.mostrarDetalleEvento('contenido', evento);
  });

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

function mostrarPoliticasPrivacidad() {
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

//Verificar datos de usuario e iniciar sesion
function iniciarSesion() {
  let data = vista.getForm("formLogin");
  if (data.ok) {
    usuarioObj.login(data, function(data) {
      if (data.success) {
        if(data.data.length > 0){
          sesion = !sesion;
          vista.cerrarModal("modalLogin");
          vista.cerrarModal("modalLateralSesionIniciada");
          vista.mostrarMensaje(data.success, data.msj);
          //Se guarda los datos del usuario en el objeto usuario
          usuarioObj.setData(data.data[0]);
          //Se guarda el id del usuario en la variable id_usuario, para luego usarla en a funcion consultarEventosUsuario
          let id_usuario = usuarioObj.id;
          eventoObj.consultarEventosUsuario(id_usuario, function(data) {
            listaEventos = data.data;
            console.log(listaEventos);
            vista.mostrarEvento("contenidoEventos", listaEventos);
            vista.mostrarCarrusel("contenidoCarrusel", listaEventos);
          });
        }
        else{
          vista.mostrarMensaje(false, "Usuario no encontrado");
        }
      } 
      else {
        vista.mostrarMensaje(data.ok, data.msj);
      }
    });
  } else {
    vista.mostrarMensaje(data.ok, data.msj);
  }

}

/*Registrar datos de un usuario nuevo*/
function registrarUsuario() {
  //Leer datos de formuario y validar
  let data = vista.getForm("formRegistro");
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
  let data = vista.getForm("formEvento");
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

// function mostrarModalRol() {
//   vista.abrirModal("roles");
// }

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
