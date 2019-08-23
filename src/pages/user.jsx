import React, { Component } from "react";
import { user_entered } from "./../redux/actions/actions";
import { connect } from "react-redux";
import { reactLocalStorage } from "reactjs-localstorage";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

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
		// alert(localStorage.getItem('rememberMe'))
	}

	render() {
		const logout = e => {
			localStorage.clear();
		};

		// if (!localStorage.getItem("rememberMe")) {
		// 	return <Redirect to="/" />;
		// }

		return (
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<p> User page</p>
				<Link to="/" className="reload" onClick={logout}>
					Logout
				</Link>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	entered: state.session.session.status
});

export default connect(
	mapStateToProps,
	{ user_entered }
)(User);
