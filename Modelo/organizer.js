class Organizer extends Connect {
  constructor() {
    super();
    this.id_usuario = "";
    this.nombre = "";
    this.rol = 1;
    this.status = "";
    this.correo = "";
    this.contrasenia = "";
    this.imagen_perfil = "";
  }
  //Establece los atributos de la clase
  setData(data) {
    this.id_usuario = data.id_usuario;
    this.nombre = data.nombre;
    this.rol = data.rol;
    this.contrasenia = data.contrasenia;
    this.correo = data.correo;
    this.imagen_perfil = data.imagen_perfil;
  }
  //Retorna un objeto con los atributos de la clase
  getData() {
    return {
      id_usuario: parseInt(this.id_empresa),
      nombre: this.nombre,
      rol: this.rol,
      contrasenia: this.contrasenia,
      correo: this.correo,
    };
  }
  //Listar todos los eventos
  listarOrganizadores(callback) {
    const endpoint = "organizer";
    const method = "GET";
    this.connect({}, endpoint, method, callback);
  }

  //Datos de una empresa, por nit
  mostrarOrganizadores(nit, callback) {
    const endpoint = "companies?nit=" + nit;
    const method = "GET";
    this.connect({}, endpoint, method, callback);
  }
  //Datos de una empresa, por PK
  consultarOrganizador(id_empresa, callback) {
    const endpoint = "companies/" + id_empresa;
    const method = "GET";
    this.connect({}, endpoint, method, callback);
  }
  //Edita campos de una empresa por PK
  editarOrganizador(dataReq, callback) {
    const endpoint = "companies";
    const method = "PUT";
    this.connect(dataReq, endpoint, method, callback);
  }
}
