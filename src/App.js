import React, { Component } from 'react';
import './css/main.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import {Switch,Route} from 'react-router';
import Home from './pages/home';
import Verify from './pages/verify';
import User from './pages/user';
import Default from './pages/default';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/verify" exact component={Verify} />
          <Route path="/user" exact component={User} />
          <Route  component={Default} />
      </Switch>
      </Provider>
    )
  }
}
