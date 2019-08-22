import React, { Component } from "react";
import { send_request } from './../redux/actions/actions';
import { connect } from 'react-redux';
import { ru } from './../lang/ru';
import { uz } from './../lang/uz';
import { en } from './../lang/en';
import { Redirect } from 'react-router'

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inps:'',
      document:'',
      phone: '',
      redirect:false
    }

  }

  onChange = (e) =>{
    this.setState({[e.target.name]:e.target.value});
  }

  onSubmit = (e) =>{
    e.preventDefault();
    this.setState({redirect:true})
    this.props.send_request(this.state);
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


    if (this.state.redirect) {
      return <Redirect to='/login' />;
    }

    return (
      <form className="wpcf7-form" onSubmit={this.onSubmit} >

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
                name="phone"
                value = {this.state.phone}
                onChange = {this.onChange}
                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                required
                placeholder="Telefon raqam"

              />
            </span>
            <span className="fa fa-phone-square" />
          </div>

          <div className="col-md-12 ">
            {" "}
            <span className="wpcf7-form-control-wrap field-header3">
              <input
                type="text"
                name="document"
                value={this.state.document}
                onChange={this.onChange}
                size="40"
                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                required
                placeholder="Passport raqami"
              />
            </span>
            <span className="fa fa-address-card" />
          </div>
          <div className="col-md-12 ">
            {" "}
            <span className="wpcf7-form-control-wrap field-header3">
              <input
                type="number"
                name="inps"
                value={this.state.inps}
                onChange = {this.onChange}
                size="40"
                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                required
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

const mapToStateProps = state => ({
  lang: state.lang.lang,
  en: en,
  ru: ru,
  uz: uz
})
export default connect(mapToStateProps, { send_request })(Form)