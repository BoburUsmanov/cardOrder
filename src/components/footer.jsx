import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ru} from './../lang/ru';
import {uz} from './../lang/uz';
import {en} from './../lang/en';

 class Footer extends Component {
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
            <section id="block-footer" className="navbar-fixed-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-12 col-ms-12  matchHeight clearfix">
                  <div className="footer-widget-area">
                    <div id="media_image-3" className="widget widget_media_image"><img width="200" height="41"
                        src="/img/logo.png" className="image wp-image-3291  attachment-full size-full" alt=""
                        style={{maxWidth: '100%', height: 'auto'}} /></div>
                    <div id="text-4" className="widget widget_text">
                      <div className="textwidget">
                        <p style={{color:'#fff', paddingRight: '20px'}} >© 2019 {ln[ 'copyright']}</p>
                      </div>
                    </div>
        
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-ms-12 matchHeight clearfix">
                  <div className="footer-widget-area">
                    <div id="ltx_navmenu-2" className="widget widget_ltx_navmenu">
                      <h4 className="header-widget">{ln['contacts']}</h4>
                    </div>
                    <div id="ltx_icons-3" className="widget widget_ltx_icons">
                      <ul className="social-icons-list">
                        <li><a href="#"><span className="fa fa-map-marker"></span>{ln['address']}</a></li>
                        <li><a href="#"><span className="fa fa-phone"></span>+998 (71) 200-00-55</a></li>
                        <li><a href="#"><span className="fa fa-envelope"></span>info@xb.uz</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-ms-12 matchHeight clearfix">
                  <div className="footer-widget-area">
                    <div id="ltx_blogposts-2" className="widget widget_ltx_blogposts">
                      <h4 className="header-widget">{ln['social']}</h4>
                    </div>
                    <div id="ltx_icons-2" className="widget widget_ltx_icons">
                      <ul className="social-big font-headers">
                        <li><a href="https://t.me/xalqbankinfo" target="_blank" className="fa fa-telegram"></a></li>
                        <li><a href="https://www.facebook.com/xalqbanki/" target="_blank" className="fa fa-facebook"></a></li>
                        <li><a href="https://instagram.com/xalqbankinfo" target="_blank" className="fa fa-instagram"></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}

const mapStateToProps = state =>({
  lang:state.lang.lang,
  en:en,
  ru:ru,
  uz:uz
})
export default connect(mapStateToProps,{})(Footer)