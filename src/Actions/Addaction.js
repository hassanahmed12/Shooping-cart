import {ADD_PRODUCT_TO_BASKET} from './types'

export const addbasket= ()=>{
    return (dispatch)=>{
       console.log("adding to basket")
        dispatch({
            type: ADD_PRODUCT_TO_BASKET
        })
    }
}