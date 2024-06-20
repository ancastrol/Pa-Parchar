class Usuario extends Connect {
  constructor() {
    super();
    this.id_usuario = 0; //0: No ha realizado login
    this.nombre = "";
    this.correo = "";
    this.contrasenia = "";
    this.rol = 0;
    this.imagen_perfil = "";
  }
  setData(data) {
    this.id = data.id_usuario;
    this.nombre = data.nombre;
    this.correo = data.correo;
    this.rol = data.rol;
    this.contrasenia = data.contrasenia; //Solo para registro
    this.imagen_perfil = data.imagen_perfil;
  }
  getData() {
    return {
      id: this.id,
      nombre: this.nombre,
      correo: this.correo,
      rol: this.rol,
      imagen_perfil: this.imagen_perfil,
    };
  }

  //Metodo para verificar login
  login(dataReq, loginCallback) {
    const endpoint = "usuario/login";
    const method = "POST";
    this.connect(dataReq, endpoint, method, loginCallback);
  }

  //Metodo para registrar un usuario
  registrar(dataReq, registrarCallback) {
    const endpoint = "crearUsuario";
    const method = "POST";
    this.connect(dataReq, endpoint, method, registrarCallback);
  }

  getProfile(dataReq, registrarCallback){
    const endpoint = "perfil/" + dataReq
    const method = "GET";
    this.connect(dataReq, endpoint, method, registrarCallback);
  }

  //Metodo para cambiar nombre de usuario
  changeName(dataReq, changeNameCallback) {
    const endpoint = "changeName";
    const method = "PUT";
    this.connect(dataReq, endpoint, method, changeNameCallback);
  }

  //Metodo para cambiar correo de usuario
  changeEmail(dataReq, changeEmailCallback) {
    const endpoint = "changeEmail";
    const method = "PUT";
    this.connect(dataReq, endpoint, method, changeEmailCallback);
  }

  //Metodo para cambiar contraseña de usuario
  changePassword(dataReq, changePasswordCallback) {
    const endpoint = "changePassword";
    const method = "PUT";
    this.connect(dataReq, endpoint, method, changePasswordCallback);
  }
}