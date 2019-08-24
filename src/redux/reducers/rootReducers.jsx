import { combineReducers } from 'redux';
import languageReducer from './languageReducer';
import responseReducer from './responseReducer';
import phoneReducer from './phoneReducer';
import codeReducer from './codeReducer';
import sessionReducer from './sessionReducer';
import enteredReducer from './enteredReducer';
import infoReducer from './infoReducer';

export default combineReducers({
   lang:languageReducer,
   response:responseReducer,
   phone:phoneReducer,
   code:codeReducer,
   session:sessionReducer,
   user:enteredReducer,
   info:infoReducer
});