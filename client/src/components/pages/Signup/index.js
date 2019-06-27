import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

// Importing packages
import moment from 'moment';

// Importing component CSS
import './Signup.css';

// Importing Axios calls
import API from 'utils/API';

// set up a constant regex value holding the value of a valid email
const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

// a function that we'll call to change the state of the validity of the submission
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        // if we have an error string set valid to false
        (val) => val.length > 0 && (valid = false)
);
return valid;
}

class Signup extends Component{
    state = {
        redirect: false,
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        // need an object to track any errors
        errors: {
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    };

    componentDidMount(){
        console.log("Signup page did mount");
    }

    handleFormSubmit = event => {
        event.preventDefault();

        // calls the validate form function to ensure the form is good
        if(validateForm(this.state.errors)) {
            console.log("Valid Form")
        } else {
            console.error("Invalid Form")
        };

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
        event.preventDefault();
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
        // ref the errors added to the state
        let errors = this.state.errors;
        // switch statement to check that all forms are filled and valid
        switch (name) {
            case "username":
                errors.username = 
                value.length < 1
                  ? "You must enter a username"
                  : "";
            break;
            case "firstName":
                errors.firstName = 
                value.length < 1
                  ? "You must enter your first name"
                  : "";
            break;
            case "lastName":
                errors.lastName = 
                value.length < 1
                  ? "You must enter your last name"
                  : "";
            break;
            case "email":
                errors.email = 
                validEmailRegex.test(value)
                ? ""
                : "Email is not valid!";
            break;
            case "password":
                errors.password =
                value.length < 6 
                ? "Password must be at least 6 characters"
                : "";
            break;
            default:
            break;
        }
    
        // Updating the input's state
        this.setState({errors, [name]: value
        },function(){
            console.log(this.state[name])
            console.log(errors);
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