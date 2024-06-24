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
  } else {
    id_usuarioStr = document.getElementById("papa").attributes["user-id"].value;
    id_usuario = parseInt(id_usuarioStr);
    eventoObj.consultarEventosCarruselUsuario(id_usuario, function (data) {
      if (data.data.length > 0) {
        listaEventosCarrusel = data.data;
        vista.mostrarCarrusel("contenidoCarrusel", listaEventosCarrusel);
      } else {
        eventoObj.consultarEventosCarrusel({}, function (data) {
          listaEventosCarrusel = data.data;
          vista.mostrarCarrusel("contenidoCarrusel", listaEventosCarrusel);
        });
      }
    });
    eventoObj.consultarEventosUsuario(id_usuario, function (data) {
      if (data.data.length > 0) {
        listaEventos = data.data;
        vista.mostrarEvento("contenidoEventos", listaEventos);
      } else {
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

//Mostar eventos mis eventos (organizador)
function mostrarEventosOrganizador() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("eventosOrganizador", "contenido");
  let id_usuarioStr =
    document.getElementById("papa").attributes["user-id"].value;
  let id_usuario = parseInt(id_usuarioStr);
  eventoObj.consultarEventosOrganizador(id_usuario, function (data) {
    listaEventos = data.data;
    vista.mostrarMiEvento("contenedorMisEventos", listaEventos);
  });
}

//Mostar eventos mis eventos fecha ASC (organizador)
function mostrarEventosOrganizadorDateASC() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("eventosOrganizador", "contenido");
  let id_usuarioStr =
    document.getElementById("papa").attributes["user-id"].value;
  let id_usuario = parseInt(id_usuarioStr);
  eventoObj.consultarEventosOrganizadorDateASC(id_usuario, function (data) {
    listaEventos = data.data;
    vista.mostrarMiEvento("contenedorMisEventos", listaEventos);
  });
}

//Mostar eventos mis eventos fecha DESC (organizador)
function mostrarEventosOrganizadorDateDESC() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("eventosOrganizador", "contenido");
  let id_usuarioStr =
    document.getElementById("papa").attributes["user-id"].value;
  let id_usuario = parseInt(id_usuarioStr);
  eventoObj.consultarEventosOrganizadorDateDESC(id_usuario, function (data) {
    listaEventos = data.data;
    vista.mostrarMiEvento("contenedorMisEventos", listaEventos);
  });
}

//Mostar eventos mis eventos categoria ASC (organizador)
function mostrarEventosOrganizadorCatASC() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("eventosOrganizador", "contenido");
  let id_usuarioStr =
    document.getElementById("papa").attributes["user-id"].value;
  let id_usuario = parseInt(id_usuarioStr);
  eventoObj.consultarEventosOrganizadorCatASC(id_usuario, function (data) {
    listaEventos = data.data;
    vista.mostrarMiEvento("contenedorMisEventos", listaEventos);
  });
}

//Mostar eventos mis eventos categoria DESC (organizador)
function mostrarEventosOrganizadorCatDESC() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("eventosOrganizador", "contenido");
  let id_usuarioStr =
    document.getElementById("papa").attributes["user-id"].value;
  let id_usuario = parseInt(id_usuarioStr);
  eventoObj.consultarEventosOrganizadorCatDESC(id_usuario, function (data) {
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
    eventoObj.setData(evento[0]);
    vista.mostrarDetalleEvento("contenido", evento);
  });
}

//Busqueda de eventos por input del usuario
function buscarEvento(event) {
  event.preventDefault();
  let busqueda = document.getElementById("barraBusqueda").value;
  let data = { searchElement: "%" + busqueda + "%" };
  eventoObj.searchEvent(data, function (data) {
    listaEventos = data.data;
    if (listaEventos.length == 0) {
      vista.mostrarMensaje(
        false,
        "No se encontraron similitudes con la busqueda"
      );
    } else {
      vista.mostrarMiEvento("contenido", listaEventos);
    }
  });
}

//cambiar el estado de un evento para el usuario
function cambiarEstadoEvento() {
  if (sesion == false) {
    vista.mostrarMensaje(
      false,
      "Debe iniciar sesion para poder inscribirse a un evento"
    );
  } else {
    let id_usuarioStr = document.getElementById("papa").attributes["user-id"].value;
    let id_usuario = parseInt(id_usuarioStr);
    let id_eventoStr = eventoObj.id_evento;
    let id_evento = parseInt(id_eventoStr);
    let estadoStr = document.getElementById("seleccionEstadoEvento").value;
    let estado = parseInt(estadoStr);
    let data = { id_usuario: id_usuario, id_evento: id_evento, estado: estado };
    eventoObj.cambiarEstadoEvento(data, function (data) {
      vista.mostrarMensaje(true, "Estado del evento actualizado");
    });
  }
}

