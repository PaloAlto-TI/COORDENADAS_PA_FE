import axios from 'axios';

export default class ProductListService {

    // getProductsSmall() {
    //     return axios.get('products-small.json').then(res => res.data.data);
    // }

    getProducts() {
        return axios.get('products.json').then(res => res.data.data);
    }

    // getProductsWithOrdersSmall() {
    //     return axios.get('products-orders-small.json').then(res => res.data.data);
    // }
}