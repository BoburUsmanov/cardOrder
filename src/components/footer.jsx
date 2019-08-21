import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <section id="block-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-12 col-ms-12  matchHeight clearfix">
                  <div className="footer-widget-area">
                    <div id="media_image-3" className="widget widget_media_image"><img width="200" height="41"
                        src="/img/logo.png" className="image wp-image-3291  attachment-full size-full" alt=""
                        style={{maxWidth: '100%', height: 'auto'}} /></div>
                    <div id="text-4" className="widget widget_text">
                      <div className="textwidget">
                        <p style={{color:'#fff', paddingRight: '20px'}} >© 2019 Акционерный коммерческий Народный банк Республики
                          Узбекистан. <br />
                          Все права защищены.
                          При использовании материалов сайта ссылка на веб-сайт обязательна.</p>
                      </div>
                    </div>
        
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-ms-12 matchHeight clearfix">
                  <div className="footer-widget-area">
                    <div id="ltx_navmenu-2" className="widget widget_ltx_navmenu">
                      <h4 className="header-widget">Контакты</h4>
                    </div>
                    <div id="ltx_icons-3" className="widget widget_ltx_icons">
                      <ul className="social-icons-list">
                        <li><a href="#"><span className="fa fa-map-marker"></span>100096, г. Ташкент, Чиланзарский район, улица
                            Катартал, 46</a></li>
                        <li><a href="#"><span className="fa fa-phone"></span>+998 (71) 200-00-55</a></li>
                        <li><a href="#"><span className="fa fa-envelope"></span>info@xb.uz</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-ms-12 matchHeight clearfix">
                  <div className="footer-widget-area">
                    <div id="ltx_blogposts-2" className="widget widget_ltx_blogposts">
                      <h4 className="header-widget">Социальные сети</h4>
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
