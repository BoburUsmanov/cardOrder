import React, { Component } from "react";
import { connect } from "react-redux";
import { change_language } from "./../redux/actions/actions";
import Language from './language';
import {ru} from './../lang/ru';
import {en} from './../lang/en';
import {uz} from './../lang/uz';
import { Link } from 'react-router-dom';

class Header extends Component {
  
  componentDidMount() {
    // this.props.events_all(this.props.lang);
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
    return (
      <div id="navbar">
        <div className="ltx-topbar-block visible-mobile">
          <div className="container-fluid">
            <div className="vc_row wpb_row vc_row-fluid">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper" style={{ lineHeight: "0" }}>
                    <div
                      className="block-icon icon-h-right align-left layout-inline top-nav-custom"
                      style={{
                        width: "100%",
                        margin: 0,
                        fontSize: "12px",
                        lineHeight: 0
                      }}
                    >
                      <div style={{ float: "left" }}>
                        <p>
                          <img
                            src="/img/phone-square-alt-solid.svg"
                            width="16"
                            style={{ marginTop: "-3px", marginRight: "5px" }}
                            alt=""
                          />{" "}
                          71 200-00-55
                        </p>
                      </div>
                      <Language />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="nav-wrapper">
          <nav
            className="navbar navbar-fixed-top"
            style={{ transition: "all .3s linear",height:'110px' }}
            data-spy=""
            data-offset-top="45"
          >
            <div className="container-fluid">
              <div className="row row-center">
                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-ms-6 col-xs-6">
                  <div className="navbar-logo">
                    <Link to="/" className="logo">
                      <img width="199" id="logo" src="/img/logo.png" alt="" />
                    </Link>
                  </div>
                </div>
                <button
                  type="button"
                  style={{ float: "right" }}
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navbar"
                >
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <div className="col-xl-10 col-lg-9 col-md-9 col-sm-6 col-ms-6 col-xs-6">
                  <div id="navbar" className="navbar-collapse collapse">
                    <div className="closeBtn"> &times;</div>
                    <ul id="menu-main-menu" className="nav navbar-nav">
                      <li
                        id="menu-item-3957"
                        className="menu-item menu-item-type-post_type menu-item-object-page current-menu-parent current_page_ancestor menu-item-3957"
                      >
                        <a href="index.html#header">
                          <span>{ln['home']}</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-3557"
                        className="menu-item menu-item-type-custom menu-item-3557"
                      >
                        <a href="#workWith">
                          <span>{ln['partners']}</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-619"
                        className="menu-item menu-item-type-custom menu-item-619"
                      >
                        <a href="#cardOffer">
                          <span>{ln['apply']}</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-59"
                        className="menu-item menu-item-type-custom menu-item-59"
                      >
                        <a href="#howItWorks">
                          <span>{ln['work']}</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-60"
                        className="menu-item menu-item-type-custom menu-item-60"
                      >
                        <a href="#checkOrder">
                          <span>{ln['check']}</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-46"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-46"
                      >
                        <a href="#bePartners">
                          <span>{ln['partner']}</span>
                        </a>
                      </li>
                    </ul>
                    <div className="nav-mob">
                      <ul className="nav navbar-nav" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {console.log(this.props.lang)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.lang.lang,
  ru: ru,
  uz: uz,
  en: en
});

export default connect(
  mapStateToProps,
  { change_language }
)(Header);
