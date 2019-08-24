import React, { Component } from "react";
import { send_request, save_phone } from "./../redux/actions/actions";
import { connect } from "react-redux";
import { ru } from "./../lang/ru";
import { uz } from "./../lang/uz";
import { en } from "./../lang/en";
import { Redirect } from "react-router";

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inps: "",
			doc_number: "",
			doc_seria: "",
			phone: ""
		};
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();

		this.setState({ redirect: true });

		this.props.send_request(
			this.state.inps,
			this.state.doc_number,
			this.state.doc_seria,
			this.phoneTrim()
		);

		this.props.save_phone(this.phoneTrim());
		localStorage.setItem("phone", this.phoneTrim());
	};

	phoneTrim = () => {
		let newArr = [],
			str = document.querySelector(".phone").value,
			strArr = [...str],
			trimmedNumber = "";

		for (let i = 0; i < str.length; i++) {
			if (
				strArr[i].charAt() !== "-" &&
				strArr[i].charAt() !== "(" &&
				strArr[i].charAt() !== ")" &&
				strArr[i].charAt() !== " "
			) {
				newArr.push(strArr[i]);
			}
		}
		for (let i = 0; i < newArr.length; i++) {
			trimmedNumber += newArr[i];
		}

		return trimmedNumber;
	};

	render() {
		const toInputUppercase = e => {
			e.target.value = ("" + e.target.value).toUpperCase();
		};

		const validateNumber = event => {
			if (event.target.value.length > 7) {
				event.target.value = event.target.value.slice(0, 7);
			}
		};

		const validateInps = event => {
			if (event.target.value.length > 14) {
				event.target.value = event.target.value.slice(0, 14);
			}
		};

		var ln;
		if (this.props.lang === "ru") {
			ln = this.props.ru;
		} else if (this.props.lang === "uz") {
			ln = this.props.uz;
		} else {
			ln = this.props.en;
		}

		if (this.props.response.status === 0) {
			return <Redirect to="/verify" />;
		}

		return (
			<section
				data-vc-full-width="true"
				data-vc-full-width-init="false"
				data-vc-parallax="1.3"
				id="cardOffer"
				className="vc_section vc_custom_1518968543193 vc_section-has-fill vc_general vc_parallax vc_parallax-content-moving bg-color-black ltx-overlay bg-overlay-black"
			>
				<div className="ltx-overlay-black" />
				<div className="vc_row wpb_row vc_row-fluid">
					<div className="wpb_column vc_column_container vc_col-sm-12">
						<div className="vc_column-inner">
							<div className="wpb_wrapper">
								<div className="es-resp">
									<div className="visible-xl" style={{ height: "72px" }} />
									<div
										className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"
										style={{ height: "72px" }}
									/>
									<div className="visible-md" style={{ height: "72px" }} />
									<div className="visible-sm " style={{ height: "72px" }} />
									<div className="visible-ms" style={{ height: "72px" }} />
									<div className="visible-xs" style={{ height: "72px" }} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="vc_row wpb_row vc_row-fluid">
					<div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-8 vc_col-has-fill">
						<div className="vc_column-inner vc_custom_1518973912429">
							<div className="wpb_wrapper">
								<div className="es-resp">
									<div className="visible-xl" style={{ height: "64px" }} />
									<div
										className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"
										style={{ height: "64px" }}
									/>
									<div className="visible-md" style={{ height: "64px" }} />
									<div className="visible-sm " style={{ height: "3px" }} />
									<div className="visible-ms" style={{ height: "0px" }} />
									<div className="visible-xs" style={{ height: "0px" }} />
								</div>
								<div
									className="heading  default align-center color-main subcolor-main transform-default   vc_custom_1518971574999"
									id="like_sc_header_179953262"
								>
									<h6 className="header"> {ln["Online request"]}</h6>
								</div>
								<div
									className="heading  header-underline align-center color-black subcolor-main transform-default   vc_custom_1518971604412"
									id="like_sc_header_111443523"
								>
									<h3 className="header">{ln["Order your card now"]}</h3>
								</div>
								<div
									className="ltx-contact-form-7 transform- form-center form-white form-bg-white form-style-default form-btn- form-btn- form-padding-default "
									id="like_sc_contact_form_7_1762610381"
								>
									<div
										role="form"
										className="wpcf7"
										id="wpcf7-f3614-p3497-o1"
										lang="en-US"
										dir="ltr"
									>
										<div className="screen-reader-response" />
										<form className="wpcf7-form" onSubmit={this.onSubmit}>
											<div className="row">
												<div className="col-md-12" style={{ height: "28px" }}>
													{this.props.response.status ? (
														<div className="error-message animated fadeIn">
															Error
														</div>
													) : (
														""
													)}
												</div>

												<div className="col-md-12 onFocusBtnShow">
													<div className="row">
														<div className="col-md-5">
															<span className="wpcf7-form-control-wrap field-header3">
																<input
																	type="text"
																	name="doc_seria"
																	value={this.state.doc_seria}
																	onChange={this.onChange}
																	className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
																	required
																	placeholder={ln["doc_seria_lang"]}
																	pattern="[A-Z]{2}"
																	maxLength="2"
																	onInput={toInputUppercase}
																/>
															</span>
														</div>
														<div className="col-md-7">
															<span className="wpcf7-form-control-wrap field-header3">
																<input
																	type="number"
																	name="doc_number"
																	value={this.state.doc_number}
																	onChange={this.onChange}
																	maxLength="7"
																	className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
																	required
																	placeholder={ln["doc_num_lang"]}
																	onInput={validateNumber}
																/>
															</span>
															<span className="fa fa-address-card" />
														</div>
													</div>
												</div>

												<div className="col-md-12 onFocusBtnShow">
													<button type="button" className="questionBtn">
														<i className="fa fa-question" />
													</button>
													<span className="wpcf7-form-control-wrap field-header3">
														<input
															type="number"
															name="inps"
															value={this.state.inps}
															onChange={this.onChange}
															onInput={validateInps}
															maxLength="14"
															className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
															required
															placeholder={ln["pin"]}
														/>
													</span>
													<span className="fa fa-address-card" />
												</div>

												<div className="col-md-12 tel">
													<span className="wpcf7-form-control-wrap field-heade2r">
														<input
															type="text"
															name="phone"
															value={this.state.phone}
															onChange={this.onChange}
															className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required phone"
															required
															placeholder={ln["form_phone"]}
															id="phone"
															data-inputmask-clearincomplete="false"
														/>
													</span>
													<span className="fa fa-phone-square" />
												</div>
											</div>

											<p>
												<input
													type="submit"
													value={ln["submit"]}
													className="wpcf7-form-control wpcf7-submit"
												/>
											</p>
											<div className="wpcf7-response-output wpcf7-display-none" />
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-4 vc_hidden-sm vc_hidden-xs">
						<div className="vc_column-inner vc_custom_1518973983594">
							<div className="wpb_wrapper">
								<div className="wpb_single_image wpb_content_element vc_align_right   card-right-1">
									<figure className="wpb_wrapper vc_figure">
										<div className="vc_single_image-wrapper   vc_box_border_grey">
											<img
												width="774"
												height="518"
												src="img/uzcard.png"
												className="vc_single_image-img attachment-full"
												alt=""
												srcSet="/img/uzcard.png 774w, /img/uzcard.png 300w, /img/uzcard.png 768w, /img/uzcard.png 600w, /img/uzcard.png 272w"
												sizes="(max-width: 774px) 100vw, 774px"
											/>
										</div>
									</figure>
								</div>
								<div className="wpb_single_image wpb_content_element vc_align_right   card-right-2">
									<figure className="wpb_wrapper vc_figure">
										<div className="vc_single_image-wrapper   vc_box_border_grey">
											<img
												width="774"
												height="518"
												src="img/rassrochka.png"
												className="vc_single_image-img attachment-full"
												alt=""
												srcSet="/img/rassrochka.png 774w, /img/rassrochka.png 300w, /img/rassrochka.png 768w, /img/rassrochka.png 600w, /img/rassrochka.png 272w"
												sizes="(max-width: 774px) 100vw, 774px"
											/>
										</div>
									</figure>
								</div>
								<div className="wpb_single_image wpb_content_element vc_align_right   card-right-3">
									<figure className="wpb_wrapper vc_figure">
										<div className="vc_single_image-wrapper   vc_box_border_grey">
											<img
												width="774"
												height="518"
												src="img/kredit.png"
												className="vc_single_image-img attachment-full"
												alt=""
												srcSet="/img/kredit.png 774w, /img/kredit.png 300w, /img/kredit.png 768w, /img/kredit.png 600w, /img/kredit.png 272w"
												sizes="(max-width: 774px) 100vw, 774px"
											/>
										</div>
									</figure>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="vc_row wpb_row vc_row-fluid">
					<div className="wpb_column vc_column_container vc_col-sm-12">
						<div className="vc_column-inner">
							<div className="wpb_wrapper">
								<div className="es-resp">
									<div className="visible-xl" style={{ height: "90px" }} />
									<div
										className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"
										style={{ height: "90px" }}
									/>
									<div className="visible-md" style={{ height: "90px" }} />
									<div className="visible-sm" style={{ height: "90px" }} />
									<div className="visible-ms" style={{ height: "90px" }} />
									<div className="visible-xs" style={{ height: "90px" }} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

const mapToStateProps = state => ({
	lang: state.lang.lang,
	response: state.response.response,
	en: en,
	ru: ru,
	uz: uz
});
export default connect(
	mapToStateProps,
	{ send_request, save_phone }
)(Form);
