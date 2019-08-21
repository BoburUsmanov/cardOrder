import React, { Component } from "react";
import {change_phone,change_inps,change_passport,send_request} from './../redux/actions/actions';
import {connect} from 'react-redux';
import axios from 'axios';
import {ru} from './../lang/ru';
import {uz} from './../lang/uz';
import {en} from './../lang/en';

import { Redirect } from 'react-router'

 class Form extends Component {
  state = {
    redirect:false
  }


     onSubmitHandle = (e) =>{
        e.preventDefault();
        // this.props.send_request();
        this.setState({ redirect: true })
    }

    phoneInput = (e) =>{
        this.props.change_phone(e.target.value)
    }
 

  render() {
    var ln;
    if (this.props.lang == "ru") {
      ln = this.props.ru;
    } else if (this.props.lang == "uz") {
      ln = this.props.uz;
    } else {
      ln = this.props.en;
    }

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/login'/>;
    }

    return (
      <form className="wpcf7-form" onSubmit={this.onSubmitHandle} >
       
        <div className="row">
          <div className="col-md-12 hidden">
            {" "}
            <span className="wpcf7-form-control-wrap field-header">
              <input
                type="text"
                name="field-header"
             
                
                placeholder="Ism"
              />
            </span>
            <span className="fa fa-user-circle" />
          </div>


          <div className="col-md-12">
            {" "}
            <span className="wpcf7-form-control-wrap field-heade2r">
              <input
                type="tel"
                name="field-heade2r"
             
                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Telefon raqam" onChange={this.phoneInput}
                value={this.props.phone}
              />
            </span>
            <span className="fa fa-phone-square" />
          </div>


          <div className="col-md-6 hidden">
            {" "}
            <span className="wpcf7-form-control-wrap field-header3">
              <input
                type="text"
                name="field-header3"
                // value=""
                size="40"
                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Email"
              />
            </span>
            <span className="fa fa-envelope" />
          </div>
          <div className="col-md-6 hidden">
            {" "}
            <span className="wpcf7-form-control-wrap field-heade2r">
              <input
                type="text"
                name="field-heade2r"
                // value=""
                size="40"
                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Date of Birth"
              />
            </span>
            <span className="fa fa-calendar" />
          </div>
          <div className="col-md-12 ">
            {" "}
            <span className="wpcf7-form-control-wrap field-header3">
              <input
                type="text"
                name="field-header3"
                // value=""
                size="40"
                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Passport raqami"
              />
            </span>
            <span className="fa fa-address-card" />
          </div>
          <div className="col-md-12 ">
            {" "}
            <span className="wpcf7-form-control-wrap field-header3">
              <input
                type="text"
                name="field-header3"
                // value=""
                size="40"
                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="INPS"
              />
            </span>
            <span className="fa fa-address-card" />
          </div>
          <div className="col-md-12 hidden">
            {" "}
            <span className="wpcf7-form-control-wrap select-menu">
              <div className="select-wrap">
                <select
                  name="select-menu"
                  className="wpcf7-form-control wpcf7-select"
                  aria-invalid="false"
                >
                  <option value="What card do you need">
                    What card do you need
                  </option>
                  <option value="Internet card">Internet card</option>
                  <option value="Prepaid card">Prepaid card</option>
                  <option value="Universal card">Universal card</option>
                </select>
              </div>
            </span>
          </div>
        </div>
        <p>
          <input
            type="submit"
            value={ln['submit']}
            className="wpcf7-form-control wpcf7-submit"
          />
        </p>
        <div className="wpcf7-response-output wpcf7-display-none" />
      </form>
    );
  }
}

const mapToStateProps = state =>({
    lang:state.lang.lang,
    phone:state.phone.phone,
    en:en,
    ru:ru,
    uz:uz
})
export default connect(mapToStateProps,{change_phone,send_request})(Form)