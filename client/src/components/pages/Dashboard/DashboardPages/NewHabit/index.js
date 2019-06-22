import React, { Component } from 'react';

// Importing packages
import moment from 'moment';

// Import component CSS
import './NewHabit.css';
import API from 'utils/API';

class NewHabit extends Component{
    state = {
        name: "",
        category: "Health",
        reason: "",
        modalPage: 0
    }

    componentDidMount(){
        console.log("NewHabit did mount");
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
    };

    handleContinue = event => {
        event.preventDefault();

        this.setState({
            modalPage: this.state.modalPage + 1
        },function(){
            console.log(this.state.name)
        })

    }

    handleBack = event => {
        event.preventDefault();

        this.setState({
            modalPage: this.state.modalPage - 1
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        console.log("submit");

        const uid = localStorage.getItem("habit-uid");

        const newHabit = {
            name: this.state.name,
            category: "health",
            frequency: "weekly",
            created: moment().format(),
            goal: 30
        }

        API.addHabit(uid, newHabit)
            .then(res => {
                this.props.findHabits();
            })
            .catch(err => {
                console.log(err);
            })
    }

    renderModalPage = () => {
        if(this.state.modalPage === 0){
            return (
                <div className="modal-page">
                    <div className="modal-instructions">
                        Habit name
                    </div>
                    <input 
                        type="text" 
                        name="name" 
                        className="habit-input" 
                        placeholder={this.state.name ? this.state.name : "E.g. drink water"}                        
                        onChange={this.handleInputChange}
                        value={this.state.value}
                    />
                </div>
            )
        }
        if(this.state.modalPage === 1){
            return(
                <div className="modal-page">
                    <div className="modal-instructions">What is the reason for this habit?</div>
                    <textarea 
                        className="text-area"
                        placeholder={
                            this.state.reason ? this.state.reason : "Reason for new habit"
                        }
                        name="reason"
                        value={this.state.value}
                        onChange={this.handleInputChange}
                    />
                </div>
            )
        }
        if(this.state.modalPage === 2){
            return(
                <div className="modal-page">
                    <div className="modal-instructions">Goal</div>
                    <select className="dropdown">
                        <option>21 days</option>
                        <option>1 month</option>
                        <option>3 months</option>
                    </select>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="habit-modal">
                <div className="habit-modal-content">
                    <form className="habit-form">
                        <div className="new-habit-title">{
                            this.state.name ? this.state.name : "New Habit"
                        }</div>
                        <div className="form-body">
                            <div className="form-image"></div>
                            {this.renderModalPage()}
                        </div>
                        <div className="form-bottom">
                            <div>
                                {/* Are we on the last page of the form? */}
                                {this.state.modalPage === 0 ? null : (
                                    <button className="form-back form-button" onClick={this.handleBack}>Back</button>
                                )}
                                {this.state.modalPage === 2 ? null : (
                                    <button className="form-continue form-button" type="submit" onClick={this.handleContinue}>Continue</button>
                                )}
                                {this.state.modalPage === 2 ? (
                                    <button 
                                        className="form-submit form-button" 
                                        type="submit" 
                                        onClick={this.handleSubmit}
                                    >Create Habit</button>
                                ) : null}
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default NewHabit;