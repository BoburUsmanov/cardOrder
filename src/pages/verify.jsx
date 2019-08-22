import React, { Component } from 'react';
import Header from './../components/header';
import Footer from './../components/footer';
import {connect} from 'react-redux';

 class Verify extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div style={{paddingTop:'250px',marginBottom:'250px'}}>
                   {this.props.status?<span> Verify page</span>:'page not found'}
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    status:state.response.response
})

export default connect(mapStateToProps)(Verify)