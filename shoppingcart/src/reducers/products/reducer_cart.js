import {
    ADD_TO_CART,
    UPDATE_CART,
    REMOVE_FROM_CART
} from '../../actions/constants';

function updateCart(state,action){
    return state.map((product) => {
        return action.payload.id === product.id ? action.payload : product;
    });
}

function removeFromCart(state,action){
    return state.filter((product) => {
        return product.id !== action.payload.id;
    });
}

function addToCart(state,action){
    return state.concat(action.payload);
}
export default function(state=[],action) {
    switch(action.type){
        case ADD_TO_CART: return addToCart(state,action);
        case UPDATE_CART: return updateCart(state, action);
        case REMOVE_FROM_CART: return removeFromCart(state,action);
        default:;
    }
    return state;
}