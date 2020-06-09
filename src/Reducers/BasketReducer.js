import {ADD_PRODUCT_TO_BASKET} from '../Actions/types'

const initialState={
    basketNumbers: 0
}
export default(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_PRODUCT_TO_BASKET': return{
            basketNumbers:state.basketNumbers+1
        }
        default:
            return state;
    }

}