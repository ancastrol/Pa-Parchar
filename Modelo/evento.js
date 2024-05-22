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

    //Metodo para traer eventos
    consultarEventos(dataReq, eventCallback){
        const endpoint = 'principal';
        const method = 'GET';
        this.connect(dataReq, endpoint, method, eventCallback);
    }

    //Metodo para traer eventos por id
    consultarEvento(id_evento, eventCallback){
        const endpoint = 'principal/' + id_evento;
        const method = 'GET';
        this.connect({}, endpoint, method, eventCallback);
    }


}
