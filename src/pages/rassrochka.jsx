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
            details: '',
            redirect:true,
            loader:true
        }
    }

    componentDidMount() {
        let data = {
            "data": {
                "docNum": `${window.localStorage.getItem('number')}`,
                "docSerial": `${window.localStorage.getItem('seria')}`
                // "docNum": "2136371",
                // "docSerial": "AA"
            }
        }
        
        Axios.post(`/index.php?planning_operation_card`, data)
            .then(response => {

                if (response.data.message === "success") {
                    this.setState({ chart: response.data.data.grafik, details: response.data.data,redirect:false,loader:false })
                }

                // if(this.state.redirect){
                //     history.push('/user')
                // }
            })
    }
    
    render() {
        if (!window.localStorage.getItem("loggedStatus")) {
            history.push('/')
        }
        // console.log(this.state.chart)
        const replaceCorrectInfo = (number) =>{

            if(number<0){
                number = -1*number/100;
            }else{
                number = number/100;
            }

          
            return number;
        }

        const replaceCorrectDate = (day) =>{
            
            return day.slice(0,10)
        }

        if(window.localStorage.getItem('product_r_status')==0){
            history.push('/user')
        }
       
        return (
            <React.Fragment>
                <Header />
                <div className="container">
               
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Rassrochka haqida ma'lumot</h2>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="rassrochka_info">
                                        <h4>Limit</h4>
                                        <p>{replaceCorrectInfo(this.state.details.limit)}</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                <div className="rassrochka_info">
                                    <h4>Qolgan summa</h4>
                                    <p>{replaceCorrectInfo(this.state.details.ostatok)}</p>
                                </div>
                                </div>
                                <div className="col-md-4">
                                <div className="rassrochka_info">
                                    <h4>Qarzdorlik</h4>
                                    <p>{replaceCorrectInfo(this.state.details.debt)}</p>
                                </div>
                                </div>
                            </div>
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th>Rassrochka miqdori</th>
                                        <th>Rassrochkani qaytarish muddati</th>
                                    </tr>
                                    <tr>
                                        <td>{replaceCorrectInfo(this.state.details.limit)}</td>
                                        <td> 6 oy </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-12">
                            <h2>To'lov grafigi</h2>
                        </div>
                        <div className="col-md-12">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>To'lov vaqti</th>
                                        <th>To'lov miqdori</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {this.state.chart.map(chart =>
                                        <tr key={chart.OBLIGATE_NUMBER}>
                                            <td>{replaceCorrectDate(chart.DATE_RED)}</td>
                                            <td>{ replaceCorrectInfo(chart.SUMM_RED)}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Footer />
                {this.state.loader &&  <div className="loader">
                    <img src="/img/loader.gif" alt=""/>
                </div>}
            </React.Fragment>
        )
    }
}
