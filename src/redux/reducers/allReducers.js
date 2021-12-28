import {combineReducers} from 'redux';
import detailsReducer from './detailsReducer';


/**
 *- 將Reducer連結並導出
 */
const allReducers = combineReducers({
  detailsReducer,
});


export default allReducers;
