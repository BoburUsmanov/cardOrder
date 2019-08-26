import {
  CHANGE__LANGUAGE,
  RESPONSE,SAVE__PHONE,GET__CODE, SESSION__ID, USER__ENTERED,USER__INFO
} from "./types";
import Axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";
import history from './../../history';


export const change_language = text => dispatch => {
  dispatch({
    type: CHANGE__LANGUAGE,
    payload: text
  });
};

export const save_phone = text => dispatch => {
  dispatch({
    type: SAVE__PHONE,
    payload: text
  });
};

export const get_code = text => dispatch => {
  dispatch({
    type: GET__CODE,
    payload: text
  });
};

export const user_entered = text => dispatch => {
  dispatch({
    type: USER__ENTERED,
    payload: text
  });
};



export const send_request = (inps,number,seria,phone) => dispatch => {
  let userData = {
    "data":{
      'inps':inps,
      'document':`${seria}${number}`,
      'phone':`998${phone}`
    }
  };
  Axios.post(`/index.php?sigin`, userData)
    .then(response =>{
      window.localStorage.setItem("phone", phone) 
      window.localStorage.setItem('verifyStatus',response.data.status)
      window.localStorage.setItem('session',response.data.data)
      
      dispatch({
        type: RESPONSE,
        payload: response.data
      })
      history.push('/verify');
    })
};

export const session_id = (sms,session) => dispatch => {
  let userInfo = {
    "data":{
      'id':sms,
      'ses':session
    }
  };
  Axios.post(`/index.php?confirm`,userInfo)
    .then(response =>{

      localStorage.setItem("loggedStatus",response.data.status )
      localStorage.setItem('info',response.data.data)

      dispatch({
        type: SESSION__ID,
        payload:response.data
      })

      if(userInfo.data.id.length === 6){
        history.push('/profile');
      }
    })
};

export const user_info = (text) => dispatch => {
  dispatch({
    type: USER__INFO,
    payload: text
  });
};

export const rassrochka_info = (text) => dispatch => {
  // dispatch({
  //   type: USER__INFO,
  //   payload: text
  // });
};

export const credit_info = (text) => dispatch => {
  // dispatch({
  //   type: USER__INFO,
  //   payload: text
  // });
};

export const appeal_rassrochka = (phone,session,loan) => dispatch => {
  let data = {
    "data":{
      'phone':phone,
      'ses':session,
      'loan':loan,
    }
  };

  Axios.post(`/index.php?appeal`,data)
    .then(response =>{
      localStorage.setItem('rassrochkaStatus', response.data.status)
      history.push('/rassrochka')
    })
    
};

export const appeal_credit = (text) => dispatch => {
  // dispatch({
  //   type: USER__INFO,
  //   payload: text
  // });
};