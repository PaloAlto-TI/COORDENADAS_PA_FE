import axios from 'axios';

export default class UsuarioService {

 
    baseUrl = "https://coordenadas-pa.herokuapp.com/usuario-mail";

    postUsuarioCheck(email) {
        return axios.post(this.baseUrl,email).then(res => res.data);
    }

  
}