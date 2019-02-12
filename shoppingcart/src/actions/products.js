import {
    ADD_PRODUCTS,
    UPDATE_PRODUCTS,
    UPDATE_PRODUCT,
    REMOVE_PRODUCT,
    ADD_TO_CART,
    UPDATE_CART,
    REMOVE_FROM_CART
} from './constants.js'
import { url } from './urls';

export const getProducts = () => {
    return async dispatch => {
        try {
            const res = await fetch(url, {
                method: "GET", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, cors, *same-origin
                credentials: "same-origin", // include, *same-origin, omit
            }); 
            const products = await res.json();
            dispatch({
                type:ADD_PRODUCTS,
                payload:products
            });
        } catch (error) {
            console.log('error happend', error);
        }
    }
}

export const addToCart = (product) => {
    return async dispatch => {
            dispatch({
                type:ADD_TO_CART,
                payload:product
            });
    }
}

export const updateCart = (product) => {
    return async dispatch => {
            dispatch({
                type:UPDATE_CART,
                payload:product
            });
    }
}

export const removeFromCart = (product) => {
    return async dispatch => {
        dispatch({
            type:REMOVE_FROM_CART,
            payload:product
        });
}
}
export const updateProducts = (products) => {
    return async dispatch => {
        await fetch(url, {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(products)
        });
        dispatch({
            type:UPDATE_PRODUCTS,
            payload:products
        });
    }
}
export const updateProduct = (product) => {
    return async dispatch => {
        dispatch({
            type:REMOVE_PRODUCT,
            payload:product
        });
        dispatch({
            type:UPDATE_PRODUCT,
            payload:product
        });
}
}

export const removeProduct = (product) => {
    return async dispatch => {
        dispatch({
            type:'REMOVE_PRODUCT',
            payload:product
        });
}
}



