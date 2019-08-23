import React, { Component } from "react";
import { send_request,save_phone } from "./../redux/actions/actions";
import { connect } from "react-redux";
import { ru } from "./../lang/ru";
import { uz } from "./../lang/uz";
import { en } from "./../lang/en";
import { Redirect } from "react-router";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inps: "",
      doc_number: "",
      doc_seria: "",
      phone: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {

    e.preventDefault();

    this.setState({ redirect: true });

    this.props.send_request(
      this.state.inps,
      this.state.doc_number,
      this.state.doc_seria,
      this.phoneTrim()
    );
   
    this.props.save_phone(this.state.phone);
  };

   phoneTrim = () => {

    let newArr = [], str = document.querySelector('.phone').value, strArr = [...str], trimmedNumber = '';

    for(let i = 0; i < str.length; i++){
      if(strArr[i].charAt()!=='-' && strArr[i].charAt()!=='(' && strArr[i].charAt()!==')' && strArr[i].charAt()!==' ' ){
        newArr.push(strArr[i]);
      }
    }
    for(let i = 0; i < newArr.length; i++){
      trimmedNumber+=newArr[i];
    }

    return trimmedNumber;
    
  }

  render() {

    const toInputUppercase = e => {
      e.target.value = ("" + e.target.value).toUpperCase();
    };

    const validateNumber = event => {
      if (event.target.value.length > 7) {
        event.target.value = event.target.value.slice(0, 7);
      }
    };

    const validateInps = event => {
      if (event.target.value.length > 14) {
        event.target.value = event.target.value.slice(0, 14);
      }
    };


   

    var ln;
    if (this.props.lang === "ru") {
      ln = this.props.ru;
    } else if (this.props.lang === "uz") {
      ln = this.props.uz;
    } else {
      ln = this.props.en;
    }

    if (this.props.response.status === 0) {
      return <Redirect to="/verify" />;
    }

    return (
      <form className="wpcf7-form" onSubmit={this.onSubmit}>
        <div className="row">
          <div className="col-md-12" style={{height: '28px'}}>
            {this.props.response.status ? (
              <div className="error-message animated fadeIn">
                Error
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="col-md-12 onFocusBtnShow">
            <div className="row">
              <div className="col-md-5">
                <span className="wpcf7-form-control-wrap field-header3">
                  <input
                    type="text"
                    name="doc_seria"
                    value={this.state.doc_seria}
                    onChange={this.onChange}
                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                    required
                    placeholder={ln['doc_seria_lang']}
                    pattern="[A-Z]{2}"
                    maxLength="2"
                    onInput={toInputUppercase}
                  />
                </span>
              </div>
              <div className="col-md-7">
                <span className="wpcf7-form-control-wrap field-header3">
                  <input
                    type="number"
                    name="doc_number"
                    value={this.state.doc_number}
                    onChange={this.onChange}
                    maxLength="7"
                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                    required
                    placeholder={ln['doc_num_lang']}
                    onInput={validateNumber}
                  />
                </span>
                <span className="fa fa-address-card" />
              </div>
            </div>
          </div>

          <div className="col-md-12 onFocusBtnShow">
            <button type="button" className="questionBtn">
              <i className="fa fa-question" />
            </button>
            <span className="wpcf7-form-control-wrap field-header3">
              <input
                type="number"
                name="inps"
                value={this.state.inps}
                onChange={this.onChange}
                onInput={validateInps}
                maxLength="14"
                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                required
                placeholder={ln['pin']}
              />
            </span>
            <span className="fa fa-address-card" />
          </div>

          <div className="col-md-12 tel">
            <span className="wpcf7-form-control-wrap field-heade2r">
              <input
                type="text"
                name="phone"
                value={this.state.phone}
                onChange={this.onChange}
                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required phone"
                required
                placeholder={ln['form_phone']}
                id="phone"
                data-inputmask-clearincomplete="false"
              />
            </span>
            <span className="fa fa-phone-square" />
          </div>
        </div>

        <p>
          <input
            type="submit"
            value={ln["submit"]}
            className="wpcf7-form-control wpcf7-submit"
          />
        </p>
        <div className="wpcf7-response-output wpcf7-display-none" />
      </form>
    );
  }
}

const mapToStateProps = state => ({
  lang: state.lang.lang,
  response: state.response.response,
  en: en,
  ru: ru,
  uz: uz
});
export default connect(
  mapToStateProps,
  { send_request,save_phone }
)(Form);
