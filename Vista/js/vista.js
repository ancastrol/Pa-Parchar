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

  abrirModal(modal) {
    let pModal = document.getElementById(modal);
    pModal.style["pointer-events"] = "unset";
    pModal.style.opacity = 1;
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

  mostrarDetalleEvento(evento) {
    let div = document.getElementById("contenido");
    div.innerHTML = "";
    let divEvento = document.createElement("div");
    divEvento.innerHTML = `
    <h2>${evento.nombre}</h2>
    <p>${evento.fecha}</p>
    <p>${evento.hora}</p>
    <p>${evento.lugar}</p>
    <p>${evento.descripcion}</p>
    <p>${evento.categoria}</p>
    <p>${evento.imagen}</p>
    `;
    div.appendChild(divEvento);
  }
  
  mostrarEvento(content, data) {
    let contenedor = document.getElementById(content);
    contenedor.innerHTML = "";

    console.log(data);
    //construir tarjeta evento, se cambia cllaslist.add por id para probar que funcionen los estilos
    data.forEach((evento) => {
      let divEvento = document.createElement("div");
      divEvento.classList.add("card");
      divEvento.setAttribute("id", "cardEvento");
  
      let botonEvento = document.createElement("button");
      botonEvento.setAttribute("id", "botonEvento");
  
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


  //funcion que crea los eventos pequeños en la pagina principal
  mostrarMasEvento(content, data) {
    let contenedor = document.getElementById(content);
    contenedor.innerHTML = "";

    console.log(data);
    //construir tarjeta evento, se cambia cllaslist.add por id para probar que funcionen los estilos
    data.forEach((evento) => {
      let divEvento = document.createElement("div");
      divEvento.classList.add("card");
      divEvento.setAttribute("id", "cardEvento");
  
      let botonEvento = document.createElement("button");
      botonEvento.setAttribute("id", "botonEvento");
  
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

  //funcion que crea los eventos pequeños en la pagina mas eventos
  mostrarMasEvento(content, data) {
    let contenedor = document.getElementById(content);
    contenedor.innerHTML = "";

    console.log(data);
    
    //construir tarjeta evento, se cambia cllaslist.add por id para probar que funcionen los estilos
    data.forEach((evento) => {
      let divEvento = document.createElement("div");
      divEvento.classList.add("card");
      divEvento.setAttribute("id", "cardEvento");
  
      let botonEvento = document.createElement("button");
      botonEvento.setAttribute("id", "botonEvento");
  
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
}


