import {combineReducers} from 'redux';
import products from './products/reducer-products';
import cart from './products/reducer_cart';

const allReducers = combineReducers({
    products: products,
    cart: cart
});

export default allReducers;