import axios from 'axios';

export default class BodegaService {

    // getProductsSmall() {
    //     return axios.get('products-small.json').then(res => res.data.data);
    // }

    getBodega() {
        return axios.get('http://localhost:8080/bodegas/6074eda7ea08623eec4f894b').then(res => res.data);
    }

    // getProductsWithOrdersSmall() {
    //     return axios.get('products-orders-small.json').then(res => res.data.data);
    // }
}