//Redirigir al link de compra
function redirigirLink(){
  let linkCompra = eventoObj.link_compra;
  window.location.href = linkCompra;
}


function mostrarPerfil() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("pantallaPerfil", "contenido");
  let id_usuarioStr =
    document.getElementById("papa").attributes["user-id"].value;
  let id_usuario = parseInt(id_usuarioStr);
  usuarioObj.getProfile(id_usuario, function (data) {
    usuario = data.data;
    vista.mostrarPerfil(usuario);
  });
}

//funcion para cambiar nombre de usuario
function cambiarNombre() {
  let id_usuarioStr = document.getElementById("papa").attributes["user-id"].value;
  let id_usuario = parseInt(id_usuarioStr);
  let nombreT = vista.getForm("formNombre");
  if (nombreT.ok) {
    let nombre = nombreT.title;
    let data = { id_usuario: id_usuario, nombre: nombre };
    usuarioObj.changeName(data, function (data) {
    vista.cerrarModal("contModalNombre");
    vista.mostrarMensaje(data.success, data.msj);
    mostrarPerfil();
  });
  }
  else{
    vista.mostrarMensaje(nombre.ok, "Debe ingresar un nombre");
  }
}

//funcion para cambiar correo de usuario
function cambiarCorreo() {
  let id_usuarioStr = document.getElementById("papa").attributes["user-id"].value;
  let id_usuario = parseInt(id_usuarioStr);
  let correoT = vista.getForm("formCorreo");
  if (correoT.ok) {
    let correo = correoT.title;
    let data = { id_usuario: id_usuario, correo: correo };
    usuarioObj.changeEmail(data, function (data) {
      vista.mostrarMensaje(data.success, data.msj);
      vista.cerrarModal("contModalNombre");
      mostrarPerfil();
    });
  }
  else{
    vista.mostrarMensaje(correo.ok, "Debe ingresar un correo");
  }
}

//funcion para cambiar contraseña de usuario
function cambiarContrasenia() {
  let id_usuarioStr = document.getElementById("papa").attributes["user-id"].value;
  let id_usuario = parseInt(id_usuarioStr);
  let contraseniaT = vista.getForm("formContrasenia");
  if (contraseniaT.ok) {
    let datos = vista.obtenerValoresFormulario("formContrasenia", "inputPerfil");
    let contrasenia = datos[0];
    let newContrasenia = datos[1];
    let newContrasenia2 = datos[2];
    if(newContrasenia != newContrasenia2){
      vista.mostrarMensaje(false, "Las contraseñas no coinciden");
    }
    else{
      let data = { id_usuario: id_usuario, contrasenia: contrasenia, newContrasenia: newContrasenia};
      console.log(data);
      usuarioObj.changePassword(data, function (data) {
        vista.mostrarMensaje(data.success, "Se cambio la contraseña correctamente");
        vista.cerrarModal("contModalContraseña");
    });
  }
  }
  else{
    vista.mostrarMensaje(contrasenia.ok, "Debe ingresar una contraseña");
  }
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

//funciones calendario-------------------------------------------------------------------------------

function mostrarCalendario() {
  vista.limpiarContenido("contenido");
  vista.mostrarPlantilla("calendario", "contenido");
  renderizarCalendario(fecha.getMonth(), fecha.getFullYear());
}


function botonCalendarioPrevio () {
fecha.setMonth(fecha.getMonth() - 1);
renderizarCalendario(fecha.getMonth(), fecha.getFullYear());
};

function botonCalendarioProximo () {
fecha.setMonth(fecha.getMonth() + 1);
renderizarCalendario(fecha.getMonth(), fecha.getFullYear());
};

function mostrarEventosCalendario(){
  let data = fecha.getMonth() + 1;
  eventoObj.consultarEventosCalendario(data,function (data) {
    vista.mostrarEventoDia(data.data);
  })
};

//-------------------------------------------------------------------------------------------------

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

function mostrarVerMisEventos() {
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
        } else {
          vista.mostrarMensaje(false, "Correo ya esta reistrado");
        }
      } else {
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
        } else {
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

modalAbierto = false;
function mostrarModalBusqueda() {
  if (modalAbierto == false) {
    eventoObj.consultarEventosCarrusel({}, function (data) {
      lista = data.data;
      vista.abrirModalBusqueda("modalBusqueda", lista);
      modalAbierto = true;
    });
  } else {
    vista.cerrarModal("modalBusqueda");
    modalAbierto = false;
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
