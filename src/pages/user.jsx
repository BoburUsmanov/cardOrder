import React, { Component } from "react";
import { user_entered } from "./../redux/actions/actions";
import { connect } from "react-redux";
import { reactLocalStorage } from "reactjs-localstorage";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import Header from "./../components/header";
import Content from '../components/content'
import Footer from '../components/footer';
import {en} from '../lang/en'
import {ru} from "../lang/ru"
import {uz} from '../lang/uz'

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
	}

	render() {
		const logout = e => {
			localStorage.clear();
		};

		// if (!localStorage.getItem('rememberMe')) {
		//   return <Redirect to="/" />;
		// }

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
					<Link to="/" className="reload" onClick={logout}>
						Logout
					</Link>
					<Content />
					{/* <div className="container-fluid">
						<div className="row">
							<div className="col-md-9">
								<section data-vc-full-width="true" data-vc-full-width-init="false" className="vc_section">
									<div className="vc_row wpb_row vc_row-fluid">
										<div className="wpb_column vc_column_container vc_col-sm-12">
											<div className="vc_column-inner">
												<div className="wpb_wrapper">
													<div className="es-resp">
														<div className="visible-xl" style={{ height: "40px" }}/>
														<div className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs" style={{ height: "40px" }} />
														<div className="visible-md" style={{ height: "40px" }} />
														<div className="visible-sm " style={{ height: "40px" }}/>
														<div
															className="visible-ms"
															style={{ height: "16px" }}
														/>
														<div
															className="visible-xs"
															style={{ height: "16px" }}
														/>
													</div>
													<div
														className="heading  header-underline align-center color-black transform-default   vc_custom_1518894148622"
														id="like_sc_header_175783431"
													>
														<h3 className="header">
															{ln["select"]}
															<br /> учитывая ваши{" "}
															<span>личные потребности</span>
														</h3>
													</div>
													<div
														className="ltx-content-width col-align-center"
														style={{ maxWidth: "760px" }}
													>
														<div className="wpb_text_column wpb_content_element ">
															<div className="wpb_wrapper">
																<p style={{ textAlign: "center" }}>
																	{ln["easy"]}{" "}
																</p>
															</div>
														</div>
													</div>
													<div className="es-resp">
														<div
															className="visible-xl"
															style={{ height: "24px" }}
														/>
														<div
															className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"
															style={{ height: "24px" }}
														/>
														<div
															className="visible-md"
															style={{ height: "24px" }}
														/>
														<div
															className="visible-sm "
															style={{ height: "24px" }}
														/>
														<div
															className="visible-ms"
															style={{ height: "16px" }}
														/>
														<div
															className="visible-xs"
															style={{ height: "16px" }}
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="vc_row wpb_row vc_row-fluid">
										<div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-6">
											<div className="vc_column-inner">
												<div className="wpb_wrapper">
													<div
														className="ltx-cards-sc  matchHeight"
														id="like_sc_cards_165104661"
														data-mh="cards-sc"
													>
														<div className="image">
															<img
																src="/img/uzcard.png"
																className="full-width"
																alt="&lt;span&gt; Gold &lt;/span&gt; credit card"
															/>
														</div>
														<h5 className="header">
															{ln["cards"]} <span> UZCARD </span>
														</h5>
														<ul>
															<li>
																<span className="fa fa fa-calendar-check-o" />{" "}
																{ln["overdraft valid"]}
																<strong> 5 {ln["years"]} </strong>
															</li>
															<li>
																<span className="fa fa fa-percent" />{" "}
																{ln["rate"]} <strong>0% {ln["annum"]}</strong>
															</li>
															<li>
																<span className="fa fa fa-money" />{" "}
																{ln["maximum"]}:
																<strong> {ln["with no restrictions"]} </strong>
															</li>
														</ul>
														<ul
															style={{
																listStyle: "circle",
																textAlign: "justify"
															}}
														>
															<li>{ln["Managing your money"]}</li>
															<li>{ln["Making cashless"]}</li>
															<li>{ln["Making payments"]}</li>
															<li>{ln["bank"]}</li>
															<li>{ln["Ability to activate SMS"]}</li>
															<li>{ln["In case of loss"]}</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-6">
											<div className="vc_column-inner">
												<div className="wpb_wrapper">
													<div
														className="ltx-cards-sc  matchHeight"
														id="like_sc_cards_850761918"
														data-mh="cards-sc"
													>
														<div className="image">
															<img
																src="img/pensiya.png"
																className="full-width"
																alt="&lt;span&gt; Internet &lt;/span&gt; card"
															/>
														</div>
														<h5 className="header">
															<span> {ln["overdraft"]} </span>
														</h5>
														<ul>
															<li>
																<span className="fa fa fa-calendar-check-o" />{" "}
																{ln["overdraft valid"]}
																<strong> 5 {ln["years"]} </strong>
															</li>
															<li>
																<span className="fa fa fa-percent" />{" "}
																{ln["rate"]} <strong>16% {ln["annum"]}</strong>
															</li>
															<li>
																<span className="fa fa fa-money" />{" "}
																{ln["maximum"]}
																<strong> 3-{ln["mp"]} </strong>
															</li>
														</ul>
														<ul
															style={{
																listStyle: "circle",
																textAlign: "justify"
															}}
														>
															<li>{ln["uzcard__text"]}</li>
															<li>{ln["Cash withdrawals"]}</li>
															<li>{ln["monthly pension"]}</li>
															<li>{ln["Loan term"]}</li>
															<li>{ln["The interest rate "]}</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-6">
											<div className="vc_column-inner">
												<div className="wpb_wrapper">
													<div
														className="ltx-cards-sc  matchHeight"
														id="like_sc_cards_1783705044"
														data-mh="cards-sc"
													>
														<div className="image">
															<img
																src="img/kredit.png"
																className="full-width"
																alt="&lt;span&gt; Prepaid &lt;/span&gt; card"
															/>
														</div>
														<h5 className="header">
															<span> {ln["credit card"]} </span>
														</h5>
														<ul>
															<li>
																<span className="fa fa fa-calendar-check-o" />{" "}
																{ln["overdraft valid"]}
																<strong> 5 {ln["years"]}</strong>,{" "}
																{ln["credit line"]}
															</li>
															<li>
																<span className="fa fa fa-percent" />{" "}
																{ln["rate"]}:{" "}
																<strong>36% {ln["annum"]} </strong>
															</li>
															<li>
																<span className="fa fa fa-money" />{" "}
																{ln["maximum"]}: <strong>25-{ln["mp"]} </strong>
															</li>
														</ul>
														<ul
															style={{
																listStyle: "circle",
																textAlign: "justify"
															}}
														>
															<li>{ln["Credit Card validity"]}</li>
															<li>{ln["Credit card holder"]}</li>
															<li>{ln["The possibility of interest"]}</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-6">
											<div className="vc_column-inner">
												<div className="wpb_wrapper">
													<div
														className="ltx-cards-sc  matchHeight"
														id="like_sc_cards_263303388"
														data-mh="cards-sc"
													>
														<div className="image">
															<img
																src="img/rassrochka.png"
																className="full-width"
																alt="&lt;span&gt; Universal &lt;/span&gt; card"
															/>
														</div>
														<h5 className="header">
															<span>
																{ln["cards"]} {ln["installment plan"]}{" "}
															</span>
														</h5>
														<ul>
															<li>
																<span className="fa fa fa-calendar-check-o" />{" "}
																{ln["overdraft valid"]}
																<strong> 5 {ln["years"]} </strong>,{" "}
																{ln["credit line"]}
															</li>
															<li>
																<span className="fa fa fa-percent" />{" "}
																{ln["rate"]} <strong>0% {ln["annum"]}</strong>
															</li>
															<li>
																<span className="fa fa fa-money" />{" "}
																{ln["maximum"]}:<strong>100-{ln["mp"]}</strong>
															</li>
														</ul>
														<ul
															style={{
																listStyle: "circle",
																textAlign: "justify"
															}}
														>
															<li>{ln["Consumer Shopping"]}</li>
															<li>{ln["Repayment of the taken"]}</li>
															<li>{ln["The most important thing"]}</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>

									
                                    <div className="vc_row wpb_row vc_row-fluid card-offer-btn">
                                        <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-6">
                                            <input type="submit" value={ln["Order your card now"]} className="wpcf7-form-control wpcf7-submit" />
                                        </div>
                                        <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-6">
                                            <input type="submit" value={ln["Order your card now"]} className="wpcf7-form-control wpcf7-submit" />
                                        </div>
                                        <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-6">
                                            <input type="submit" value={ln["Order your card now"]} className="wpcf7-form-control wpcf7-submit" />
                                        </div>
                                        <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-6">
                                            <input type="submit" value={ln["Order your card now"]} className="wpcf7-form-control wpcf7-submit" />
                                        </div>
                                    </div>
                                </section>
								<div className="vc_row-full-width vc_clearfix" />
							</div>
							<div className="col-md-3">
                                <div className="card">
                                    <div className="card-header">
                                        <img src="/img/logo.png" alt="logo"/>
                                    </div>
                                    <div className="card-body">
                                        <img src="/img/user.svg" alt=""/>
                                        <div className="userInfo">
                                            <p>Name: ldkfndkn</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
						</div>
					</div>
                 */}
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
				<Footer />
			</div>
		);
	}
}
const mapStateToProps = state => ({
	entered: state.session.session.status,
	lang: state.lang.lang,
	ru: ru,
	en: en,
	uz: uz
});

export default connect(
	mapStateToProps,
	{ user_entered }
)(User);
