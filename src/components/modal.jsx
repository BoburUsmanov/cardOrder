import React, { Component } from 'react';
import {connect}  from 'react-redux'
import {en} from '../lang/en'
import {ru} from '../lang/ru'
import {uz} from '../lang/uz'

 class Modal extends Component {
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
      <div className='modal'>
        <button type="button">&times;</button>
        <div className="modal-overlay"></div> 
        <img src={ln['modalImg']} alt=""/>
      </div>
    );
  }
}
const mapStateToProps = state =>({
    lang:state.lang.lang,
    en:en,
    uz:uz,
    ru:ru
})
export default connect(mapStateToProps)(Modal)