import React, { Component } from 'react';
import localStorage from 'reactjs-localstorage';
import history from './../history'
import Header from './../components/header'
import Footer from './../components/footer'
import Axios from 'axios'

export default class Credit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chart: [],
            details:''
        }
    }

    componentDidMount() {
        let data = {
            "data": {
                "docNum": "2136371",
                "docSerial": "AA",
                "branch": "00883"
            }
        }
        Axios.post(`/index.php?credit_info`, data)
            .then(response => {
                this.setState({ chart: response.data.data.grafik,details: response.data.data.limit })
            })
    }
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
