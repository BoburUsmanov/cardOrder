import { combineReducers } from 'redux';
import languageReducer from './languageReducer';
import responseReducer from './responseReducer'

export default combineReducers({
   lang:languageReducer,
   response:responseReducer
});