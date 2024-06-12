class Vista {
  constructor() {}

  /*Limpiar contededor main*/

  limpiarContenido(idContenedor) {
    document.getElementById(idContenedor).innerHTML = "";
  }

  /*Mostrar plantilla elegida en el destino elegido*/

  mostrarPlantilla(form, destino) {
    let dest = document.getElementById(destino);
    dest.innerHTML = "";
    let templateContent = document.getElementById(form);
    if (templateContent) {
      let clon = templateContent.content.cloneNode(true);
      dest.appendChild(clon);
    }
  }

  cerrarModal(modal) {
    let pModal = document.getElementById(modal);
    pModal.style["pointer-events"] = "none";
    pModal.style.opacity = 0;
  }

  /**
   * Lee el contenido de los inputs dentro de una etiqueta <form>
   * valida que existan datos en todos los campos
   * Los devuelve como un objeto al que incluye una bandera que indica si los datos son válidos
   * y un mensaje de error si no se ingresaron datos
   * @param {str} formulario: id del formulario a leer
   * @returns {obj} data: objeto con los datos del formulario
   */
  getForm(formulario) {
    let form = document.getElementById(formulario);
    let datos = new FormData(form);
    let data = {};
    data.ok = true; //Bandera para indicar si los datos son válidos
    data.msj = ""; //Mensaje de error si no se ingresaron datos
    datos.forEach((value, key) => {
      data[key] = value;
      if (value == "" || (form[key].tagName === "SELECT" && value == "0")) {
        data.ok = false;
        data.msj = "No hay datos en " + key;
        this.mostrarMensaje(false, data.msj);
      }
    });
    return data;
  }

  /**
   * Despliega un mensaje de por tres segundos
   * @param {bool} ok: bandera que indica si el mensaje es de error o de éxito
   * @param {str} mensaje: texto del mensaje a desplegar
   */
  mostrarMensaje(ok, mensaje) {
    // Crear el elemento del mensaje
    let mensajeDiv = document.createElement("div");
    mensajeDiv.textContent = mensaje;
    mensajeDiv.id = "mensaje-error";
    mensajeDiv.style.position = "absolute";
    mensajeDiv.style.width = "80%";
    mensajeDiv.style.right = "10%";
    mensajeDiv.style.bottom = "20%";
    mensajeDiv.style.alignContent = "center";
    if (ok) {
      mensajeDiv.style.backgroundColor = "green";
    } else {
      mensajeDiv.style.backgroundColor = "red";
    }
    mensajeDiv.style.color = "white";
    mensajeDiv.style.textAlign = "center";
    mensajeDiv.style.padding = "10px";
    mensajeDiv.style.borderRadius = "10px";
    mensajeDiv.style.zIndex = "1000";
    // Mostrar el mensaje
    document.getElementById("contenido").appendChild(mensajeDiv);
    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
      mensajeDiv.remove();
    }, 3000);
  }

  /**
   * Funcion para poner recomendaciones en barra de busqueda
   * 
   */
      abrirModal(modal, data) {
      let pModal = document.getElementById(modal);
      pModal.style["pointer-events"] = "unset";
      pModal.style.opacity = 1;
      //IDs de tus elementos HTML son los siguientes:
      let barraBusqueda1 = document.getElementById("botonBusqueda1");
      let barraBusqueda2 = document.getElementById("botonBusqueda2");
      let barraBusqueda3 = document.getElementById("botonBusqueda3");
  
      // Ahora, llenamos los elementos con los datos de la base de datos
      let evento = data.data;
      barraBusqueda1.innerHTML = `<strong>${evento[0].nombre_evento}</strong> <strong>${evento[0].fecha_hora}<strong>`;
      barraBusqueda2.innerHTML = `<strong>${evento[1].nombre_evento}</strong> <strong>${evento[1].fecha_hora}<strong>`;
      barraBusqueda3.innerHTML = `<strong>${evento[2].nombre_evento}</strong> <strong>${evento[2].fecha_hora}<strong>`;
    }



  /**
   *
   * @param {contenedor a llenar} content
   * @param {Lista con la info de la BD} data
   * Funcion que crea una plantilla para poner eventos en el carrusel
   */
  mostrarCarrusel(content, data) {
    let contenedor = document.getElementById(content);
    contenedor.innerHTML = "";

    data.forEach((evento) => {
      let carrusel = document.createElement("div");
      carrusel.classList.add("carousel-item");
      carrusel.setAttribute("id", "carruselEvento");

      let botonCarrusel = document.createElement("button");
      botonCarrusel.setAttribute("id", "btnCarrusel");
      botonCarrusel.setAttribute("data-id", evento.id_evento)

      let imagenCarrusel = document.createElement("img");
      imagenCarrusel.classList.add("d-block");
      imagenCarrusel.classList.add("w-50");
      imagenCarrusel.classList.add("mx-auto");
      imagenCarrusel.setAttribute("id", "imgReco");
      imagenCarrusel.src = evento.ruta_imagen;

      let body = document.createElement("div");
      body.classList.add("carousel-caption");
      body.classList.add("d-none");
      body.classList.add("d-md-block");

      let nombre = document.createElement("h5");
      nombre.classList.add("text-left");
      nombre.setAttribute("id", "tituloRecomendado");
      nombre.innerHTML = `<strong>${evento.nombre_evento}</strong>`;

      let descripcion = document.createElement("p");
      descripcion.classList.add("text-left");
      descripcion.innerHTML = `${evento.descripcion}<br>${evento.fecha_hora}`;

      botonCarrusel.appendChild(imagenCarrusel);
      body.appendChild(nombre);
      body.appendChild(descripcion);
      carrusel.appendChild(botonCarrusel);
      carrusel.appendChild(body);
      contenedor.appendChild(carrusel);
      botonCarrusel.addEventListener("click",mostrarDetalleEvento);
    });
    contenedor.children[0].classList.add("active");
  }

  /**
   *
   * @param {contenedor a llenar} content
   * @param {Lista con la info de la BD} data
   * Funcion que muestra eventos en la pagina principal
   */
  mostrarEvento(content, data) {
    let contenedor = document.getElementById(content);
    contenedor.innerHTML = "";
    //construir tarjeta evento, se cambia cllaslist.add por id para probar que funcionen los estilos
    data.forEach((evento) => {
      let divEvento = document.createElement("div");
      divEvento.classList.add("card");
      divEvento.setAttribute("id", "cardEvento");

      let botonEvento = document.createElement("button");
      botonEvento.setAttribute("id", "botonEvento");
      botonEvento.setAttribute("data-id", evento.id_evento)

      let imagenEvento = document.createElement("img");
      imagenEvento.setAttribute("id", "eventoA");
      imagenEvento.src = evento.ruta_imagen;

      let bodyCard = document.createElement("div");
      bodyCard.classList.add("card-body");

      let nombre = document.createElement("h5");
      nombre.classList.add("nombreEvento");
      nombre.innerHTML = `<strong>${evento.nombre_evento}</strong>`;

      let descripcion = document.createElement("p");
      descripcion.classList.add("descripcionEvento", "fechaHoraEvento");
      descripcion.innerHTML = `${evento.descripcion}<br>${evento.fecha_hora}`;

      botonEvento.appendChild(imagenEvento);
      bodyCard.appendChild(nombre);
      bodyCard.appendChild(descripcion);
      botonEvento.appendChild(bodyCard);
      divEvento.appendChild(botonEvento);
      contenedor.appendChild(divEvento);
      botonEvento.addEventListener("click", mostrarDetalleEvento);
    });
  }

  //mostrar eventos organizados por el usuario
  mostrarMiEvento(content, data) {
    let contenedor = document.getElementById(content);
    contenedor.innerHTML = "";

    console.log(data);
    //construir tarjeta evento, se cambia cllaslist.add por id para probar que funcionen los estilos
    data.forEach((miEvento) => {

      let divMiEvento = document.createElement("div");
      divMiEvento.setAttribute("id", "contenedorMiEvento");

      let hrLinea = document.createElement("hr");
      hrLinea.setAttribute("id", "lineaMiEvento");

      let botonMiEvento = document.createElement("button");
      botonMiEvento.classList.add("p-2");
      botonMiEvento.setAttribute("id", "botonEvento");
      botonMiEvento.setAttribute("data-id", miEvento.id_evento)

      let divMiEvento2 = document.createElement("div");
      divMiEvento2.classList.add("d-flex");

      let divMiEvento2_1 = document.createElement("div");
      divMiEvento2_1.classList.add("p-2", "flex-grow-1", "align-self-center");

      let imagenMiEvento = document.createElement("img");
      imagenMiEvento.setAttribute("id", "eventoOrganizador");
      imagenMiEvento.src = miEvento.ruta_imagen;

      let divMiEvento2_2 = document.createElement("div");
      divMiEvento2_2.classList.add("p-2", "d-flex", "flex-column", "mb-0", "align-self-center", "text-left");
      divMiEvento2_2.setAttribute("id", "divMiEvento2_2");
      
      let nombre = document.createElement("h6");
      nombre.setAttribute("id", "tituloOrganizador");
      nombre.innerHTML = `<strong>${miEvento.nombre_evento}</strong>`;

      let informacion = document.createElement("p");
      informacion.setAttribute("id", "parrafoOrganizador");
      informacion.innerHTML = `<strong>FECHA</strong><br>${miEvento.fecha}<br><strong>HORA</strong><br>${miEvento.hora}<br><strong>CATEGORIA</strong><br>${miEvento.descrip_cat}<br><strong>DISPONIBILIDAD</strong><br>${miEvento.disponibilidad}`;

      let descripcion = document.createElement("div");
      descripcion.classList.add("p-2", "align-self-center", "text-left");
      descripcion.innerHTML = `${miEvento.descripcion}`;

      divMiEvento2_1.appendChild(imagenMiEvento);
      divMiEvento2_2.appendChild(nombre);
      divMiEvento2_2.appendChild(informacion);
      divMiEvento2.appendChild(divMiEvento2_1);
      divMiEvento2.appendChild(divMiEvento2_2);
      divMiEvento2.appendChild(descripcion);
      botonMiEvento.appendChild(divMiEvento2);
      divMiEvento.appendChild(botonMiEvento);
      divMiEvento.appendChild(hrLinea);
      contenedor.appendChild(divMiEvento);
      botonMiEvento.addEventListener("click", mostrarDetalleEvento);
    });
  }

  //Mostrar detalle de evento
  mostrarDetalleEvento(contenido, data) {
    console.log(data);
    // Suponiendo que los IDs de tus elementos HTML son los siguientes:
    let imagenEvento = document.getElementById("imgDetalle");
    let nombreEvento = document.getElementById("tituloEvento");
    let descripcionEvento = document.getElementById("descripEvento");
    let fechaEvento = document.getElementById("fechaEvento");
    let horaEvento = document.getElementById("horaEvento");
    let lugarEvento = document.getElementById("lugarEvento");
    let mapita = document.getElementById("mapitaLindo")

    // Ahora, llenamos los elementos con los datos de la base de datos
    evento = data[0];
    imagenEvento.src = evento.flayer;
    nombreEvento.innerHTML = `<strong>${evento.nombre_evento}</strong>`;
    descripcionEvento.innerHTML = evento.descripcion;
    fechaEvento.innerHTML = evento.fecha;
    horaEvento.innerHTML = evento.hora;
    lugarEvento.innerHTML = evento.lugar;
  }

mostrarPerfil(data) {
  // Suponiendo que los IDs de tus elementos HTML son los siguientes:
  let imagenPerfil = document.getElementById("fotoPerfil")
  let nombrePerfil = document.getElementById("nombrePerfil")
  let correoPerfil = document.getElementById("correoPerfil")

  usuario = data[0]
  imagenPerfil.src = usuario.imagen_perfil;
  nombrePerfil.innerHTML = usuario.nombre;
  correoPerfil.innerHTML = usuario.correo
}

}