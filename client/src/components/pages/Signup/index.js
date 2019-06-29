import React, { Component } from 'react';

// Importing packages
import moment from 'moment';

// Importing component CSS
import './Signup.css';

// Importing Axios calls
import API from 'utils/API';

class Signup extends Component{
    state = {
        redirect: false,
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    };

    componentDidMount(){
        console.log("Signup page did mount");
    }

    handleFormSubmit = event => {
        event.preventDefault();

        console.log(this.state);

        API.addUser({
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            created: moment().format()
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
                        name="firstName"
                        placeholder="first name"
                    />
                    <input 
                        className="signup-input"
                        type="text" 
                        value={this.state.value} 
                        onChange={this.handleInputChange} 
                        name="lastName"
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
                        type="password" 
                        value={this.state.value} 
                        onChange={this.handleInputChange} 
                        name="password"
                        placeholder="password"
                    />
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