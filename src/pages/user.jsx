import React, { Component } from 'react';
import {user_entered} from './../redux/actions/actions';
import {connect} from 'react-redux';
import {reactLocalStorage} from 'reactjs-localstorage';
import {Link} from 'react-router-dom';
import { Redirect } from "react-router";

class User extends Component {
    constructor(props){
        super(props)
        let enter = localStorage.setItem('rememberMe', true);
      }
    componentDidMount(){
        localStorage.setItem('rememberMe', true);
    }
    Exit = (e) =>{
        localStorage.clear();
    }
    render() {
      
        return (
            <div style={{display:'flex',justifyContent:'space-between'}}>
               <p> User page</p>
                <Link to="/" className="reload" onClick = {this.Exit}>EXIT</Link>
            </div>
        )
    }
}
const mapStateToProps = state =>({
    entered:state.session.session.status
})

export default connect(mapStateToProps,{user_entered})(User)