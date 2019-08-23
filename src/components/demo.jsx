import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { ru } from "./../lang/ru";
import { uz } from "./../lang/uz";
import { en } from "./../lang/en";

class Demo extends Component {
  componentDidMount() {
    // alert(this.props.lang)
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
      <div className="demo">
        <div style={{ position: "absolute", bottom: 0 }}>
          <img src="/img/Rectangle1.png" style={{ width: "100%" }} alt="" />
        </div>
        <div className="slider owl-carousel">
          <div className="demo__item uzcard">
            <h1 className="demo__overlay">Uzcard</h1>flphklptopthkpl
            <h2 className="demo__title "> UZCARD</h2>

            <h3 className="demo__subtitle">{ln['uzcard__subtitle']}</h3>

            <p className="demo__text">
             {ln['uzcard__text']}
            </p>
            <img className="demo__img" src="/img/uzcard.png" alt="" />
          </div>

          <div className="demo__item">
            <h1 className="demo__overlay">{ln['installment plan']}</h1>
            <h2 className="demo__title "> {ln['installment plan']}</h2>

            <h3 className="demo__subtitle">{ln['null']}</h3>

            <p className="demo__text">
             {ln['plan']}
            </p>
            <img className="demo__img" src="/img/rassrochka.png" alt="" />
          </div>

          <div className="demo__item">
            <h1 className="demo__overlay">{ln['credit card']}</h1>
            <h2 className="demo__title "> {ln['credit card']}</h2>

            <h3 className="demo__subtitle">{ln['30']}</h3>

            <p className="demo__text">
             {ln['grace__text']}
            </p>
            <img className="demo__img" src="/img/kredit.png" alt="" />
          </div>

          <div className="demo__item">
            <h1 className="demo__overlay">{ln['overdraft']}</h1>
            <h2 className="demo__title "> {ln['overdraft']}</h2>

            <h3 className="demo__subtitle">
             
              {ln['free']}
            </h3>

            <p className="demo__text">
              {ln['balance']}
            </p>
            <img className="demo__img" src="/img/pensiya.png" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.lang.lang,
  en: en,
  ru: ru,
  uz: uz
});

export default connect(mapStateToProps)(Demo);
