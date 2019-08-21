import React, { Component } from "react";
import {change_language} from './../redux/actions/actions';
import {connect} from 'react-redux';

 class Language extends Component {
    handleLangUz = e => {
      this.props.change_language("uz");
    };
    handleLangRu = e => {
      this.props.change_language("ru");
    };
    handleLangEn = e => {
      this.props.change_language("en");
    };
  render() {
    return (
      <div className="lang" style={{ float: "right" }}>
        <a onClick={this.handleLangEn}>
          <img
            src="/img/english.svg"
            width="16"
            style={{ marginTop: "-3px" }}
            alt=""
          />{" "}
          EN
        </a>
        <a onClick={this.handleLangRu}>
          <img
            src="/img/russia.svg"
            width="16"
            style={{ marginTop: "-3px" }}
            alt=""
          />{" "}
          RU
        </a>
        <a onClick={this.handleLangUz}>
          <img
            src="/img/uzbekistan.svg"
            width="16"
            style={{ marginTop: "-3px" }}
            alt=""
          />{" "}
          UZ
        </a>
      </div>
    );
  }
}

export default connect(
    null,
    { change_language }
  )(Language);