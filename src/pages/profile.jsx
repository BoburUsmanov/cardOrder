import React, { Component } from "react";
import Header from "../components/header";
import { connect } from "react-redux";
import Footer from "../components/footer";
import { en } from "../lang/en";
import { ru } from "../lang/ru";
import { uz } from "../lang/uz";
import { reactLocalStorage } from "reactjs-localstorage";
import { Redirect } from "react-router";
import { user_info } from "./../redux/actions/actions";
import $ from "jquery";
import history from "./../history";
import { Link } from "react-router-dom";
import { rassrochka_info, credit_info } from "./../redux/actions/actions";

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inps: [],
			document: []
		};
	}

	credit_info = () => {
		this.props.rassrochka_info();
	};
	componentDidMount() {
		this.parsing();
		$(document).ready(function() {
			$("#profileCardHeader").mousemove(function(event) {
				var moveX = ($(window).width() / 2 - event.pageX) * 0.03;
				var moveY = ($(window).height() / 2 - event.pageY) * 0.03;
				$("#profileCardImg").css("margin-left", moveX + "px");
				$("#profileCardImg").css("margin-top", moveY + "px");
			});

			var movementStrength = 25;
			var height = movementStrength / $(window).height();
			var width = movementStrength / $(window).width();

			$(".card-header").mousemove(function(e) {
				var pageX = e.pageX - $(window).width() / 2;
				var pageY = e.pageY - $(window).height() / 2;
				var newvalueX = width * -pageX * -1 - 25;
				var newvalueY = height * -pageY * -1 - 50;
				$(".card-header").css(
					"background-position",
					newvalueX + "px     " + newvalueY + "px"
				);
			});
		});
		$('.cardFlip').on('hover', function(){
			$(this).addClass('flip');
		})
	}

	parsing = () => {
		this.setState({ inps: JSON.parse(localStorage.getItem("info")).inps });
		this.setState({
			document: JSON.parse(localStorage.getItem("info")).document
		});
		this.setState({
			product: JSON.parse(localStorage.getItem("info")).product
		});
		localStorage.setItem(
			"loan",
			JSON.parse(localStorage.getItem("info")).loan_sum
		);
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

		if (!window.localStorage.getItem("loggedStatus")) {
			history.push("/");
		}
		return (
			<div className="profile">
				<Header />
				<div className="container-fluid">
					<div className="row">
						<div className="card">
							<div className="card-header" id="profileCardHeader">
								<img id="profileCardImg" src="/img/logo.png" alt="logo" />
								{/* <img src="/img/card-bg.jpg" id="card-bg" alt="" /> */}
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="profile-inner animated fadeIn">
								<img id="user-img" src="/img/user.svg" alt="" />
								<div className="card">
									<div className="card-body">
										<div className="row">
											<div className="col-md-9">
												<div className="userInfo">
													<div className="row">
														<div className="col-md-12">
															<div className="userName">
																{this.state.inps.map(m => (
																	<div key={m.doc_seria + m.doc_number}>
																		<span>
																			{" "}
																			{`${m.last_name} ${m.first_name} ${m.middle_name}`}{" "}
																		</span>
																	</div>
																))}
															</div>
														</div>
													</div>
													<hr />

													<div className="row">
														<div className="col-md-6 col-sm-6">
															<span className="fa fa-id-card"></span>{" "}
															{ln["pin"]}
														</div>
														<div className="col-md-6 bold">
															{this.state.inps.map(m => (
																<div key={m.doc_number}>
																	<span> {`${m.id}`} </span>
																</div>
															))}
														</div>
													</div>

													<hr />

													<div className="row">
														<div className="col-md-6 col-sm-6">
															<span className="fa fa-id-card"></span>
															{ln["doc_seria_lang"]}
														</div>
														<div className="col-md-6 bold">
															{this.state.inps.map(m => (
																<div key={m.doc_number}>
																	<span>
																		{" "}
																		{`${m.doc_seria} ${m.doc_number}`}{" "}
																	</span>
																</div>
															))}
														</div>
													</div>
													<hr />

													<div className="row">
														<div className="col-md-6 col-sm-6">
															<span className="fa fa-id-card"></span>
															{ln["date_begin_document"]}
														</div>
														<div className="col-md-6 bold">
															{this.state.document.map(m => (
																<div key={m.document}>
																	<span key={m.document}> {`${m.date_begin_document}`} </span>
																</div>
															))}
														</div>
													</div>
													<hr />

													<div className="row">
														<div className="col-md-6 col-sm-6">
															<span className="fa fa-id-card"></span>
															{ln["date_end_document"]}
														</div>
														<div className="col-md-6 bold">
															{this.state.document.map(m => (
																<div key={m.document}>
																	<span key={m.document}> {`${m.date_end_document}`} </span>
																</div>
															))}
														</div>
													</div>

													<hr />

													<div className="row">
														<div className="col-md-6 col-sm-6">
															<span className="fa fa-university"></span>{" "}
															{ln["who_gave_passport"]}
														</div>
														<div className="col-md-6 bold">
															{this.state.document.map(m => (
																<div key={m.document}>
																	<span> {m.doc_give_place} </span>
																</div>
															))}
														</div>
													</div>

													<hr />
													<div className="row">
														<div className="col-md-6 col-sm-6">
															<span className="fa fa-calendar"></span>{" "}
															{ln["user_birthday"]}
														</div>
														<div className="col-md-6 bold">
															{this.state.inps.map(m => (
																<div key={m.doc_number}>
																	<span> {m.birth_date} </span>
																</div>
															))}
														</div>
													</div>

													<hr />

													<div className="row">
														<div className="col-md-6 col-sm-6">
															<span className="fa fa-calendar"></span>
															{ln["pension_accumulative_date"]}
														</div>
														<div className="col-md-6 bold">
															{this.state.inps.map(m => (
																<div key={m.doc_number}>
																	<span> {m.creation_date} </span>
																</div>
															))}
														</div>
													</div>

													<hr />

													<div className="row">
														<div className="col-md-6 col-sm-6">
															<span className="fa fa-university"></span>
															{ln["bank_branch_and_mfo"]}
														</div>
														<div className="col-md-6 bold">
															{this.state.inps.map(m => (
																<div key={m.doc_number}>
																	<span>
																		{" "}
																		{`${m.filial}-${m.filial_name}`}{" "}
																	</span>
																</div>
															))}
														</div>
													</div>

													<hr />
												</div>
											</div>
											<div className="col-md-3">
												<div className="links text-right">
													<h4>{ln['myCard_title']}</h4>
													{this.state.product?this.state.product.map(card=>
													<React.Fragment>
														<Link to="/rassrochka"
														onClick={this.rassrochka_info}
														className="animated cardFlip"
														>
														{card.product_id==="120" && <img src="/img/rassrochka.png " />}
														</Link>
														<Link className="animated cardFlip">
															{card.product_id==="100" && <img src="/img/uzcard.png " />}
														</Link>
														<Link to="/credit"
															onClick={this.credit_info}
															className="animated cardFlip"
															>
															{card.product_id==="140" && <img src="/img/kredit.png " />}
														</Link>
													</React.Fragment>
													)
													:'karta yuq'}
												</div>
											</div>
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

export default connect(
	mapStateToProps,
	{ user_info, rassrochka_info, credit_info }
)(Profile);
