import React, { Component } from "react";
import Header from "./../components/header";
import Footer from "./../components/footer";
import { connect } from "react-redux";
import { en } from "../lang/en";
import { ru } from "../lang/ru";
import { uz } from "../lang/uz";
import { get_code, session_id } from "./../redux/actions/actions";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import localStorage from 'reactjs-localstorage';
import history from './../history';

class Verify extends Component {
	constructor(props) {
		super(props)
		let number = window.localStorage.getItem('phone')
		this.state = {
			number: number
		}
	}
	getCode = e => {
		this.props.get_code(e.target.value);
	};

	getUserData = e => {
		this.props.session_id(this.props.code, this.props.data);
	};



	render() {
		var ln;
		if (this.props.lang === "ru") {
			ln = this.props.ru;
		} else if (this.props.lang === "uz") {
			ln = this.props.uz;
		} else {
			ln = this.props.en;
		}

		const replacePhoneNumbers = () => {
			var tele = [];
			if (this.state.number.length !== null) {
				for (var i = 0; i < this.state.number.length; i++) {
					if (i < 5) {
						tele[i] = this.state.number[i].replace(/^\d+$/, "*");
					}
					else {
						tele[i] = this.state.number[i];
					}
				}
			}

			var full_phone = "";
			if (this.state.number.length !== null) {
				for (var i = 0; i < this.state.number.length; i++) {
					full_phone += tele[i];
				}
			}
			return full_phone;
		}

		if (!window.localStorage.getItem('verifyStatus')) {
			history.push('/');
		}

		return (
			<React.Fragment>
				<Header />
				<div className="Verify">
					<div className="verify-bg">
					</div>
					<div className="innerBlock animated fadeIn">
						<div className="row">
							<div className="col-md-12">
								<h3>+998 {window.localStorage.getItem('verifyStatus') && replacePhoneNumbers(this.state.number)}</h3>
								<p>{ln["confirmDesc"]} </p>
								<input
									type="number"
									onChange={this.getCode}
									value={this.props.code}
									className="form-control confirmCode"
									placeholder={ln["verificationCode"]}
								/>
								<div>
									<button
										id="verifyLoad"
										onClick={this.getUserData}
										className="btn btn-success"
									>
										{ln["confirmBtn"]}
									</button>
									<Link to="/" className="btn btn-danger">{ln["cancelBtn"]}</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({
	lang: state.lang.lang,
	number: state.phone.number,
	en: en,
	uz: uz,
	ru: ru,
	code: state.code.code,
	data: state.response.response.data
});
export default connect(
	mapStateToProps,
	{ get_code, session_id }
)(Verify);
