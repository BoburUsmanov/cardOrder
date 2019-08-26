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
            chart: '',
            limit: '',
            sum: '',
            debit: '',
            loader:true,
            redirect:true
        }
    }

    componentDidMount() {
        let data = {
            "data": {
                "docNum": `${window.localStorage.getItem('number')}`,
                "docSerial": `${window.localStorage.getItem('seria')}`,
                // "docNum": "5630154",
                // "docSerial": "AA",
                "branch": "01125"
            }
        }
        Axios.post(`/index.php?credit_info`, data)
            .then(response => {
                if (response.data.message === "success") {
                    this.setState({ chart: response.data.data.grafik, limit: response.data.data.limit, sum: response.data.data.sum_loan, debit: response.data.data.debit,loader:false,redirect:false })
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

            if(window.localStorage.getItem('product_c_status')==0){
                    history.push('/user')
                }

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
        return (
            <React.Fragment>
                <Header />
                <div className="container">
                    <h2>Kredit info</h2>
                    <table className="table table-bordered table-stripped">
                        <thead>
                            <tr>
                                <th>Summa</th>
                                <th>Debit</th>
                                <th>Limit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {replaceCorrectInfo(this.state.sum)}
                                </td>
                                <td>
                                    {replaceCorrectInfo(this.state.debit)}
                                </td>
                                <td>
                                    {replaceCorrectInfo(this.state.limit)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h2>Kredit to'lash grafigi</h2>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <td>To'lash muddati</td>
                                <td>To'lov miqdori</td>
                            </tr>
                            <tr>
                                <td>{replaceCorrectDate(this.state.chart.red_date)}</td>
                                <td>{replaceCorrectInfo(this.state.chart.sum)}</td>
                            </tr>
                            </thead>      
                    </table>
                </div>
                <Footer />
                {this.state.loader &&  <div className="loader">
                    <img src="/img/loader.gif" alt=""/>
                </div>}
            </React.Fragment>
        )
    }
}
