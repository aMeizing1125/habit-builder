import React, { Component } from 'react';
import ReactDOM from "react-dom";

class SignUp extends Component{
    state = {
        show: false
    }

    showModal = () => {
        this.setState({
            show: true
        })
    }

    hideModal = () => {
        this.setState({
            show: false
        })
    }

    render(){
        return(
            <div className="sign-up-modal">Sign up modal</div>
        )
    }
}

export default SignUp;