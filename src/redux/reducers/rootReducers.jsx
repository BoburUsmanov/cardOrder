import { combineReducers } from 'redux';
import languageReducer from './languageReducer';
import userReducer from './userReducer';
import responseReducer from './responseReducer'

export default combineReducers({
   lang:languageReducer,
   phone:userReducer,
   response:responseReducer
//    redirect:true
});