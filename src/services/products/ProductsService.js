import axios from 'axios';

export default class ProductService {

    //SERVICIO PARA CONSUMIR PRODUCTOS

    getProducts() {
        return axios.get('https://coordenadas-pa.herokuapp.com/productos').then(res => res.data);
    }

    findProduct(){
        return axios.get('https://coordenadas-pa.herokuapp.com/buscar-producto').then(res => res.data);
    }

}