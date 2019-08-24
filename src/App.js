import React, { Component } from "react";
import "./css/main.css";
import { Switch, Route } from "react-router";
import Home from "./pages/home";
import Verify from "./pages/verify";
import User from "./pages/user";
import Default from "./pages/default";
import Profile from './pages/profile';
import $ from 'jquery'
import { connect } from "react-redux";
import { Redirect } from "react-router";
import "./demo";

class App extends Component {
  constructor(props) {
    super(props)
    let rememberMe = localStorage.getItem('rememberMe');
    this.state = {
      remember: rememberMe
    };
  }

  
  componentDidMount() {
    $(document).ready(function () {
      $(".menu-item a").on("click", function (event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $("html, body").animate(
            {
              scrollTop: $(hash).offset().top - 100
            },
            500,
            function () {
              return false;
            }
          );
        }
      });

      var menuOpen = false;
      $(window).scroll(function () {
        if ($(window).innerWidth() > 576) {
          if (!menuOpen) {
            if ($(this).scrollTop() > 200) {
              $("nav.navbar #navbar").css({
                transition: "all .1s",
                height: "100%"
              });
              $("nav.navbar #navbar ul.navbar-nav>li>a").css("font-size", "14px");
              $("nav.navbar").css({
                transition: "all .1s",
                height: "60px",
                padding: "4px 0 0"
              });
              $("#logo").css({
                width: "60%",
                margin: "5px 0 0",
                padding: "10px"
              });
            } else {
              $("nav.navbar").css({
                transition: "all .1s",
                background: "#fff",
                height: "110px",
                padding: "8px 0"
              });
              $("#logo").css({
                width: "90%",
                margin: "10px",
                padding: "20px"
              });
              $("nav.navbar #navbar ul.navbar-nav>li>a").css("font-size", "16px");
            }
          } else {
            $("#navbar").css({
              height: "100%!important"
            });
          }
        }
      });

      

      $('.modal button').on('click', function () {
        $('.modal').fadeOut();
      });
      $('.questionBtn').on('click', function () {
        $('.modal').fadeIn();
      });
      $('.onFocusBtnShow input').on('focus', function () {
        $('.questionBtn').fadeIn();
      })
      $('.tel input').on('focus', function () {
        $('.questionBtn').fadeOut();
      })


      // $('.confirmCode').mask('999999');
      // $("#phone").inputmask("(99) 999-99-99", {showMaskOnFocus: true, showMaskOnHover: false,autoclear: false});

      // $('#reload').on('click',function(){
      //   location.reload();
      // })


    });


    $(document).on('load', function () {
      $('.innerBlock').fadeIn(3500);
    })
  }

  render() {







    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={this.state.remember ? User : Home} />
          <Route path="/verify" component={this.state.remember ? User : Verify} />
          <Route path="/user" component={User} />
          <Route path="/profile" component={Profile} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user.entered
});
export default connect(mapStateToProps)(App);
