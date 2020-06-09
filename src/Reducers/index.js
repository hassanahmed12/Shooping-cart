import {combineReducers} from 'redux';
import basketreducer from './BasketReducer';


export default combineReducers({
 basketState:basketreducer
});