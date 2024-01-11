// ACTION CREATOR (components) -> ACTION -> DISPATCH -> REDUCERS -> STORE
// Actions are just functions which take the payload and return type and the payload which is then 
// dispatched to the reducer

import { ActionTypes } from "../constants/action-types"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: product,
    }
}