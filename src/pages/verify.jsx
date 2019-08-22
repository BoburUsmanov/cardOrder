import React, { Component } from 'react';
import Header from './../components/header';
import Footer from './../components/footer';
import {connect} from 'react-redux';
import {en} from '../lang/en'
import {ru} from '../lang/ru'
import {uz} from '../lang/uz'
import {get_code,session_id} from './../redux/actions/actions';
import { Redirect } from "react-router";



class Verify extends Component {

    getCode = (e) => {
        this.props.get_code(e.target.value) 
    }

    getUserData = (e) => {
        this.props.session_id(this.props.code,this.props.data)
    }
    render() {
        var ln;
        if (this.props.lang === "ru") {
            ln = this.props.ru;
        } else if (this.props.lang === "uz") {
            ln = this.props.uz;
        } else {
            ln = this.props.en;
        }

        if (this.props.status === 0) {
            return <Redirect to="/user" />;
          }

        return (
            <React.Fragment>
                <Header />
                <div className="Verify">
                    <div className="innerBlock">
                        <div className="row">
                            <div className="col-md-12">
                                <h3>+998 {this.props.number}</h3>
                                <p>{ln['confirmDesc']} </p>
                                <input type="number" onChange={this.getCode} value={this.props.code} className="form-control confirmCode" placeholder={ln['verificationCode']}/>
                                <div>
                                    <button onClick={this.getUserData} className="btn btn-success">{ln['confirmBtn']}</button>
                                    <button className="btn btn-danger">{ln['cancelBtn']}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    lang:state.lang.lang,
    number:state.phone.number,
    en:en,
    uz:uz,
    ru:ru,
    code:state.code.code,
    data:state.response.response.data,
    status:state.session.session.status
})
export default connect(mapStateToProps,{get_code,session_id})(Verify)