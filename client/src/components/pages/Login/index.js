import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

// Component's CSS
import './Login.css';

// Importing Utilities
import API from 'utils/API';

class Login extends Component{
    state = {
        redirect: false,
        username: "",
        password: "",
        passwordAlert: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        this.setState({
          [name]: value
        }, function(){
            console.log(this.state[name]);
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        const credentials = {
            username: this.state.username,
            password: this.state.password
        }

        API.findUser(credentials)
        .then(res => {
            if(res){
                this.addUser(res.data._id);
            }
            else{
                console.log("user does not exist");
            }
        })
        .catch(err => {
            console.log(err)
        });
    }

    addUser = uid => {
        localStorage.setItem("habit-uid", uid);
        this.setState({
            redirect: true
        })
    }
    
    render(){
        if (this.state.redirect) {
            return <Redirect push to="/dashboard/habits" />;
        }

        return(
            <div className="login-page">
                <div className="login-panel">
                    <form className="login-form">
                        <div className="login-title">Website Name</div>
                        <div className="login-img"></div>
                        <input 
                            className="login-form-input"
                            type="text" 
                            value={this.state.value} 
                            onChange={this.handleInputChange} 
                            name="username"
                            placeholder="e-mail/username"
                        />

                        {this.state.passwordAlert ? 
                            <div className="password-alert">
                                {this.state.passwordAlert}
                            </div> 
                        : null}

                        <input 
                            className="login-form-input"
                            type="password" 
                            value={this.state.value} 
                            onChange={this.handleInputChange} 
                            name="password"
                            placeholder="password"
                        />
                        <Link className="login-redirect" to="/signup">Don't have an account?</Link>
                        <button 
                            className="login-submit"
                            onClick={this.handleFormSubmit}
                        >
                            Login
                        </button>                        
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;