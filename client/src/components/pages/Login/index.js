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
        password: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        API.findUser({
            username: this.state.username
        })
        .then(res => {
            // console.log(res.data)
            if(res.data){
                console.log("user exists")
                this.addUser(res.data);
            }
            else{
                console.log("user does not exist");
            }
        })
        .catch(err => {
            console.log(err)
        });
    }

    addUser = user => {
        if(user.password === this.state.password){
            localStorage.setItem("habit-uid", user._id);
            this.setState({
                redirect: true
            })
        }
        else{
            console.log("Password is incorrecto! Mama Mia!")
        }
    }

    
    
    render(){
        if (this.state.redirect) {
            return <Redirect push to="/dashboard" />;
        }

        return(

            <div className="login-page">
                <div className="login-panel">
                    <form className="login-form">
                        <div className="login-title">Login</div>
                        <input 
                            className="form-input"
                            type="text" 
                            value={this.state.value} 
                            onChange={this.handleInputChange} 
                            name="username"
                            placeholder="USERNAME"
                        />
                        <input 
                            className="form-input"
                            type="text" 
                            value={this.state.value} 
                            onChange={this.handleInputChange} 
                            name="password"
                            placeholder="PASSWORD"
                        />
                        <button 
                            className="form-submit"
                            onClick={this.handleFormSubmit}
                        >
                            Login
                        </button>
                        <Link className="form-redirect" to="/signup">Don't have an account? Sign up here!</Link>
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;