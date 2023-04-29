import { ADDPRODUCT, ADDTOCART, DELETECARTITEM, DECREASECARTITEM, INCREASECARTITEM } from "./actionTypes"

export const addproduct = (values) => {
    return {
        type: ADDPRODUCT,
        payload: values
    }
}

export const addToCart = (value) => {
    return {
        type: ADDTOCART,
        payload: value
    }
}
export const increaseCartItem = (value) => {
    return {
        type: INCREASECARTITEM,
        payload: value
    }
}
export const decreaseCartItem = (value) => {
    return {
        type: DECREASECARTITEM,
        payload: value
    }
}
export const deleteCartItem = (value) => {
    return {
        type: DELETECARTITEM,
        payload: value
    }
}