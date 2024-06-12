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
        const endpoint = 'usuario';
        const method = 'GET';
        this.connect(dataReq, endpoint, method, eventCallback);
    }


}
