class Usuario extends Connect{
    constructor(){
    super();
    this.id_cliente = 0; //0: No ha realizado login
    this.name = '';
    this.email = '';
    this.password = '';
    this.tipo = ''; 
    }
    setData(data){
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.tipo = data.tipo;
    this.password = data.password; //Solo para registro
    }
    getData(){
    return {
    id: this.id,
    name: this.name,
    email: this.email,
    tipo: this.tipo
    };
    }
    //Metodo para verificar login
    login(dataReq, loginCallback){
    const endpoint = 'clients/login';
    const method = 'POST';
    this.connect(dataReq, endpoint, method, loginCallback);
    }
    }