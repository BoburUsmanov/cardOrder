import React, { Component } from 'react';
import localStorage from 'reactjs-localstorage';
import history from './../history'
import Header from './../components/header'
import Footer from './../components/footer'

export default class Credit extends Component {
    render() {
        if (!window.localStorage.getItem("loggedStatus")) {
            history.push('/')
        }
        return (
            <React.Fragment>
                <Header />
                <div>
                    Credit info
       </div>
                <Footer />
            </React.Fragment>
        )
    }
}
