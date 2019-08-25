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
import $ from 'jquery';
import history from './../history'

class User extends Component {


	componentDidMount() {

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

		if (!window.localStorage.getItem("loggedStatus")) {
			history.push('/')
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
					<Content />
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
