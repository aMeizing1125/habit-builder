import React, { Component } from 'react';

// Importing Data
import habits from 'data/habits.js';

// Importing Components
import ProgressBar from 'components/dumb/ProgressBar';

// Importing Local CSS for Habit Page
import './Habit.css';

// Habit Page
class Habit extends Component{
    state = {
        allHabits: []
    };

    componentDidMount(){
        console.log(habits);
        // Storing an array of habits from the database to render to the page
        this.setState({
            allHabits: habits
        })
    }

    // This will take in:
    // -current day
    // -goal day
    // -start day
    // 1.  It will find the amount of days from start date to goal date
    // 2.  It will find the amount of days from today to the goal date
    // 3.  It will create a percentage of days left to reach the goal date based on the input

    percentageDaysToGoal = (habit) => {
        console.log(habit.name);
    }

    render(){
        return(
            // Page div
            <div className="habit-page">
                {/* 
                Create a new div for each of the habits.  
                This should show:
                    -Habit name
                    -Progress
                    -Checkbox for checking in a habit for the day
                */}
                {this.state.allHabits.map(item => {
                    return(
                        <div 
                            className="habit"
                            key={item.id}
                        >
                            <div className="habit-icon">
                                habit name
                                {this.percentageDaysToGoal(item)}
                            </div>
                            <div className="habit-progress">
                                <ProgressBar progress={58}/>
                            </div>
                            <div>
                                Check in
                            </div>
                        </div>

                    )
                })}
            </div>
        )
    }
}

export default Habit;