import axios from 'axios';

export default class ProductService {

    // getProductsSmall() {
    //     return axios.get('products-small.json').then(res => res.data.data);
    // }

    getProducts() {
        return axios.get('https://distribucion-inventario.herokuapp.com/productos').then(res => res.data);
    }

    findProduct(){
        return axios.get('https://distribucion-inventario.herokuapp.com/buscar-producto').then(res => res.data);
    }

    // getProductsWithOrdersSmall() {
    //     return axios.get('products-orders-small.json').then(res => res.data.data);
    // }
}