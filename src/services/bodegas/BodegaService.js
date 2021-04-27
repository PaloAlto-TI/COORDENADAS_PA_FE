import axios from 'axios';

export default class BodegaService {


     baseUrl = "https://coordenadas-pa.herokuapp.com/bodega";


    getBodega() {
        return axios.get(this.baseUrl +'s/6081d0262705134414ea1b7c').then(res => res.data);
    }

    updateBodega(b) {
        return axios.put(this.baseUrl +'/6081d0262705134414ea1b7c', b).then(res => res.data);
    }

}