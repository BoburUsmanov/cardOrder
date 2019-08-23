import React, { Component } from "react";
import "./css/main.css";
import { Switch, Route } from "react-router";
import Home from "./pages/home";
import Verify from "./pages/verify";
import User from "./pages/user";
import Default from "./pages/default";
import { connect } from "react-redux";
import { Redirect } from "react-router";

class App extends Component {
  constructor(props){
    super(props)
    let rememberMe = localStorage.getItem('rememberMe');
    this.state = {
        remember: rememberMe
    };
  }
  render() {
  
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={this.state.remember?User:Home} />
          <Route path="/verify"  component={this.state.remember?User:Verify} />
          <Route path="/user"  component={User} />
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
