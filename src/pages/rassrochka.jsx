import React, { Component } from 'react';
import Header from './../components/header'
import Footer from './../components/footer'
import localStorage from 'reactjs-localstorage'
import history from './../history'
import Axios from 'axios'

export default class Rassrochka extends Component {

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
                "docSerial": "AA"
            }
        }
        Axios.post(`/index.php?planning_operation_card`, data)
            .then(response => {
                this.setState({ chart: response.data.data.grafik,details: response.data.data.limit })
            })
    }
    render() {
        if (!window.localStorage.getItem("loggedStatus")) {
            history.push('/')
        }
        console.log(this.state.details)
        return (
            <React.Fragment>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Rassrochka haqida ma'lumot</h2>
                        </div>
                        <div className="col-md-12">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th>Rassrochka miqdori</th>
                                        <th>Rassrochkani qaytarish muddati</th>
                                    </tr>
                                    <tr>
                                        <td>{this.state.details}</td>
                                        <td>6 oy</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-12">
                            <h2>To'lov grafigi</h2>
                        </div>
                        <div className="col-md-12">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th>To'lov vaqti</th>
                                        <th>To'lov miqdori</th>
                                    </tr>
                                    {this.state.chart?this.state.chart.map(chart =>
                                <tr key={chart.obligateNumber}>
                                    <td key={chart.obligateNumber}>{chart.red_date}</td>
                                    <td key={chart.obligateNumber}>{chart.sum}</td>
                                </tr>    
                                ):'rassrochka berilmagan'}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}
