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
  if (sesion == false) {
    eventoObj.consultarEventosCarrusel({}, function (data) {
      listaEventosCarrusel = data.data;
      vista.mostrarCarrusel("contenidoCarrusel", listaEventosCarrusel);
    });
    eventoObj.consultarEventos({}, function (data) {
      listaEventos = data.data;
      //Desplegar tarjetas de eventos en id= "contenidoEventos"
      vista.mostrarEvento("contenidoEventos", listaEventos);
    });
  } 
  else {
    id_usuarioStr = document.getElementById("papa").attributes["user-id"].value;
    id_usuario = parseInt(id_usuarioStr);
    eventoObj.consultarEventosCarruselUsuario(id_usuario, function (data) {
      if(data.data.length > 2){
        listaEventosCarrusel = data.data;
        vista.mostrarCarrusel("contenidoCarrusel", listaEventosCarrusel);
      }
      else{
        eventoObj.consultarEventosCarrusel({}, function (data) {
          listaEventosCarrusel = data.data;
          vista.mostrarCarrusel("contenidoCarrusel", listaEventosCarrusel);
        });
      }
    });
    eventoObj.consultarEventosUsuario(id_usuario, function (data) {
      if(data.data.length > 0){  
        listaEventos = data.data;
        vista.mostrarEvento("contenidoEventos", listaEventos);
      }
      else{
        eventoObj.consultarEventos({}, function (data) {
          listaEventos = data.data;
          vista.mostrarEvento("contenidoEventos", listaEventos);
        });
      }
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

//Mostar eventos de un organizador
function mostrarEventosOrganizador() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("eventosOrganizador", "contenido");
  let id_usuarioStr = document.getElementById("papa").attributes["user-id"].value;
  let id_usuario = parseInt(id_usuarioStr);
  eventoObj.consultarEventosOrganizador(id_usuario, function (data) {
    listaEventos = data.data;
    vista.mostrarMiEvento("contenedorMisEventos", listaEventos);
  });
}

//Mostrar detalle de evento
function mostrarDetalleEvento() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("eventoDetallado", "contenido");
  let id_eventoStr = this.attributes["data-id"].value;
  let id_evento = parseInt(id_eventoStr);
  eventoObj.consultarDetalleEvento(id_evento, function (data) {
    evento = data.data;
    console.log(evento);
    vista.mostrarDetalleEvento("contenido", evento);
  });
}

function mostrarPerfil(){
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("pantallaPerfil", "contenido")
  let id_usuarioStr = document.getElementById("papa").attributes["user-id"].value;
  let id_usuario = parseInt(id_usuarioStr);
  usuarioObj.getProfile(id_usuario, function (data) {
    usuario = data.data;
    vista.mostrarPerfil(usuario)
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


function mostrarVerMisEventos(){
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("eventosOrganizador", "contenido");
}

function cambiarColorSelect() {
  var select = document.getElementById("seleccioneRol");
  select.classList.add("seleccionado");
}

/* Funcion que identifica cuando se presiona ENTER en el input de busqueda */

// function handleKeyPress(event) {
//   if (event.key === "Enter") {
//     mostrarBusquedaRelacionada();
//   }
// }

/* -------------------------------------------modales-----------------------------------------------*/

//Registrar un usuario nuevo
function registrarUsuario() {
  let data = vista.getForm("formRegistro");
  let data2 = vista.getForm("formRegistro");
  if (data.ok) {
    usuarioObj.login(data, function (data) {
      if (data.success) {
        if (data.data.length == 0) {
          sesion = !sesion;
          usuarioObj.registrar(data2, function (data) {
            let id_usuario = data.data;
            document.getElementById("papa").setAttribute("user-id", id_usuario);
            vista.cerrarModal("modalCrearCuenta");
            vista.mostrarMensaje(data.success, data.message);
            volverInicio();
          });
        }
      else{
        vista.mostrarMensaje(false, "Correo ya esta reistrado");
        }
      } 
      else {
        vista.mostrarMensaje(data.ok, data.msj);
      }
    });
  }
}

//Verificar datos de usuario e iniciar sesion
function iniciarSesion() {
  let data = vista.getForm("formLogin");
  if (data.ok) {
    usuarioObj.login(data, function (data) {
      if (data.success) {
        if (data.data.length > 0) {
          sesion = !sesion;
          vista.cerrarModal("modalLogin");
          vista.mostrarMensaje(data.success, data.msj);
          //Se guarda los datos del usuario en el objeto usuario
          usuarioObj.setData(data.data[0]);
          //Se guarda el id del usuario en la variable id_usuario, para luego usarla en a funcion consultarEventosUsuario
          let id_usuario = usuarioObj.id;
          document.getElementById("papa").setAttribute("user-id", id_usuario);
          volverInicio();
        }
        else {
          vista.mostrarMensaje(false, "Usuario no encontrado");
        }
      } else {
        vista.mostrarMensaje(data.ok, data.msj);
      }
    });
  } else {
    vista.mostrarMensaje(data.ok, data.msj);
  }
}

//funcion para cerrar sesion de usuario
function cerrarSesion() {
  sesion = !sesion;
  document.getElementById("papa").setAttribute("user-id", "");
  vista.cerrarModal("modalLateralSesionIniciada");
  vista.mostrarMensaje(true, "Sesion cerrada");
  volverInicio();
}

/*Abre el modal lateral correspondiente a si se ha iniciado sesion o no*/
function mostrarModalLateral() {
  if (sesion == false) {
    vista.abrirModal("modalLateral");
  } else {
    vista.abrirModal("modalLateralSesionIniciada");
  }
}

modalAbierto = false
function mostrarModalBusqueda() {
  if(modalAbierto==false){
      eventoObj.consultarEventosCarrusel({}, function(data){
      lista = data.data;
      vista.abrirModal("modalBusqueda", data);
      modalAbierto=true
    });
    }
    else{
      vista.cerrarModal("modalBusqueda");
      modalAbierto = false
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
