import React, { Component } from 'react';

// Importing packages
import moment from 'moment';

// Importing Utilities
import API from 'utils/API';

// Importing Components
import ProgressBar from 'components/dumb/ProgressBar';
import NewHabit from 'components/pages/Dashboard/DashboardPages/NewHabit';

// Importing Local CSS for Habit Page
import './Habit.css';

// Habit Page
class Habit extends Component{
    state = {
        allHabits: [],
        habitModal: false
    };

    componentDidMount(){
        this.findHabits();
    }

    findHabits = () => {
        const uid = localStorage.getItem("habit-uid");

        API.findHabits(uid)
            .then(response => {
                console.log(response.data);
                this.setState({
                    allHabits: response.data,
                    habitModal: false
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    renderHabit = (item) => {
        // const goalDate = moment(item.created).add(item.goal, 'days');
        const daysCompleted = moment().diff(item.created, 'days');
        // const daysRemaining = goalDate.diff(moment(), 'days');
        
        const percentage = () => {
            if(daysCompleted === 0){
                return 100
            }
            else{
                return Math.round((item.progress.length / daysCompleted) * 100);
            }
        }

        console.log("Percentage: " + percentage());
       
        return(
            <div 
                className="habit"
                key={item._id}
            >
                <div className="habit-icon">
                    {item.name}
                </div>
                <div className="habit-progress">
                    <ProgressBar progress={percentage()}/>
                </div>
                <div className="habit-checkin">
                    <input 
                        className="checkbox" 
                        type="checkbox" 
                        onClick={this.habitCheckIn}
                        value={item._id}
                    >    
                    </input>
                </div>
            </div>
        )
    }

    newHabit = () => {
        this.setState({
            habitModal: true
        })
    }

    habitCheckIn = event => {
        event.preventDefault();

        const id = event.target.value;
        const timestamp = moment().format();
        
        API.checkIn(id, timestamp)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        
        this.findHabits();
    }

    // Modal to add new habit
    displayModal = () => {
        if(this.state.habitModal){
            return (
                <NewHabit 
                    findHabits={this.findHabits}
                />
            )
        }
    }

    removeModal = () => {
        this.setState({
            habitModal: false
        })
    }

    render(){

        return(
            // Page div
            <div className="habit-page">
                {this.displayModal()}
                <button onClick={this.newHabit}>New Habit</button>


                {this.state.allHabits.map(item => {
                    return this.renderHabit(item)
                })}
            </div>
        )
    }
}

export default Habit;