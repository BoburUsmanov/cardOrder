import React, { Component } from 'react'
import { connect } from 'react-redux'
import { appeal_rassrochka } from './../redux/actions/actions'
import localStorage from 'reactjs-localstorage'
import Header from './../components/header'
import Footer from './../components/footer'
import history from './../history'

class Appeal extends Component {
    appeal__rassrochka = () => {
        this.props.appeal_rassrochka(window.localStorage.getItem('phone'), window.localStorage.getItem('session'), window.localStorage.getItem('loan'))
    }
    render() {

        if (!window.localStorage.getItem("loggedStatus")) {
			history.push("/");
		}
        return (

            <React.Fragment>
                <Header />
                {window.localStorage.getItem('product_r_status')==1 && <div className="appeal">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Siz rassrochka karta uchun buyrtma bergansiz.Hozirda sizning buyurtmangiz ko'rib chiqilmoqda</h2>
                            </div>
                        </div>
                    </div>
                </div> }
                {window.localStorage.getItem('product_r_status')==0 &&  <div className="appeal">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Siz <span className="yellow">{window.localStorage.getItem('loan')} </span> - miqdordagi mablag'ni rassrochkaga olishingiz mumkin</h2>
                            </div>
                            <div className="col-md-12">
                                <div className="text-center">
                                    <button className="appeal__btn" onClick={this.appeal__rassrochka}>Buyurtma qilish</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> }

                {window.localStorage.getItem('product_r_status')==2 && history.push('/rassrochka') }
               
                <Footer />
            </React.Fragment>

        )
    }
}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps,{ appeal_rassrochka })(Appeal)