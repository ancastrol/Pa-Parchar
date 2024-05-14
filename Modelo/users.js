class Usuario extends Connect{
    constructor(){
    super();
    this.id_usuario = 0; //0: No ha realizado login
    this.nombre = '';
    this.correo = '';
    this.contrasenia = '';
    this.rol = 0 ;
    this.imagen_perfil = ''; 
    }
    setData(data){
    this.id = data.id;
    this.nombre = data.nombre;
    this.correo = data.correo;
    this.rol = data.rol;
    this.password = data.contrasenia; //Solo para registro
    this.imagen_perfil = data.imagen_perfil; 
    }
    getData(){
    return {
    id: this.id,
    nombre: this.nombre,
    correo: this.correo,
    rol: this.rol,
    imagen_perfil: this.imagen_perfil
    };
    }
    //Metodo para verificar login
    login(dataReq, loginCallback){
    const endpoint = 'usuario/login';
    const method = 'POST';
    this.connect(dataReq, endpoint, method, loginCallback);
    }
    }