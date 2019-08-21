import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Demo from './components/demo';
import './css/main.css';
import Content from './components/content';
import store from './redux/store';
import { Provider } from 'react-redux';
import {Switch,Route} from 'react-router';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Switch>

      </Switch>
        <Header />
        <Demo />
        <Content />
        <Footer />
     
      </Provider>
    )
  }
}
