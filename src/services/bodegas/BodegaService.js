import axios from 'axios';

export default class BodegaService {

    // getProductsSmall() {
    //     return axios.get('products-small.json').then(res => res.data.data);
    // }

    getBodega() {
        return axios.get('http://localhost:8080/bodegas/60818a8d057de218dc458390').then(res => res.data);
    }

    // getProductsWithOrdersSmall() {
    //     return axios.get('products-orders-small.json').then(res => res.data.data);
    // }
}