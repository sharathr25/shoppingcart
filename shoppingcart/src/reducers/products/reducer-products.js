import {
    ADD_PRODUCTS,
    UPDATE_PRODUCTS,
    UPDATE_PRODUCT,
    REMOVE_PRODUCT
} from '../../actions/constants'

function updateProducts(state,action){
    const newProducts = action.payload.map((product) => {
        const newProduct = product;
        newProduct.quantity = product.quantity - product.selected;
        return newProduct;
    });
    return state.map((product, index) => {
        if(index < newProducts.length){
            return product.id === newProducts[0].id ? newProducts[index] : product;
        }
        else
            return product;
    });
}

function updateProduct(state,action){
    const index = action.payload.id - 1;
    const newState = [...state.slice(0,index),action.payload,...state.slice(index)];
    return newState;
}

function removeProduct(state,action){
    return state.filter((product) => {
        return product.id !== action.payload.id;
    });
}

function addProducts(state,action){
    return state.concat(action.payload)
}
export default function(state=[],action) {
    switch(action.type){
        case ADD_PRODUCTS: return addProducts(state,action);
        case UPDATE_PRODUCTS: return updateProducts(state,action);
        case UPDATE_PRODUCT: return updateProduct(state,action);
        case REMOVE_PRODUCT: return removeProduct(state,action);
        default:;
    }
    return state;
}