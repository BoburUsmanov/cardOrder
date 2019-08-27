import React, { Component } from "react";
import Header from "./../components/header";
import Footer from "./../components/footer";
import localStorage from "reactjs-localstorage";
import history from "./../history";
import Axios from "axios";

export default class Rassrochka extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chart: [],
			details: "",
			redirect: true,
			loader: true
		};
	}

	componentDidMount() {
		let data = {
			data: {
				docNum: `${window.localStorage.getItem("number")}`,
				docSerial: `${window.localStorage.getItem("seria")}`
				// "docNum": "2136371",
				// "docSerial": "AA"
			}
		};

		Axios.post(`/index.php?planning_operation_card`, data).then(response => {
			if (response.data.message === "success") {
				this.setState({
					chart: response.data.data.grafik,
					details: response.data.data,
					redirect: false,
					loader: false
				});
			}

			// if(this.state.redirect){
			//     history.push('/user')
			// }
		});
	}

	render() {
		if (!window.localStorage.getItem("loggedStatus")) {
			history.push("/");
		}
		// console.log(this.state.chart)
		const replaceCorrectInfo = number => {
			if (number < 0) {
				number = (-1 * number) / 100;
			} else {
				number = number / 100;
			}

			return number;
		};
        const expDate1 = expDate => {
            console.log(expDate);
            return expDate;
        }
		const replaceCorrectDate = day => {
			let expYear = day.slice(0, 4);
			let expMonth = day.slice(5, 7);
            let expDay = day.slice(8, 10);
            expirationYear(expYear);
            let expDate = expirationDate(expYear, expMonth, expDay);
            expDate1(expDate);
			return day.slice(0, 10);
        };
        
        const expirationYear = (year) => {
            let dateObj = new Date();
            let now = dateObj.getFullYear();
            let expYear = year.slice(0, 4);
            return -1*(now-expYear);
        }

        const expirationMonth = (month) => {
            let dateObj = new Date();
            let now = ("0" + (dateObj.getMonth() + 1)).slice(-2);
            let expMonth = month.slice(5, 7);
            return -1*(now-expMonth);
        }

        const expirationDay = (day) => {
            let dateObj = new Date();
            let now = ("0" + dateObj.getDate()).slice(-2);
            let expDay = day.slice(8, 10);
            return -1*(now-expDay);
        }
		const expirationDate = (expYear, expMonth, expDay) => {
			let dateObj = new Date();
			let month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
			let date = ("0" + dateObj.getDate()).slice(-2);
            let year = dateObj.getFullYear();
            let expDate = (year - expYear) + " " + (month - expMonth) + " " + (date - expDay);
            return expDate 
        };
        

		if (window.localStorage.getItem("product_r_status") == 0) {
			history.push("/user");
		}

		return (
			<React.Fragment>
				<Header />
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h2>Rassrochka haqida ma'lumot</h2>
						</div>
						<div className="col-md-12">
							<div className="row">
								<div className="col-md-4">
									<div className="rassrochka_info">
										<h4>Limit</h4>
										<p>{replaceCorrectInfo(this.state.details.limit)}</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="rassrochka_info">
										<h4>Qolgan summa</h4>
										<p>{replaceCorrectInfo(this.state.details.ostatok)}</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="rassrochka_info">
										<h4>Qarzdorlik</h4>
										<p>{replaceCorrectInfo(this.state.details.debt)}</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-12">
							<h2>To'lov grafigi</h2>
						</div>
						<div className="col-md-12">
							<table className="table table-bordered rassrochka-table">
								<thead>
									<tr>
										<th style={{padding: '10px 30px'}}>To'lov vaqti</th>
										<th style={{padding: '10px 30px'}}>To'lov miqdori</th>
                                        <th style={{padding: '10px 30px'}}>Qolgan vaqti</th>
									</tr>
								</thead>
								<tbody>
									{this.state.chart.map(chart => (
										<tr key={chart.OBLIGATE_NUMBER}>
											<td style={{padding: '10px 30px'}}>{replaceCorrectDate(chart.DATE_RED)}</td>
											<td style={{padding: '10px 30px'}}>{replaceCorrectInfo(chart.SUMM_RED)}</td>
											<td style={{padding: '10px 30px'}}>
                                                {(expirationYear(chart.DATE_RED) || expirationMonth(chart.DATE_RED) || expirationDay(chart.DATE_RED)) < 0 &&
                                                    <span className="text-danger">
                                                        {(expirationYear(chart.DATE_RED) < 0) != 0 && <span>{-1*expirationYear(chart.DATE_RED)} Yil </span>}
                                                        {(expirationMonth(chart.DATE_RED) < 0) != 0 && <span>{-1*expirationMonth(chart.DATE_RED)} Oy </span>}
                                                        {(expirationDay(chart.DATE_RED) < 0) != 0 && <span>{-1*expirationDay(chart.DATE_RED)} Kun </span>} o'tdi
                                                    </span>
                                                }

                                                {(expirationYear(chart.DATE_RED) || expirationMonth(chart.DATE_RED) || expirationDay(chart.DATE_RED)) > 0 &&
                                                    <span className="text-success">
                                                        {expirationYear(chart.DATE_RED) != 0 && <span>{expirationYear(chart.DATE_RED)} Yil </span> }
                                                        {expirationMonth(chart.DATE_RED) != 0 && <span>{expirationMonth(chart.DATE_RED)} Oy </span> } 
                                                        {expirationDay(chart.DATE_RED) != 0 && <span>{expirationDay(chart.DATE_RED)+30} kun </span> } qoldi
                                                    </span>
                                                }
                                            </td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<Footer />
				{this.state.loader && (
					<div className="loader">
						<img src="/img/loader.gif" alt="" />
					</div>
				)}
			</React.Fragment>
		);
	}
}
