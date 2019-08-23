import React, { Component } from "react";
import Header from "../components/header";
import { connect } from "react-redux";
import Footer from "../components/footer";
import { en } from "../lang/en";
import { ru } from "../lang/ru";
import { uz } from "../lang/uz";

class Profile extends Component {
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
                                        <div className="userInfo">
                                            <p>Name: John Doe</p>
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
	ru: ru
});

export default connect(mapStateToProps)(Profile);
