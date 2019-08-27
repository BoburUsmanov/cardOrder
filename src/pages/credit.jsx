import React, { Component } from "react";
import localStorage from "reactjs-localstorage";
import history from "./../history";
import Header from "./../components/header";
import Footer from "./../components/footer";
import Axios from "axios";

import Chart from "react-google-charts";

export default class Credit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chart: "",
			limit: "",
			sum: "",
			debit: "",
			loader: false,
			redirect: true
		};
	}

	componentDidMount() {
		let data = {
			data: {
				docNum: `${window.localStorage.getItem("number")}`,
				docSerial: `${window.localStorage.getItem("seria")}`,
				// "docNum": "5630154",
				// "docSerial": "AA",
				branch: "01125"
			}
		};
		Axios.post(`/index.php?credit_info`, data).then(response => {
			if (response.data.message === "success") {
				this.setState({
					chart: response.data.data.grafik,
					limit: response.data.data.limit,
					sum: response.data.data.sum_loan,
					debit: response.data.data.debit,
					loader: false,
					redirect: false
				});
			}

			
		});
	}
	render() {

		if (!window.localStorage.getItem("loggedStatus")) {
			history.push("/");
        }
        
		// let date = String(this.state.chart.red_date);
        // console.log(date.slice(0, 10));
        if (window.localStorage.getItem('product_c_status') == 0 || window.localStorage.getItem('product_c_status') == 1) {
            history.push("/user");
        }

        const replaceCorrectInfo = (number) =>{

            if(number<0){
                number = -1*number/100;
            }else{
                number = number/100;
            }

          
            return number;
        }

        const replaceCorrectDate = (day) =>{
            
            return day.slice(0,10)
        }

		return (
			<React.Fragment>
				<Header />
				<div className="container">
					<h2>Kredit info</h2>
					<div className="row">
						<div className="col-md-4">
							<div className="credit_main_info">
								<h4>Summa</h4>
								<p>{this.state.sum}</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="credit_main_info">
								<h4>Debit</h4>
								<p>{this.state.debit}</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="credit_main_info">
								<h4>Limit</h4>
								<p>{this.state.limit ? this.state.limit : "Limit yo'q"}</p>
							</div>
						</div>
					</div>

					<h2>Kredit to'lash grafigi</h2>

					<Chart
						width={"600px"}
						height={"400px"}
						chartType="LineChart"
						loader={<div>Loading Chart</div>}
						data={[
							["x", "To\'ov miqdori"],
							[0, 0],
							[this.state.chart.sum, 1],
						]}
						options={{
							hAxis: {
								title: "To'lov miqdori"
							},
							vAxis: {
                                title: "To'lash muddati",
                                labelString: this.state.chart.red_date
							}
						}}
						rootProps={{ "data-testid": "1" }}
					/>
                        {this.state.loader &&  <div className="loader">
                    <img src="/img/loader.gif" alt=""/>
                </div>}

                
                </div>
            </React.Fragment>
 
  )
}
}