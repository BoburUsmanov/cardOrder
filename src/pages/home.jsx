import React, { Component } from 'react';
import Header from './../components/header';
import Demo from './../components/demo';
import Content from './../components/content';
import Footer from './../components/footer';
import Modal from '../components/modal'
export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Demo />
                <Content />
                <Modal />
                <Footer />
            </div>
        )
    }
}
