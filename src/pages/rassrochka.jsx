import React, { Component } from 'react';
import Header from './../components/header'
import Footer from './../components/footer'
import localStorage from 'reactjs-localstorage'
import history from './../history'

export default class Rassrochka extends Component {
    render() {
        if (!window.localStorage.getItem("loggedStatus")) {
			history.push('/')
		}
        return (
            <React.Fragment>
                <Header />
                <div>
                    Rassrochka info
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}
