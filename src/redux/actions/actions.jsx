import {
  CHANGE__LANGUAGE,
  CHANGE__INPS,
  CHANGE__PASSPORT,
  CHANGE__PHONE,
  RESPONSE
} from "./types";
import Axios from "axios";
import {browserHistory} from 'react-router';
import  { Redirect } from 'react-router-dom'

export const change_language = text => dispatch => {
  dispatch({
    type: CHANGE__LANGUAGE,
    payload: text
  });
};

export const change_phone = text => dispatch => {
  dispatch({
    type: CHANGE__PHONE,
    payload: text
  });
};
export const change_passport = text => dispatch => {
  dispatch({
    type: CHANGE__PASSPORT,
    payload: text
  });
};
export const change_inps = text => dispatch => {
  dispatch({
    type: CHANGE__INPS,
    payload: text
  });
};

export const send_request = () => dispatch => {
  let user_info = {
    inps: "32809907350017",
    document: "KA0200543",
    phone: "998995340559"
  };
  Axios.post(`http://172.28.5.194:8080/nps/signUp/${user_info}`, {
    crossDomain: true
  })
    .then(response =>
      // dispatch({
      //   type: RESPONSE,
      //   payload: response.data
      // })
      {
        console.log(response);
      }
    )
    .catch(error => {
      // window.location = '/HomePage';
    
    });
};
