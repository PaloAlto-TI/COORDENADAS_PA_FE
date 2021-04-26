import axios from 'axios';

export default class ProductService {

    // getProductsSmall() {
    //     return axios.get('products-small.json').then(res => res.data.data);
    // }

    getProducts() {
        return axios.get('http://localhost:8080/productos').then(res => res.data);
    }

    findProduct(){
        return axios.get('http://localhost:8080/buscar-producto').then(res => res.data);
    }

    // getProductsWithOrdersSmall() {
    //     return axios.get('products-orders-small.json').then(res => res.data.data);
    // }
}