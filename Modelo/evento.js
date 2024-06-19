class Evento extends Connect {
  constructor() {
    super();
    this.id_evento = 0;
    this.nombre_evento = "";
    this.fecha_hora = "";
    this.lugar = "";
    this.descripcion = "";
    this.ruta_imagen = "";
    this.ruta_flayer = "";
    this.id_usuario = 0;
  }

  setData(data) {
    this.id_evento = data.id_evento;
    this.nombre_evento = data.nombre_evento;
    this.fecha_hora = data.fecha_hora;
    this.lugar = data.lugar;
    this.descripcion = data.descripcion;
    this.ruta_imagen = data.ruta_imagen;
    this.ruta_flayer = data.ruta_flayer;
    this.id_usuario = data.id_usuario;
  }
  getData() {
    return {
      id_evento: this.id_evento,
      nombre_evento: this.nombre_evento,
      fecha_hora: this.fecha_hora,
      lugar: this.lugar,
      descripcion: this.descripcion,
      ruta_imagen: this.ruta_imagen,
      ruta_flayer: this.ruta_flayer,
      id_usuario: this.id_usuario,
    };
  }

  //Metodo para traer eventos al carrusel
  consultarEventosCarrusel(dataReq, eventCallback) {
    const endpoint = "principal/eventsCarrousel";
    const method = "GET";
    this.connect(dataReq, endpoint, method, eventCallback);
  }

  //Metodo para traer eventos recomendados
  consultarEventos(dataReq, eventCallback) {
    const endpoint = "principal";
    const method = "GET";
    this.connect(dataReq, endpoint, method, eventCallback);
  }

  //Metodo para traer todos los eventos
  consultarMasEventos(eventCallback) {
    const endpoint = "principal/events";
    const method = "GET";
    this.connect({}, endpoint, method, eventCallback);
  }

  //Metodo para traer eventos segun organizador
  consultarEventosOrganizador(dataReq, eventCallback) {
    const endpoint = "organizer/" + dataReq;
    const method = "GET";
    this.connect(dataReq, endpoint, method, eventCallback);
  }

  //Metodo para traer eventos segun organizador
  consultarEventosOrganizadorDateASC(dataReq, eventCallback) {
    const endpoint = "organizer/" + dataReq + "/fechaASC";
    const method = "GET";
    this.connect(dataReq, endpoint, method, eventCallback);
  }

  //Metodo para traer eventos segun organizador
  consultarEventosOrganizadorDateDESC(dataReq, eventCallback) {
    const endpoint = "organizer/" + dataReq + "/fechaDESC";
    const method = "GET";
    this.connect(dataReq, endpoint, method, eventCallback);
  }

    //Metodo para traer eventos segun organizador
    consultarEventosOrganizadorCatASC(dataReq, eventCallback) {
      const endpoint = "organizer/" + dataReq + "/categoriaASC";
      const method = "GET";
      this.connect(dataReq, endpoint, method, eventCallback);
    }
  
    //Metodo para traer eventos segun organizador
    consultarEventosOrganizadorCatDESC(dataReq, eventCallback) {
      const endpoint = "organizer/" + dataReq + "/categoriaDESC";
      const method = "GET";
      this.connect(dataReq, endpoint, method, eventCallback);
    }

  //Metodo para traer detalles evento
  consultarDetalleEvento(dataReq, eventCallback) {
    const endpoint = "evento/" + dataReq;
    const method = "GET";
    this.connect(dataReq, endpoint, method, eventCallback);
  }

  //Mostrar los eventos de un usuario
  consultarEventosUsuario(dataReq, eventCallback) {
    const endpoint = "principal/" + dataReq;
    const method = "GET";
    this.connect(dataReq, endpoint, method, eventCallback);
  }

  //Traer eventos del carrusel de un usuario
  consultarEventosCarruselUsuario(dataReq, eventCallback) {
    const endpoint = "principal/eventsCarrousel/" + dataReq;
    const method = "GET";
    this.connect(dataReq, endpoint, method, eventCallback);
  }

  //Metodo para traer eventos segun busqueda usuario
  searchEvent(dataReq, eventCallback) {
    const endpoint = "busqueda";
    const method = "POST";
    this.connect(dataReq, endpoint, method, eventCallback);
  }

  //Metodo para cambiar estado de evento
  cambiarEstadoEvento(dataReq, eventCallback) {
    const endpoint = "estadoEvento";
    const method = "post";
    this.connect(dataReq, endpoint, method, eventCallback);
  }
}
