import React, { Component } from "react";
import { connect } from "react-redux";
import { change_language } from "./../redux/actions/actions";
import Language from "./language";
import { ru } from "./../lang/ru";
import { en } from "./../lang/en";
import { uz } from "./../lang/uz";
import { Link } from "react-router-dom";
import Menu from "./menu";
import { reactLocalStorage } from "reactjs-localstorage";

class Header extends Component {
  render() {

    const logout = e => {
			localStorage.clear();
		};

    var ln;
    if (this.props.lang === "ru") {
      ln = this.props.ru;
    } else if (this.props.lang === "uz") {
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
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <p>
                          <img
                            src="/img/phone-square-alt-solid.svg"
                            width="16"
                            
                            style={{ marginTop: "-3px", marginRight: "5px" }}
                            alt=""
                          />
                          71 200-00-55
                        </p>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems:'center'
                          }}
                        >
                          {localStorage.getItem('rememberMe')?<div className="user__avatar">
                            <i className="fa fa-user-circle-o" />
                            <div className="number">
                            +998{localStorage.getItem('phone')}
                            <div className="number__content">
                                <Link className="dropdown__link" to="/profile">Profile</Link>
                                <Link className="dropdown__link" id="reload" to="/"  onClick={logout}>Logout</Link>
                            </div>
                            </div>
                          </div>:''}
                          <Language />
                        </div>
                      </div>
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
            style={{ transition: "all .3s linear", height: "110px" }}
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

                <Menu />
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.lang.lang,
  ru: ru,
  uz: uz,
  en: en,
  number:state.phone.number
});

export default connect(
  mapStateToProps,
  { change_language }
)(Header);
