import React, { Component } from 'react';
import Header from './../components/header';
import Demo from './../components/demo';
import Content from './../components/content';
import Footer from './../components/footer';
export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Demo />
                <Content />
                <Footer />
            </div>
        )
    }
}
