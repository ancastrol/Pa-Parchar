class Evento extends Connect {
  constructor() {
    super();
    this.id_evento = 0;
    this.nombre_evento = "";
    this.fecha_hora = "";
    this.lugar = "";
    this.descripcion = "";
    this.ruta_imagen = "";
    this.id_usuario = 0;
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

  //Metodo para traer eventos segun organizador por FECHA de forma ASC
  consultarEventosOrganizadorDateASC(dataReq, eventCallback) {
    const endpoint = "organizer/" + dataReq + "/fechaASC";
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
}
