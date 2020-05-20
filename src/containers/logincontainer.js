import { connect } from 'react-redux';
import React, { Component } from 'react';
import Login from '../components/login'
import SalesPortal from '../components/salesportal'
import { bindActionCreators } from 'redux';
import loginvalidator from '../data/loginvalidator';
import Pending from '../components/pending'
import Axios from 'axios';

class LoginContainer extends Component {

    constructor(props) {
        super(props);
        this.handleUserAuthentication = this.handleUserAuthentication.bind(this);
    }

    handleUserAuthentication = (logincredentials) => {
        this.props.loginvalidator(logincredentials);
        
    }

    render() {
        let UIComponent = <Login handleUserAuthentication={this.handleUserAuthentication} />;
        if (this.props.isLoggedIn) {
            if (this.props.loginStatus === "SUCCESS") {
                UIComponent = <SalesPortal />
            }
        }
        else {
            if (this.props.loginStatus === "PENDING") {
                UIComponent = <Pending />
            }
            if (this.props.loginStatus === "FAILED") {
                UIComponent = <Login handleUserAuthentication={this.handleUserAuthentication} />
            }

        }

        return (
            UIComponent
        );
    }
}

const mapStateToProps = state => {
    const { isLoggedIn, loginStatus } = state.loginreducer;
    return {
        isLoggedIn,
        loginStatus
    };
}

const mapDispatchToProps = dispatch => bindActionCreators({
    loginvalidator: loginvalidator
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

