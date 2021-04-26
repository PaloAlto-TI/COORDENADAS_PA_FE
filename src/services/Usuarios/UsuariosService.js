import axios from 'axios';

export default class UsuarioService {

 
    baseUrl = "https://distribucion-inventario.herokuapp.com/usuario-mail";

    postUsuarioCheck(email) {
        return axios.post(this.baseUrl,email).then(res => res.data);
    }

  
}