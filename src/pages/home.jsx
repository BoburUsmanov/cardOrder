import React, { Component } from "react";
import Header from "./../components/header";
import Demo from "./../components/demo";
import Content from "./../components/content";
import Footer from "./../components/footer";
import Modal from "../components/modal";
import { reactLocalStorage } from "reactjs-localstorage";
import $ from 'jquery'
export default class Home extends Component {
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

			var menuOpen = false;
			$(window).scroll(function() {
				if ($(window).innerWidth() > 576) {
					if (!menuOpen) {
						if ($(this).scrollTop() > 5) {
							$("nav.navbar #navbar").css({
								transition: "all .1s"
								// height: "100%"
							});
							$("nav.navbar #navbar ul.navbar-nav>li>a").css(
								"font-size",
								"14px"
							);
							$("nav.navbar").css({
								transition: "all .1s",
								height: "60px",
								padding: "4px 0 0"
							});
							$("#logo").css({
								width: "60%",
								margin: "5px 0 0",
								padding: "10px"
							});
						} else {
							$("nav.navbar").css({
								transition: "all .1s",
								background: "#fff",
								height: "110px",
								padding: "8px 0"
							});
							$("#logo").css({
								width: "90%",
								margin: "10px",
								padding: "20px"
							});
							$("nav.navbar #navbar ul.navbar-nav>li>a").css(
								"font-size",
								"16px"
							);
						}
					} else {
					}
				}
			});

			$(".modal button").on("click", function() {
				$(".modal").fadeOut();
			});
			$(".questionBtn").on("click", function() {
				$(".modal").fadeIn();
			});
			$(".onFocusBtnShow input").on("focus", function() {
				$(".questionBtn").fadeIn();
			});
			$(".tel input").on("focus", function() {
				$(".questionBtn").fadeOut();
			});
		});
	}
	render() {
		return (
			<div>
				<Header />
				<Content />
				<Modal />
				<Footer />
			</div>
		);
	}
}
