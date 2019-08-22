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


export const send_request = (inps,number,seria,phone) => dispatch => {
  let userData = {
    "data":{
      'inps':inps,
      'document':`${seria}${number}`,
      'phone':phone
    }
  }
  Axios.post(`/index.php?sigin`, userData)
    .then(response =>{
      dispatch({
        type: RESPONSE,
        payload: response.data
      })
      console.log(response.data);
    }
     
    )
    .catch(error => {
        // console.log(error)
    });
};
