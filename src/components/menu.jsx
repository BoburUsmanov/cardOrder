import React, { Component } from "react";
import { ru } from "./../lang/ru";
import { en } from "./../lang/en";
import { uz } from "./../lang/uz";
import { connect } from "react-redux";
import { reactLocalStorage } from "reactjs-localstorage";

class Menu extends Component {
	render() {
		var ln;
		if (this.props.lang === "ru") {
			ln = this.props.ru;
		} else if (this.props.lang === "uz") {
			ln = this.props.uz;
		} else {
			ln = this.props.en;
		}
		return (
			<React.Fragment>
				<button
					type="button"
					style={{ float: "right" }}
					className="navbar-toggle"
					data-toggle="collapse"
					data-target="#navbar"
				>
					<span className="icon-bar" />
					<span className="icon-bar" />
					<span className="icon-bar" />
				</button>
				<div className="col-xl-10 col-lg-9 col-md-9 col-sm-6 col-ms-6 col-xs-6">
					<div id="navbar" className="navbar-collapse collapse">
						<div className="closeBtn"> &times;</div>
						<ul id="menu-main-menu" className="nav navbar-nav">
							<li
								id="menu-item-3957"
								className="menu-item menu-item-type-post_type menu-item-object-page current-menu-parent current_page_ancestor menu-item-3957"
							>
								<a href="#slider">
									<span>{ln["home"]}</span>
								</a>
							</li>
							<li
								id="menu-item-3557"
								className="menu-item menu-item-type-custom menu-item-3557"
							>
								<a href="#workWith">
									<span>{ln["partners"]}</span>
								</a>
							</li>
							<li
								id="menu-item-619"
								className="menu-item menu-item-type-custom menu-item-619"
							>
								{localStorage.getItem("rememberMe") ? (
									""
								) : (
									<a href="#cardOffer">
										<span>{ln["apply"]}</span>
									</a>
								)}
							</li>
							<li
								id="menu-item-59"
								className="menu-item menu-item-type-custom menu-item-59"
							>
								<a href="#howItWorks">
									<span>{ln["work"]}</span>
								</a>
							</li>
							<li
								id="menu-item-60"
								className="menu-item menu-item-type-custom menu-item-60"
							>
								<a href="#checkOrder">
									<span>{ln["check"]}</span>
								</a>
							</li>
							<li
								id="menu-item-46"
								className="menu-item menu-item-type-post_type menu-item-object-page menu-item-46"
							>
								<a href="#bePartners">
									<span>{ln["partner"]}</span>
								</a>
							</li>
						</ul>
						<div className="nav-mob">
							<ul className="nav navbar-nav" />
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({
	lang: state.lang.lang,
	ru: ru,
	uz: uz,
	en: en
});

export default connect(mapStateToProps)(Menu);
