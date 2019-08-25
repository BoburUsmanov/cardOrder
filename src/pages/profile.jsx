import React, { Component } from "react";
import Header from "../components/header";
import { connect } from "react-redux";
import Footer from "../components/footer";
import { en } from "../lang/en";
import { ru } from "../lang/ru";
import { uz } from "../lang/uz";
import { reactLocalStorage } from "reactjs-localstorage";
import { Redirect } from 'react-router';
import { user_info } from './../redux/actions/actions';
import $ from 'jquery';
import history from './../history'
import {Link} from 'react-router-dom'
import {rassrochka_info,credit_info} from './../redux/actions/actions';

class Profile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			inps: [],
			document: []
		}
	}

	credit_info = () =>{
		this.props.rassrochka_info()
	}
	componentDidMount() {
		this.parsing();
		$(document).ready(function () {

			$("#profileCardHeader").mousemove(function (event) {
				var moveX = ($(window).width() / 2 - event.pageX) * 0.03;
				var moveY = ($(window).height() / 2 - event.pageY) * 0.03;

				$("#profileCardImg").css("margin-left", moveX + "px");
				$("#profileCardImg").css("margin-top", moveY + "px");
			});
		});
	}

	parsing = () => {

		this.setState({ inps: JSON.parse(localStorage.getItem('info')).inps })
		this.setState({ document: JSON.parse(localStorage.getItem('info')).document })
		localStorage.setItem('loan',JSON.parse(localStorage.getItem('info')).loan_sum)
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

		if (!window.localStorage.getItem('loggedStatus')) {
			history.push('/')
		}
		return (
			<div className="profile">
				<Header />
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="profile-inner animated fadeIn">
								<div className="card">
									<div className="card-header" id="profileCardHeader">
										<img id="profileCardImg" src="/img/logo.png" alt="logo" />
									</div>
									<div className="card-body">
										<img src="/img/user.svg" alt="" />
										<div className="links text-right">
											<Link to="/rassrochka" onClick={this.rassrochka_info} className="link__info">Rassrochka</Link>
											<Link to="/credit" onClick={this.credit_info} className="link__info">Credit</Link>
										</div>
										<div className="userInfo">
											<div className="row">
												<div className="col-md-12">
													<p className="userName">{
														this.state.inps.map(m =>
															<div key={m.doc_number}>
																<span> {`${m.last_name} ${m.first_name} ${m.middle_name}`} </span>
															</div>
														)
													}</p>
												</div>
											</div>
											<hr />

											<div className="row">
												<div className="col-md-6">
													<span className="fa fa-id-card"></span>	Identifikatsion raqam
													</div>
												<div className="col-md-6 bold">
													{
														this.state.inps.map(m =>
															<div key={m.doc_number}>
																<span> {`${m.id}`} </span>
															</div>
														)
													}
												</div>
											</div>

											<hr />

											<div className="row">
												<div className="col-md-6">
													<span className="fa fa-id-card"></span>	Passport seriya
													</div>
												<div className="col-md-6 bold">
													{
														this.state.inps.map(m =>
															<div key={m.doc_number}>
																<span> {`${m.doc_seria} ${m.doc_number}`} </span>
															</div>
														)
													}
												</div>
											</div>

											<hr />

											<div className="row">
												<div className="col-md-6">
													<span className="fa fa-university"></span>	Passport kim tomonidan berilgan
													</div>
												<div className="col-md-6 bold">
													{
														this.state.document.map(m =>
															<div key={m.doc_number}>
																<span> {m.doc_give_place} </span>
															</div>
														)
													}
												</div>
											</div>

											<hr />
											<div className="row">
												<div className="col-md-6">
													<span className="fa fa-calendar"></span>	Tug'ilgan sanasi
													</div>
												<div className="col-md-6 bold">
													{
														this.state.inps.map(m =>
															<div key={m.doc_number}>
																<span> {m.birth_date} </span>
															</div>
														)
													}
												</div>
											</div>

											<hr />

												<div className="row">
												<div className="col-md-6">
													<span className="fa fa-calendar"></span>	Jamgʼarib boriladigan pensiya taʼminoti tizimida roʼyxatga olingan sana
													</div>
												<div className="col-md-6 bold">
													{
														this.state.inps.map(m =>
															<div key={m.doc_number}>
																<span> {m.creation_date} </span>
															</div>
														)
													}
												</div>
											</div>

											<hr />

												<div className="row">
												<div className="col-md-6">
													<span className="fa fa-university"></span>Roʼyxatga olingan bank filiali va MFO
													</div>
												<div className="col-md-6 bold">
													{
														this.state.inps.map(m =>
															<div key={m.doc_number}>
																<span> {`${m.filial}-${m.filial_name}`} </span>
															</div>
														)
													}
												</div>
											</div>

											<hr />

											

											
										</div>
									</div>
								</div>
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
	lang: state.lang.lang,
	en: en,
	uz: uz,
	ru: ru,
	info: state.info.info,
	profile: state.session.session.data
});

export default connect(mapStateToProps, { user_info,rassrochka_info,credit_info })(Profile);
