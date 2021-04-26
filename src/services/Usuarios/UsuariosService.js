import axios from 'axios';

export default class UsuarioService {

 
    baseUrl = "http://localhost:8080/usuario-mail";

    postUsuarioCheck(email) {
        return axios.post(this.baseUrl,email).then(res => res.data);
    }

  
}