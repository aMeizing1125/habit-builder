import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

// Importing component CSS
import './Signup.css';

// Importing Axios calls
import API from 'utils/API';

class Signup extends Component{
    state = {
        redirect: false,
        username: "",
        password: ""
    };

    componentDidMount(){
        console.log("Signup page did mount");
    }

    handleFormSubmit = event => {
        event.preventDefault();

        API.addUser({
            username: this.state.username,
            password: this.state.password
        })
        .then(res => {
            localStorage.setItem("habit-uid", res.data._id);
            this.setState({
                redirect: true
            })
            console.log(res.data);
        })
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        this.setState({
          [name]: value
        },function(){
            console.log(this.state[name]);
        });
    };

    render(){
        if (this.state.redirect) {
            return <Redirect push to="/dashboard" />;
        }

        return(
            <div className="signup-page">
                <form className="signup-form">
                    <div className="signup-title">Sign up</div>
                    <div className="signup-image"></div>
                    <input 
                        className="signup-input"
                        type="text" 
                        value={this.state.value} 
                        onChange={this.handleInputChange} 
                        name="username"
                        placeholder="username"
                    />
                    <hr></hr>
                    <input 
                        className="signup-input"
                        type="text" 
                        value={this.state.value} 
                        onChange={this.handleInputChange} 
                        name="firstname"
                        placeholder="first name"
                    />
                    <input 
                        className="signup-input"
                        type="text" 
                        value={this.state.value} 
                        onChange={this.handleInputChange} 
                        name="lastname"
                        placeholder="last name"
                    />
                    <hr></hr>
                    <input 
                        className="signup-input"
                        type="text" 
                        value={this.state.value} 
                        onChange={this.handleInputChange} 
                        name="email"
                        placeholder="e-mail"
                    />
                    <input 
                        className="signup-input"
                        type="text" 
                        value={this.state.value} 
                        onChange={this.handleInputChange} 
                        name="password"
                        placeholder="password"
                    />
                    <Link className="login-redirect" to="/login">Already have an account?</Link>
                    <button 
                        className="signup-submit"
                        onClick={this.handleFormSubmit}
                    >
                        Sign up
                    </button>
                </form>
            </div>
        )
    }
}

export default Signup;