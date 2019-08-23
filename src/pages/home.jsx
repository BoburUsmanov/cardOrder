import React, { Component } from 'react';
import Header from './../components/header';
import Demo from './../components/demo';
import Content from './../components/content';
import Footer from './../components/footer';
import Modal from '../components/modal';
import { reactLocalStorage } from "reactjs-localstorage";
export default class Home extends Component {
    componentDidMount(){
      
    }
    render() {
        return (
            <div>
                <Header />
                {/* <Demo /> */}
                <Content />
                <Modal />
                <Footer />
            </div>
        )
    }
}
