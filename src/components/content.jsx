import React, { Component } from "react";
import { connect } from "react-redux";
import { ru } from "./../lang/ru";
import { uz } from "./../lang/uz";
import { en } from "./../lang/en";
import Form from "./form";
import { reactLocalStorage } from "reactjs-localstorage";
import Demo from './../components/demo'
import $ from 'jquery'
import {Link} from 'react-router-dom'
class Content extends Component {


  componentDidMount(){
    // $('#rassrochka__popup').on('click',function(){
    //   $('.popup__order').fadeIn()
    // });

    // $('.popup__close').on('click',function(){
    //   $('.popup__order').fadeOut()
    // });
  }
  render() {
    var ln;
    if (this.props.lang === "ru") {
      ln = this.props.ru;
    } else if (this.props.lang === "uz") {
      ln = this.props.uz;
    } else {
      ln = this.props.en;
    }
    return (
      <React.Fragment>
        <Demo />
        <div className="container-fluid main-wrapper">
          <div className="inner-page text-page margin-disabled">
            <div className="row">
              <div className=" col-md-12 text-page">
                <article
                  id="post-3497"
                  className="post-3497 page type-page status-publish hentry"
                >
                  <div className="entry-content clearfix" id="entry-div">

                    <section
                      data-vc-full-width="true"
                      data-vc-full-width-init="false"
                      className="vc_section bg-color-white"
                      id="workWith"

                    >
                      <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="heading  default align-center color-black transform-default   vc_custom_1518739627146"
                                id="like_sc_header_1403723636"
                              >
                                <h3 className="header">
                                  {ln["company partners"]}
                                </h3>
                              </div>
                              <div
                                className="heading  header-underline align-center color-black transform-default   vc_custom_1518739755718"
                                id="like_sc_header_323748597"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-vc-full-width="true"
                        data-vc-full-width-init="false"
                        className="vc_row wpb_row vc_row-fluid"
                      >
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="es-resp">
                                <div
                                  className="visible-xl"
                                  style={{ height: "48px" }}
                                />
                                <div
                                  className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"
                                  style={{ height: "48px" }}
                                />
                                <div
                                  className="visible-md"
                                  style={{ height: "48px" }}
                                />
                                <div
                                  className="visible-sm "
                                  style={{ height: "48px" }}
                                />
                                <div
                                  className="visible-ms"
                                  style={{ height: "16px" }}
                                />
                                <div
                                  className="visible-xs"
                                  style={{ height: "16px" }}
                                />
                              </div>
                              <ul className="block-icon icons-count-8  col-bg-transparent icon-top align-center i-transparent layout-cols4 row">
                                <li
                                  className=" col-lg-3 col-md-4 col-sm-6 col-ms-6 col-xs-12"
                                  data-mh="ltx-block-icon-li-1094"
                                >
                                  <a href="https://schetchik.uz">
                                    <img
                                      src="img/partners1.jpg"
                                      width="200"
                                      alt=""
                                    />
                                  </a>
                                </li>
                                <li
                                  className=" col-lg-3 col-md-4 col-sm-6 col-ms-6 col-xs-12"
                                  data-mh="ltx-block-icon-li-1094"
                                >
                                  <br />
                                  <a href="https://texnomart.uz/">
                                    <img
                                      src="img/partners2.png"
                                      width="200"
                                      alt=""
                                    />
                                  </a>
                                </li>
                                <li
                                  className=" col-lg-3 col-md-4 col-sm-6 col-ms-6 col-xs-12"
                                  data-mh="ltx-block-icon-li-1094"
                                >
                                  <br />
                                  <br />
                                  <a href="http://mediapark.uz/">
                                    <img
                                      src="img/partners3.png"
                                      width="200"
                                      style={{ marginTop: "10px" }}
                                      alt=""
                                    />
                                  </a>
                                </li>
                                <li
                                  className=" col-lg-3 col-md-4 col-sm-6 col-ms-6 col-xs-12"
                                  data-mh="ltx-block-icon-li-1094"
                                >
                                  <a href="http://roison.uz/">
                                    <img
                                      src="img/partners4.png"
                                      width="200"
                                      alt=""
                                    />
                                  </a>
                                </li>
                                <li
                                  className=" col-lg-3 col-md-4 col-sm-6 col-ms-6 col-xs-12"
                                  data-mh="ltx-block-icon-li-1094"
                                >
                                  <a href="http://www.senorandsenorita.uz/">
                                    <img src="img/s&s.jpg" width="200" alt="" />
                                  </a>
                                </li>
                                <li
                                  className=" col-lg-3 col-md-4 col-sm-6 col-ms-6 col-xs-12"
                                  data-mh="ltx-block-icon-li-1094"
                                >
                                  <br />
                                  <br />
                                  <img src="img/tantana.png" width="200" alt="" />
                                </li>
                              </ul>
                              <div className="es-resp">
                                <div
                                  className="visible-xl"
                                  style={{ height: "120px" }}
                                />
                                <div
                                  className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"
                                  style={{ height: "120px" }}
                                />
                                <div
                                  className="visible-md"
                                  style={{ height: "120px" }}
                                />
                                <div
                                  className="visible-sm "
                                  style={{ height: "60px" }}
                                />
                                <div
                                  className="visible-ms"
                                  style={{ height: "60px" }}
                                />
                                <div
                                  className="visible-xs"
                                  style={{ height: "60px" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="vc_row-full-width vc_clearfix" />
                    </section>
                    <div className="vc_row-full-width vc_clearfix" />
                    <section
                      data-vc-full-width="true"
                      data-vc-full-width-init="false"
                      id="howItWorks"
                      className="vc_section vc_custom_1518965830350 bg-color-black ltx-overlay bg-overlay-semi-black text-align-center-ms"

                    >
                      <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner" style={{ marginTop: '70px' }}>
                            <div className="wpb_wrapper">
                              <div className="es-resp">
                                <div
                                  className="visible-xl"
                                  style={{ height: "60px" }}
                                />
                                <div
                                  className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"
                                  style={{ height: "0px" }}
                                />
                                <div
                                  className="visible-md"
                                  style={{ height: "0px" }}
                                />
                                <div
                                  className="visible-sm "
                                  style={{ height: "0px" }}
                                />
                                <div
                                  className="visible-ms"
                                  style={{ height: "32px" }}
                                />
                                <div
                                  className="visible-xs"
                                  style={{ height: "32px" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="overlay1" />
                      <div className="vc_row wpb_row vc_row-fluid bg-pos-right-center">
                        <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-7 vc_col-md-7 vc_hidden-xs" />

                        <div
                          className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-5 vc_col-md-5"
                          style={{ marginTop: "50px!important", zIndex: "99" }}
                        >
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="heading header-subheader color-main subcolor-black transform-default vc_custom_1518967118514"
                                id="like_sc_header_450445490"
                              >
                                <h2 className="header">
                                  {ln["work"]}?
                                <br />
                                </h2>
                              </div>
                              <div className="es-resp">
                                <div
                                  className="visible-xl"
                                  style={{ height: "48px" }}
                                />
                                <div
                                  className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"
                                  style={{ height: "48px" }}
                                />
                                <div
                                  className="visible-md"
                                  style={{ height: "48px" }}
                                />
                                <div
                                  className="visible-sm "
                                  style={{ height: "48px" }}
                                />
                                <div
                                  className="visible-ms"
                                  style={{ height: "32px" }}
                                />
                                <div
                                  className="visible-xs"
                                  style={{ height: "32px" }}
                                />
                              </div>
                              <ul className="block-icon icons-count-4 col-bg-transparent icon-h-right align-left i-circle layout-col1">
                                <li data-mh="ltx-block-icon-li-1960">
                                  <div
                                    data-mh="ltx-block-icon-in-1960"
                                    className="in matchHeight"
                                  >
                                    <span
                                      className="icon icon-text"
                                      data-mh="ltx-icon-span-"
                                    >
                                      01
                                  </span>
                                    <h6
                                      className="header"
                                      style={{ color: "#333" }}
                                    >
                                      {" "}
                                      {ln["cash management"]}
                                    </h6>
                                    <div className="descr" />
                                  </div>
                                </li>
                                <li data-mh="ltx-block-icon-li-1960">
                                  <div
                                    data-mh="ltx-block-icon-in-1960"
                                    className="in matchHeight"
                                  >
                                    <span
                                      className="icon icon-text"
                                      data-mh="ltx-icon-span"
                                    >
                                      02
                                  </span>
                                    <h6
                                      className="header"
                                      style={{ color: "#333" }}
                                    >
                                      {" "}
                                      {ln["cashless payments"]}
                                    </h6>
                                    <div className="descr" />
                                  </div>
                                </li>
                                <li data-mh="ltx-block-icon-li-1960">
                                  <div
                                    data-mh="ltx-block-icon-in-1960"
                                    className="in matchHeight"
                                  >
                                    <span
                                      className="icon icon-text"
                                      data-mh="ltx-icon-span-"
                                    >
                                      03
                                  </span>
                                    <h6
                                      className="header"
                                      style={{ color: "#333" }}
                                    >
                                      {" "}
                                      {ln["sms"]}
                                    </h6>
                                    <div className="descr" />
                                  </div>
                                </li>
                                <li data-mh="ltx-block-icon-li-1960">
                                  <div
                                    data-mh="ltx-block-icon-in-1960"
                                    className="in matchHeight"
                                  >
                                    <span
                                      className="icon icon-text"
                                      data-mh="ltx-icon-span-"
                                    >
                                      04
                                  </span>
                                    <h6
                                      className="header"
                                      style={{ color: "#333" }}
                                    >
                                      {" "}
                                      {ln["bank"]}
                                    </h6>
                                    <div className="descr" />
                                  </div>
                                </li>
                              </ul>
                              <div className="es-resp">
                                <div
                                  className="visible-xl"
                                  style={{ height: "64px" }}
                                />
                                <div
                                  className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"
                                  style={{ height: "64px" }}
                                />
                                <div
                                  className="visible-md"
                                  style={{ height: "64px" }}
                                />
                                <div
                                  className="visible-sm "
                                  style={{ height: "64px" }}
                                />
                                <div
                                  className="visible-ms"
                                  style={{ height: "48px" }}
                                />
                                <div
                                  className="visible-xs"
                                  style={{ height: "48px" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="es-resp">
                                <div
                                  className="visible-xl"
                                  style={{ height: "64px" }}
                                />
                                <div
                                  className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"
                                  style={{ height: "64px" }}
                                />
                                <div
                                  className="visible-md"
                                  style={{ height: "64px" }}
                                />
                                <div
                                  className="visible-sm "
                                  style={{ height: "64px" }}
                                />
                                <div
                                  className="visible-ms"
                                  style={{ height: "24px" }}
                                />
                                <div
                                  className="visible-xs"
                                  style={{ height: "24px" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <div className="vc_row-full-width vc_clearfix" />
                    <section
                      data-vc-full-width="true"
                      data-vc-full-width-init="false"
                      id="checkOrder"
                      className="vc_section vc_custom_1518828740431 bg-color-theme_color"

                    >
                      <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="es-resp">
                                <div
                                  className="visible-xl"
                                  style={{ height: "40px" }}
                                />
                                <div
                                  className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"
                                  style={{ height: "40px" }}
                                />
                                <div
                                  className="visible-md"
                                  style={{ height: "40px" }}
                                />
                                <div
                                  className="visible-sm "
                                  style={{ height: "40px" }}
                                />
                                <div
                                  className="visible-ms"
                                  style={{ height: "40px" }}
                                />
                                <div
                                  className="visible-xs"
                                  style={{ height: "40px" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="vc_row wpb_row vc_row-fluid vc_row-o-equal-height vc_row-o-content-middle vc_row-flex text-align-center-md-sm-ms">
                        <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-4 vc_col-md-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="heading  default color-white subcolor-white transform-default   vc_custom_1518829015876"
                                id="like_sc_header_1777191851"
                              >
                                <h3 className="header">{ln["check"]}</h3>
                              </div>
                              <div className="es-resp">
                                <div
                                  className="visible-xl"
                                  style={{ height: "0px" }}
                                />
                                <div
                                  className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"
                                  style={{ height: "0px" }}
                                />
                                <div
                                  className="visible-md"
                                  style={{ height: "32px" }}
                                />
                                <div
                                  className="visible-sm "
                                  style={{ height: "32px" }}
                                />
                                <div
                                  className="visible-ms"
                                  style={{ height: "32px" }}
                                />
                                <div
                                  className="visible-xs"
                                  style={{ height: "32px" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-5 vc_col-md-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="heading  default color-white transform-default   vc_custom_1518829057270"
                                id="like_sc_header_435360746"
                              >
                                <span className="heading-icon-wrap  icon-">
                                  <img
                                    src="img/cards-phone.png"
                                    className="heading-icon"
                                    alt="0-800-500-0-500"
                                  />
                                </span>
                                <div className="heading-content">
                                  <h2 className="header">71 200-00-55</h2>
                                </div>
                              </div>
                              <div className="es-resp">
                                <div
                                  className="visible-xl"
                                  style={{ height: "0px" }}
                                />
                                <div
                                  className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"
                                  style={{ height: "0px" }}
                                />
                                <div
                                  className="visible-md"
                                  style={{ height: "32px" }}
                                />
                                <div
                                  className="visible-sm "
                                  style={{ height: "32px" }}
                                />
                                <div
                                  className="visible-ms"
                                  style={{ height: "32px" }}
                                />
                                <div
                                  className="visible-xs"
                                  style={{ height: "32px" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-3 vc_col-md-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="btn-wrap align-center">
                                <a
                                  href="#"
                                  className="btn  btn-lg btn-white transform-default color-text-default color-hover-second align-center   vc_custom_1519076887115"
                                  id="like_sc_button_1849736555"
                                >
                                  {ln["online"]}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="es-resp">
                                <div
                                  className="visible-xl"
                                  style={{ height: "40px" }}
                                />
                                <div
                                  className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"
                                  style={{ height: "40px" }}
                                />
                                <div
                                  className="visible-md"
                                  style={{ height: "40px" }}
                                />
                                <div
                                  className="visible-sm "
                                  style={{ height: "40px" }}
                                />
                                <div
                                  className="visible-ms"
                                  style={{ height: "40px" }}
                                />
                                <div
                                  className="visible-xs"
                                  style={{ height: "40px" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <div className="vc_row-full-width vc_clearfix" />

                    <section className="vc_section" >
                      <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="es-resp">
                                <div
                                  className="visible-xl"
                                  style={{ height: "48px" }}
                                />
                                <div
                                  className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"
                                  style={{ height: "48px" }}
                                />
                                <div
                                  className="visible-md"
                                  style={{ height: "48px" }}
                                />
                                <div
                                  className="visible-sm "
                                  style={{ height: "16px" }}
                                />
                                <div
                                  className="visible-ms"
                                  style={{ height: "0px" }}
                                />
                                <div
                                  className="visible-xs"
                                  style={{ height: "0px" }}
                                />
                              </div>
                              <div
                                className="heading  default align-center color-black transform-default   vc_custom_1518742525493"
                                id="like_sc_header_1791580543"
                              >
                                <h3 className="header">{ln["step"]}</h3>
                              </div>
                              <div
                                className="heading  header-underline align-center color-black transform-default   vc_custom_1518742551077"
                                id="like_sc_header_1881305477"
                              >
                                <h3 className="header">
                                  {" "}
                                  {ln["get"]} <span>{ln["card"]}</span>
                                </h3>
                              </div>
                              <ul className="block-icon icons-count-3  col-bg-transparent icon-top align-center i-circle-large layout-cols3 row">
                                <li
                                  className=" col-lg-4 col-md-4 col-sm-4 col-ms-6 col-xs-12"
                                  data-mh="ltx-block-icon-li-1071"
                                >
                                  <div
                                    data-mh="ltx-block-icon-in-1071"
                                    className="in matchHeight"
                                  >
                                    <span
                                      className="icon icon-image"
                                      data-mh="ltx-icon-span-"
                                    >
                                      <img
                                        src="img/cards-steps-1.png"
                                        className="icon-image"
                                        alt="&lt;span&gt; 01. &lt;/span&gt; Enter your personal info"
                                      />
                                    </span>
                                    <h5 className="header">
                                      {" "}
                                      <span> 01. </span>
                                      {ln["service01"]}
                                    </h5>
                                  </div>
                                </li>
                                <li
                                  className=" col-lg-4 col-md-4 col-sm-4 col-ms-6 col-xs-12"
                                  data-mh="ltx-block-icon-li-1071"
                                >
                                  <div
                                    data-mh="ltx-block-icon-in-1071"
                                    className="in matchHeight"
                                  >
                                    <span
                                      className="icon icon-image"
                                      data-mh="ltx-icon-span-"
                                    >
                                      <img
                                        src="img/cards-steps-2.png"
                                        className="icon-image"
                                        alt="&lt;span&gt; 02. &lt;/span&gt; Attach your ID-scan"
                                      />
                                    </span>
                                    <h5 className="header">
                                      {" "}
                                      <span> 02. </span> {ln["message"]}
                                    </h5>
                                  </div>
                                </li>
                                <li
                                  className=" col-lg-4 col-md-4 col-sm-4 col-ms-6 col-xs-12 matchHeight icon-image col-md-offset-0 col-sm-offset-0 col-ms-offset-0 "
                                  data-mh="ltx-block-icon-li-1071"
                                >
                                  <div
                                    data-mh="ltx-block-icon-in-1071"
                                    className="in matchHeight"
                                  >
                                    <span
                                      className="icon icon-image"
                                      data-mh="ltx-icon-span-"
                                    >
                                      <img
                                        src="img/cards-steps-3.png"
                                        className="icon-image"
                                        alt="&lt;span&gt; 03. &lt;/span&gt; Get your card in 3 days"
                                      />
                                    </span>
                                    <h5 className="header">
                                      {" "}
                                      <span> 03. </span> {ln["get card"]}{" "}
                                    </h5>
                                  </div>
                                </li>
                              </ul>
                              <div className="es-resp">
                                <div
                                  className="visible-xl"
                                  style={{ height: "104px" }}
                                />
                                <div
                                  className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"
                                  style={{ height: "80px" }}
                                />
                                <div
                                  className="visible-md"
                                  style={{ height: "80px" }}
                                />
                                <div
                                  className="visible-sm "
                                  style={{ height: "80px" }}
                                />
                                <div
                                  className="visible-ms"
                                  style={{ height: "80px" }}
                                />
                                <div
                                  className="visible-xs"
                                  style={{ height: "80px" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section
                      data-vc-full-width="true"
                      data-vc-full-width-init="false"
                      id="bePartners"
                      className="vc_section vc_custom_1518834235899 vc_section-has-fill bg-color-gray bg-pos-right-center text-align-center-ms"

                    >
                      <div className="overlay1" />
                      <div className="vc_row wpb_row vc_row-fluid bg-pos-right-center bg-overlay-mode-mobile">
                        <div
                          className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-12 text-align-center-sm-ms"
                          style={{ zIndex: "99" }}
                        >
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="es-resp">
                                <div
                                  className="visible-xl"
                                  style={{ height: "48px" }}
                                />
                                <div
                                  className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"
                                  style={{ height: "48px" }}
                                />
                                <div
                                  className="visible-md"
                                  style={{ height: "48px" }}
                                />
                                <div
                                  className="visible-sm "
                                  style={{ height: "48px" }}
                                />
                                <div
                                  className="visible-ms"
                                  style={{ height: "0px" }}
                                />
                                <div
                                  className="visible-xs"
                                  style={{ height: "0px" }}
                                />
                              </div>
                              <div
                                className="heading  header-underline color-black subcolor-main transform-default vc_custom_1518889619319"
                                id="like_sc_header_1773092424"
                              >
                                <h3 className="header">{ln["partner"]} ?</h3>
                              </div>
                              <div
                                className="ltx-content-width col-align-left"
                                style={{ maxWidth: "700px" }}
                              >
                                <div className="wpb_text_column wpb_content_element ">
                                  <div className="wpb_wrapper">
                                    <p>{ln["ready"]}</p>
                                  </div>
                                </div>
                              </div>

                              <ul className="block-icon icons-count-4  col-bg-transparent icon-top align-left i-transparent layout-inline">
                                <li
                                  className=" icon-image"
                                  data-mh="ltx-block-icon-li-1003"
                                >
                                  <div
                                    data-mh="ltx-block-icon-in-1003"
                                    className=""
                                  >
                                    <span
                                      className="icon icon-image matchHeight"
                                      data-mh="ltx-icon-span-"
                                    >
                                      <img
                                        src="img/cards-icon-small-1.png"
                                        className="icon-image"
                                        alt="Education"
                                      />
                                    </span>
                                    <div className="block-right">
                                      {" "}
                                      <strong className="header">
                                        {" "}
                                        {ln["Education"]}
                                      </strong>
                                      <div className="descr" />
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className=" icon-image"
                                  data-mh="ltx-block-icon-li-1003"
                                >
                                  <div
                                    data-mh="ltx-block-icon-in-1003"
                                    className=""
                                  >
                                    <span
                                      className="icon icon-image matchHeight"
                                      data-mh="ltx-icon-span-"
                                    >
                                      <img
                                        src="img/cards-icon-small-2.png"
                                        className="icon-image"
                                        alt="Travel"
                                      />
                                    </span>
                                    <div className="block-right">
                                      {" "}
                                      <strong className="header">
                                        {" "}
                                        {ln["Travel"]}
                                      </strong>
                                      <div className="descr" />
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className=" icon-image"
                                  data-mh="ltx-block-icon-li-1003"
                                >
                                  <div
                                    data-mh="ltx-block-icon-in-1003"
                                    className=""
                                  >
                                    <span
                                      className="icon icon-image matchHeight"
                                      data-mh="ltx-icon-span-"
                                    >
                                      <img
                                        src="img/cards-icon-small-3.png"
                                        className="icon-image"
                                        alt="Shopping"
                                      />
                                    </span>
                                    <div className="block-right">
                                      {" "}
                                      <strong className="header">
                                        {" "}
                                        {ln["Shopping"]}
                                      </strong>
                                      <div className="descr" />
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className=" icon-image"
                                  data-mh="ltx-block-icon-li-1003"
                                >
                                  <div
                                    data-mh="ltx-block-icon-in-1003"
                                    className=""
                                  >
                                    <span
                                      className="icon icon-image matchHeight"
                                      data-mh="ltx-icon-span-"
                                    >
                                      <img
                                        src="img/cards-icon-small-4.png"
                                        className="icon-image"
                                        alt="Medicine"
                                      />
                                    </span>
                                    <div className="block-right">
                                      {" "}
                                      <strong className="header">
                                        {" "}
                                        {ln["Medicine"]}
                                      </strong>
                                      <div className="descr" />
                                    </div>
                                  </div>
                                </li>
                              </ul>
                              <div className="es-resp">
                                <div
                                  className="visible-xl"
                                  style={{ height: "32px" }}
                                />
                                <div
                                  className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"
                                  style={{ height: "32px" }}
                                />
                                <div
                                  className="visible-md"
                                  style={{ height: "32px" }}
                                />
                                <div
                                  className="visible-sm "
                                  style={{ height: "32px" }}
                                />
                                <div
                                  className="visible-ms"
                                  style={{ height: "32px" }}
                                />
                                <div
                                  className="visible-xs"
                                  style={{ height: "32px" }}
                                />
                              </div>
                              <div className="btn-wrap">
                                <a
                                  href="#"
                                  className="btn  btn-default transform-default color-text-default color-hover-default"
                                  id="like_sc_button_1248501390"
                                >
                                  {ln["more"]}
                                </a>
                              </div>
                              <div className="es-resp">
                                <div
                                  className="visible-xl"
                                  style={{ height: "90px" }}
                                />
                                <div
                                  className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"
                                  style={{ height: "90px" }}
                                />
                                <div
                                  className="visible-md"
                                  style={{ height: "90px" }}
                                />
                                <div
                                  className="visible-sm "
                                  style={{ height: "90px" }}
                                />
                                <div
                                  className="visible-ms"
                                  style={{ height: "45px" }}
                                />
                                <div
                                  className="visible-xs"
                                  style={{ height: "45px" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-6 vc_hidden-sm vc_hidden-xs">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper" />
                          </div>
                        </div>
                      </div>
                    </section>
                    <div className="vc_row-full-width vc_clearfix" />
                    <section
                      data-vc-full-width="true"
                      data-vc-full-width-init="false"
                      className="vc_section"

                    >
                      <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="es-resp">
                                <div
                                  className="visible-xl"
                                  style={{ height: "40px" }}
                                />
                                <div
                                  className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"
                                  style={{ height: "40px" }}
                                />
                                <div
                                  className="visible-md"
                                  style={{ height: "40px" }}
                                />
                                <div
                                  className="visible-sm "
                                  style={{ height: "40px" }}
                                />
                                <div
                                  className="visible-ms"
                                  style={{ height: "16px" }}
                                />
                                <div
                                  className="visible-xs"
                                  style={{ height: "16px" }}
                                />
                              </div>
                              <div
                                className="heading  header-underline align-center color-black transform-default   vc_custom_1518894148622"
                                id="like_sc_header_175783431"
                              >
                                <h3 className="header">
                                  {ln["select"]}
                                  <br /> учитывая ваши{" "}
                                  <span>личные потребности</span>
                                </h3>
                              </div>
                              <div
                                className="ltx-content-width col-align-center"
                                style={{ maxWidth: "760px" }}
                              >
                                <div className="wpb_text_column wpb_content_element ">
                                  <div className="wpb_wrapper">
                                    <p style={{ textAlign: "center" }}>
                                      {ln["easy"]}{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="es-resp">
                                <div
                                  className="visible-xl"
                                  style={{ height: "24px" }}
                                />
                                <div
                                  className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"
                                  style={{ height: "24px" }}
                                />
                                <div
                                  className="visible-md"
                                  style={{ height: "24px" }}
                                />
                                <div
                                  className="visible-sm "
                                  style={{ height: "24px" }}
                                />
                                <div
                                  className="visible-ms"
                                  style={{ height: "16px" }}
                                />
                                <div
                                  className="visible-xs"
                                  style={{ height: "16px" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-lg-3 vc_col-md-6 card-view">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="ltx-cards-sc  matchHeight"
                                id="like_sc_cards_165104661"
                                data-mh="cards-sc"
                              >
                                <div className="image">
                                  <img
                                    src="/img/uzcard.png"
                                    className="full-width"
                                    alt="&lt;span&gt; Gold &lt;/span&gt; credit card"
                                  />
                                </div>
                                <h5 className="header">
                                  {ln["cards"]} <span> UZCARD </span>
                                </h5>
                                <ul>
                                  <li>
                                    <span className="fa fa fa-calendar-check-o" />{" "}
                                    {ln["overdraft valid"]}
                                    <strong> 5 {ln["years"]} </strong>
                                  </li>
                                  <li>
                                    <span className="fa fa fa-percent" />{" "}
                                    {ln["rate"]} <strong>0% {ln["annum"]}</strong>
                                  </li>
                                  <li>
                                    <span className="fa fa fa-money" />{" "}
                                    {ln["maximum"]}:
                                  <strong>
                                      {" "}
                                      {ln["with no restrictions"]}{" "}
                                    </strong>
                                  </li>
                                </ul>
                                <ul
                                  style={{
                                    listStyle: "circle",
                                    textAlign: "justify"
                                  }}
                                >
                                  <li>{ln["Managing your money"]}</li>
                                  <li>{ln["Making cashless"]}</li>
                                  <li>{ln["Making payments"]}</li>
                                  <li>{ln["bank"]}</li>
                                  <li>{ln["Ability to activate SMS"]}</li>
                                  <li>{ln["In case of loss"]}</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                            {/* {window.localStorage.getItem('loggedStatus')?<div className="text-center">
                            <input
                              type="submit"
                              value={ln["Order your card now"]}
                              className="wpcf7-form-control wpcf7-submit"
                            />
                          </div>:''} */}
                        </div>
                        <div className="wpb_column vc_column_container vc_col-lg-3 vc_col-md-6 card-view">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="ltx-cards-sc  matchHeight"
                                id="like_sc_cards_850761918"
                                data-mh="cards-sc"
                              >
                                <div className="image">
                                  <img
                                    src="img/pensiya.png"
                                    className="full-width"
                                    alt="&lt;span&gt; Internet &lt;/span&gt; card"
                                  />
                                </div>
                                <h5 className="header">
                                  <span> {ln["overdraft"]} </span>
                                </h5>
                                <ul>
                                  <li>
                                    <span className="fa fa fa-calendar-check-o" />{" "}
                                    {ln["overdraft valid"]}
                                    <strong> 5 {ln["years"]} </strong>
                                  </li>
                                  <li>
                                    <span className="fa fa fa-percent" />{" "}
                                    {ln["rate"]}{" "}
                                    <strong>16% {ln["annum"]}</strong>
                                  </li>
                                  <li>
                                    <span className="fa fa fa-money" />{" "}
                                    {ln["maximum"]}
                                    <strong> 3-{ln["mp"]} </strong>
                                  </li>
                                </ul>
                                <ul
                                  style={{
                                    listStyle: "circle",
                                    textAlign: "justify"
                                  }}
                                >
                                  <li>{ln["uzcard__text"]}</li>
                                  <li>{ln["Cash withdrawals"]}</li>
                                  <li>{ln["monthly pension"]}</li>
                                  <li>{ln["Loan term"]}</li>
                                  <li>{ln["The interest rate "]}</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* {window.localStorage.getItem('loggedStatus')?<div className="text-center">
                            <input
                              type="submit"
                              value={ln["Order your card now"]}
                              className="wpcf7-form-control wpcf7-submit"
                            />
                          </div>:''} */}
                        </div>
                        <div className="wpb_column vc_column_container vc_col-lg-3 vc_col-md-6 card-view">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="ltx-cards-sc  matchHeight"
                                id="like_sc_cards_1783705044"
                                data-mh="cards-sc"
                              >
                                <div className="image">
                                  <img
                                    src="img/kredit.png"
                                    className="full-width"
                                    alt="&lt;span&gt; Prepaid &lt;/span&gt; card"
                                  />
                                </div>
                                <h5 className="header">
                                  <span> {ln["credit card"]} </span>
                                </h5>
                                <ul>
                                  <li>
                                    <span className="fa fa fa-calendar-check-o" />{" "}
                                    {ln["overdraft valid"]}
                                    <strong> 5 {ln["years"]}</strong>,{" "}
                                    {ln["credit line"]}
                                  </li>
                                  <li>
                                    <span className="fa fa fa-percent" />{" "}
                                    {ln["rate"]}:{" "}
                                    <strong>36% {ln["annum"]} </strong>
                                  </li>
                                  <li>
                                    <span className="fa fa fa-money" />{" "}
                                    {ln["maximum"]}:{" "}
                                    <strong>25-{ln["mp"]} </strong>
                                  </li>
                                </ul>
                                <ul
                                  style={{
                                    listStyle: "circle",
                                    textAlign: "justify"
                                  }}
                                >
                                  <li>{ln["Credit Card validity"]}</li>
                                  <li>{ln["Credit card holder"]}</li>
                                  <li>{ln["The possibility of interest"]}</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* {window.localStorage.getItem('loggedStatus')?<div className="text-center">
                            <input
                              type="submit"
                              value={ln["Order your card now"]}
                              className="wpcf7-form-control wpcf7-submit"
                            />
                          </div>:''} */}
                        </div>
                        <div className="wpb_column vc_column_container vc_col-lg-3 vc_col-md-6 card-view">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="ltx-cards-sc  matchHeight"
                                id="like_sc_cards_263303388"
                                data-mh="cards-sc"
                              >
                                <div className="image">
                                  <img
                                    src="img/rassrochka.png"
                                    className="full-width"
                                    alt="&lt;span&gt; Universal &lt;/span&gt; card"
                                  />
                                </div>
                                <h5 className="header">
                                  <span>
                                    {ln["cards"]} {ln["installment plan"]}{" "}
                                  </span>
                                </h5>
                                <ul>
                                  <li>
                                    <span className="fa fa fa-calendar-check-o" />{" "}
                                    {ln["overdraft valid"]}
                                    <strong> 5 {ln["years"]} </strong>,{" "}
                                    {ln["credit line"]}
                                  </li>
                                  <li>
                                    <span className="fa fa fa-percent" />{" "}
                                    {ln["rate"]} <strong>0% {ln["annum"]}</strong>
                                  </li>
                                  <li>
                                    <span className="fa fa fa-money" />{" "}
                                    {ln["maximum"]}:
                                  <strong>100-{ln["mp"]}</strong>
                                  </li>
                                </ul>
                                <ul
                                  style={{
                                    listStyle: "circle",
                                    textAlign: "justify"
                                  }}
                                >
                                  <li>{ln["Consumer Shopping"]}</li>
                                  <li>{ln["Repayment of the taken"]}</li>
                                  <li>{ln["The most important thing"]}</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {window.localStorage.getItem('loggedStatus')?<div className="text-center">
                            <Link to="/appeal"  className="appeal__link">
                              
                              {ln["Order your card now"]}
                             
                            </Link>
                          </div>:''}
                        </div>
                      </div>

                      <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="es-resp">
                                <div
                                  className="visible-xl"
                                  style={{ height: "64px" }}
                                />
                                <div
                                  className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"
                                  style={{ height: "48px" }}
                                />
                                <div
                                  className="visible-md"
                                  style={{ height: "48px" }}
                                />
                                <div
                                  className="visible-sm "
                                  style={{ height: "48px" }}
                                />
                                <div
                                  className="visible-ms"
                                  style={{ height: "32px" }}
                                />
                                <div
                                  className="visible-xs"
                                  style={{ height: "32px" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <div className="vc_row-full-width vc_clearfix" />

                    {localStorage.getItem('loggedStatus') ? '' : <Form />}
                    <div className="vc_row-full-width vc_clearfix" />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="popup__order">
        <span className="popup__close"> &times;</span>
              <div className="popup__order-content">
                  <h2 className="order__title">Siz {window.localStorage.getItem('loan')} - miqdordagi mablag'ni rassrochkaga olishingiz mumkin </h2>
                  <div className="text-center">
                  <button className="order__btn" onClick={this.appeal__rassrochka}>Tasdiqlash</button>
                  </div>
              </div>
        </div> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.lang.lang,
  ru: ru,
  en: en,
  uz: uz
});

export default connect(mapStateToProps)(Content);
