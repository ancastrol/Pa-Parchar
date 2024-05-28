class Evento extends Connect{

    constructor() {
        super();
        this.id_evento = 0;
        this.nombre = '';
        this.fecha_hora = '';
        this.lugar = '';
        this.descripcion = '';
        this.ruta_imagen = '';
        this.id_organizador = 0;
    }


    //Metodo para traer eventos al carrusel
    consultarEventosCarrusel(dataReq, eventCallback){
        const endpoint = 'principal/eventsCarrousel';
        const method = 'GET';
        this.connect(dataReq, endpoint, method, eventCallback);
    }
    
    //Metodo para traer eventos recomendados
    consultarEventos(dataReq, eventCallback){
        const endpoint = 'principal';
        const method = 'GET';
        this.connect(dataReq, endpoint, method, eventCallback);
    }

    //Metodo para traer todos los eventos
    consultarMasEventos( eventCallback){
        const endpoint = 'principal/events';
        const method = 'GET';
        this.connect({}, endpoint, method, eventCallback);
    }

    //Metodo para traer detalles evento
    consultarDetalleEvento(dataReq, eventCallback){
        const endpoint = 'evento/id'
        const method = 'GET';
        this.connect(dataReq, endpoint, method, eventCallback);
    }


}
