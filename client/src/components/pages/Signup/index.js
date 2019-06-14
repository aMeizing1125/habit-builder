import React, { Component } from 'react';

// Importing component CSS
import './Signup.css';

class Signup extends Component{
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
            console.log(this.state[name]);
        });
    };

    render(){
        return(
            <div className="signup-page">
                <form className="signup-form">
                    <div className="form-title">Sign up</div>
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
                    >
                        Sign up
                    </button>
                </form>
            </div>
        )
    }
}

export default Signup;