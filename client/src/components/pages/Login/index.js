import React, { Component } from 'react';
// import { Link, Redirect } from 'react-router-dom';

// Importing packages
import moment from 'moment';

// Component's CSS
import './Login.css';

// Importing Utilities
import API from 'utils/API';

// Importing child components
import Logo from 'components/dumb/Logo';
import ExitButton from 'components/dumb/ExitButton';

class Login extends Component{
    state = {
        page: "login",
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        toggleLogo: true
    };

    componentDidMount(){
        setInterval(() => {
            this.setState({ 
                toggleLogo: !this.state.toggleLogo 
            })
        }, 1500);
    }

    changeLoginMethod = () => {
        this.setState({
            page: this.state.page === "login" ? "signup" : "login",
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            email: ""
        })
    }

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

    submitLogin = event => {
        event.preventDefault();

        console.log("Submitting login info");

        const credentials = {
            username: this.state.username,
            password: this.state.password
        }
        API.findUser(credentials)
            .then(res => {
                if(res.data.username === credentials.username){
                    console.log("Login successful")
                    sessionStorage.setItem("habit-uid", res.data._id);
                    sessionStorage.setItem("loggedIn", "true");
                    window.location.assign('/dashboard/habits');
                }
                else{
                    console.log(res.data)
                    console.log("login unsuccessful");
                }
        })
        .catch(err => {
            console.log(err)
        });
    }

    submitSignUp = event => {
        event.preventDefault();

        console.log("Submitting signup info");

        const newUser = {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            created: moment().format()
        }

        console.log(newUser);

        API.addUser(newUser)
        .then(res => {
            console.log(res.data);
            sessionStorage.setItem("habit-uid", res.data._id);
            sessionStorage.setItem("loggedIn", "true");
            window.location.assign('/dashboard/habits');
        })
        .catch(err => console.log(err));
    }
    
    render(){
        return(
            <div className="login-page">
                <div className="login-panel">
                    <form className="login-form">
                        <div className="login-header">
                            <div className="login-header-wrapper">
                                <div className="login-title">Crushin' It!</div>
                                <ExitButton click={this.props.closeLogin}/>
                            </div>
                        </div>
                       
                        <div className="login-img">
                            <Logo 
                                pose={this.state.toggleLogo ? 'on' : 'off'}
                                logoMain="rgb(255, 92, 80)" 
                                logoAccent="#486791" 
                            />
                        </div>
                        {/* If the user is trying to log in */}
                        {this.state.page === "login" ? 
                            <div className="form-state">
                                <input 
                                    className="login-form-input"
                                    type="text" 
                                    value={this.state.value} 
                                    onChange={this.handleInputChange} 
                                    name="username"
                                    placeholder="e-mail/username"
                                />
                                <input 
                                    className="login-form-input"
                                    type="password" 
                                    value={this.state.value} 
                                    onChange={this.handleInputChange} 
                                    name="password"
                                    placeholder="password"
                                />
                            </div>
                            :
                            // If the user is trying to sign up
                            <div className="form-state">
                                <input 
                                    className="login-form-input"
                                    type="text" 
                                    value={this.state.value} 
                                    onChange={this.handleInputChange} 
                                    name="username"
                                    placeholder="username"
                                />
                                <hr></hr>
                                <input 
                                    className="login-form-input"
                                    type="text" 
                                    value={this.state.value} 
                                    onChange={this.handleInputChange} 
                                    name="firstName"
                                    placeholder="first name"
                                />
                                <input 
                                    className="login-form-input"
                                    type="text" 
                                    value={this.state.value} 
                                    onChange={this.handleInputChange} 
                                    name="lastName"
                                    placeholder="last name"
                                />
                                <hr></hr>
                                <input 
                                    className="login-form-input"
                                    type="text" 
                                    value={this.state.value} 
                                    onChange={this.handleInputChange} 
                                    name="email"
                                    placeholder="email"
                                />
                                <input 
                                    className="login-form-input"
                                    type="password" 
                                    value={this.state.value} 
                                    onChange={this.handleInputChange} 
                                    name="password"
                                    placeholder="password"
                                />
                            </div>
                        }
                        {/* Login Redirect */}
                        <div 
                            className="login-redirect"
                            onClick={this.changeLoginMethod}
                        >
                            {this.state.page === "login" ? 
                            "Don't have an account?" 
                            :
                            "Already have an account?"
                            }
                        </div>
                        <button 
                            className="login-submit"
                            onClick={this.state.page === "login" ? this.submitLogin : this.submitSignUp}
                        >
                            {this.state.page === "login" ? "Login" : "Sign Up"}
                        </button>                        
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;