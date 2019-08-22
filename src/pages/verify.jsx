import React, { Component } from 'react';
import Header from './../components/header';
import Footer from './../components/footer';

export default class Verify extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div style={{paddingTop:'250px',marginBottom:'250px'}}>
                    Verify page
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}
