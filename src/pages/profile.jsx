import React, { Component } from "react";
import Header from "../components/header";
import { connect } from "react-redux";
import Footer from "../components/footer";
import { en } from "../lang/en";
import { ru } from "../lang/ru";
import { uz } from "../lang/uz";
import { reactLocalStorage } from "reactjs-localstorage";
import {  Redirect } from 'react-router';
import {user_info} from './../redux/actions/actions';
import $ from 'jquery'

class Profile extends Component {
	constructor(props){
		super(props)
		// localStorage.setItem('info',this.props.profile)
		this.state= {
			inps:[],
			document:[]
		}
	}
	
	
	componentDidMount() {
		
		console.log(this.props.profile)
		
		this.parsing()
		console.log(localStorage.getItem('info'))
		if (this.props.entered === 0) {
			localStorage.setItem("rememberMe", true);
		}
		$(document).ready(function() {
		
			$("#profileCardHeader").mousemove(function(event) {
				var moveX = ($(window).width() / 2 - event.pageX) * 0.03;
				var moveY = ($(window).height() / 2 - event.pageY) * 0.03;

				$("#profileCardImg").css("margin-left", moveX + "px");
				$("#profileCardImg").css("margin-top", moveY + "px");
			});
		});
	
		this.props.user_info('test');
	}

	parsing = () =>{
		
		this.setState({inps:JSON.parse(localStorage.getItem('info')).inps})
		this.setState({document:JSON.parse(localStorage.getItem('info')).document})
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
			{/* <p>{console.log(JSON.parse(localStorage.getItem('info')))}</p> */}
			<p>{console.log(this.state.inps)}</p>
			<p>{console.log(this.state.document)}</p>
			<p>
				{
					this.state.inps.map(m => 
						<div key={ m.doc_number }>
							<span> {m.first_name} </span>
							<span>{m.filial_name}</span>
						</div>
				)					
				}
			</p>
			</div>

		);
	}
}

const mapStateToProps = state => ({
	lang: state.lang.lang,
	en: en,
	uz: uz,
	ru: ru,
	entered: state.session.session.status,
	info:state.info.info,
	profile:state.session.session.data
});

export default connect(mapStateToProps,{user_info})(Profile);
