import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Component's CSS
import './Login.css';

class Login extends Component{
    state = {
        username: "",
        password: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        this.setState({
          [name]: value
        },function(){
            console.log(this.state.username);
        });
    };
    
    render(){
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