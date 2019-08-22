import {
  CHANGE__LANGUAGE,
  RESPONSE
} from "./types";
import Axios from "axios";
// import {browserHistory} from 'react-router';


export const change_language = text => dispatch => {
  dispatch({
    type: CHANGE__LANGUAGE,
    payload: text
  });
};


export const send_request = (userData) => dispatch => {
  
  Axios.post(`http://172.28.5.194:8080/nps/signUp/${userData}`)
    .then(response =>
      dispatch({
        type: RESPONSE,
        payload: response.data
      })
     
    )
    .catch(error => {
      
        
          
       
    
    });
};
