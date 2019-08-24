import React, { Component } from "react";
import { user_entered } from "./../redux/actions/actions";
import { connect } from "react-redux";
import { reactLocalStorage } from "reactjs-localstorage";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import Header from "./../components/header";
import Content from "../components/content";
import Footer from "../components/footer";
import { en } from "../lang/en";
import { ru } from "../lang/ru";
import { uz } from "../lang/uz";
import Demo from "./../components/demo";
import $ from 'jquery'

class User extends Component {
	constructor(props) {
		super(props);
		let rememberMe = localStorage.getItem("rememberMe");
		this.state = {
			rememberMe: rememberMe
		};
	}

	componentDidMount() {
		if (this.props.entered === 0) {
			localStorage.setItem("rememberMe", true);
		}

		console.log(localStorage.getItem("rememberMe"));

		$(document).ready(function() {
			$(".menu-item a").on("click", function(event) {
				if (this.hash !== "") {
					event.preventDefault();
					var hash = this.hash;
					$("html, body").animate(
						{
							scrollTop: $(hash).offset().top - 100
						},
						500,
						function() {
							return false;
						}
					);
				}
			});
		});
	}

	render() {
		if (!localStorage.getItem("rememberMe")) {
			return <Redirect to="/" />;
		}

		var ln;
		if (this.props.lang === "ru") {
			ln = this.props.ru;
		} else if (this.props.lang === "uz") {
			ln = this.props.uz;
		} else {
			ln = this.props.en;
		}

		return (
			<div>
				<Header />
				<div className="user-main">
					{/* <Demo /> */}
					<Content />
					<div className="container main-wrapper">
						<div className="vc_row wpb_row vc_row-fluid card-offer-btn">
							<div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-6">
								<input
									type="submit"
									value={ln["Order your card now"]}
									className="wpcf7-form-control wpcf7-submit"
								/>
							</div>
							<div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-6">
								<input
									type="submit"
									value={ln["Order your card now"]}
									className="wpcf7-form-control wpcf7-submit"
								/>
							</div>
							<div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-6">
								<input
									type="submit"
									value={ln["Order your card now"]}
									className="wpcf7-form-control wpcf7-submit"
								/>
							</div>
							<div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-6">
								<input
									type="submit"
									value={ln["Order your card now"]}
									className="wpcf7-form-control wpcf7-submit"
								/>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
const mapStateToProps = state => ({
	entered: state.session.session.status,
	lang: state.lang.lang,
	number: state.phone.number,
	ru: ru,
	en: en,
	uz: uz
});

export default connect(
	mapStateToProps,
	{ user_entered }
)(User);
