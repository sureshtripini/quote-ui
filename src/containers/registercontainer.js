import { connect } from 'react-redux';
import React, { Component } from 'react';
import Register from '../components/register';
import LoginContainer from './logincontainer';
import EmailActivation from '../components/emailActivation';
import EmailActivated from '../components/emailActivated';
import { bindActionCreators } from 'redux';
import registerTheUser from '../data/registertheuser';

class RegisterContainer extends Component {

    constructor(props) {
        super(props);
        this.handleUserRegistration = this.handleUserRegistration.bind(this);
    }

    handleUserRegistration = (userinfo) => {
        this.props.registerTheUser(userinfo);
    }

    render() {
        let UIComponent = <Register handleUserRegistration={this.handleUserRegistration} />;
        if (this.props.isRegistered) {
            if (this.props.isActivated) {
                UIComponent = <EmailActivated />
            }
            else
            {
                UIComponent = <EmailActivation />
            }
        }
        else {
            if (this.props.registerReason === 'USER_FOUND') {
                UIComponent = <Register handleUserRegistration={this.handleUserRegistration} />
            }
            else {
                UIComponent = <Register handleUserRegistration={this.handleUserRegistration} />
            }
        }

        return (
            UIComponent
        );
    }
}

const mapStateToProps = state => {
    const { isRegistered, isActivated, registerReason } = state.registerreducer;
    return {
        isRegistered,
        isActivated,
        registerReason
    };
}

const mapDispatchToProps = dispatch => bindActionCreators({
    registerTheUser: registerTheUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);

