import {combineReducers} from 'redux';
import detailsReducer from './detailsReducer';
import menuReducer from './menuReducer';


/**
 *- 將Reducer連結並導出
 */
const allReducers = combineReducers({
  detailsReducer,
  menuReducer,
});


export default allReducers;
