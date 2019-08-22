import { combineReducers } from 'redux';
import languageReducer from './languageReducer';
import responseReducer from './responseReducer';
import phoneReducer from './phoneReducer';
import codeReducer from './codeReducer';
import sessionReducer from './sessionReducer'

export default combineReducers({
   lang:languageReducer,
   response:responseReducer,
   phone:phoneReducer,
   code:codeReducer,
   session:sessionReducer
});