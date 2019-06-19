import React, { Component } from 'react';

// Importing Data
// import habits from 'data/habits.js';

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
        console.log("Habit page did mount");
        console.log(`This user in habits page: ${this.props.uid}`);
        this.findHabits();
    }

    findHabits = () => {
        console.log("inside findHabits()");
    }

    newHabit = () => {
        if(this.state.habitModal){
            this.setState({
                habitModal: false
            })
        }
        else{
            this.setState({
                habitModal: true
            })
        }
    }

    // Modal to add new habit
    displayModal = () => {
        if(this.state.habitModal){
            return <NewHabit />
        }
    }

    render(){

        return(
            // Page div
            <div className="habit-page">
                {this.displayModal()}
                <button onClick={this.newHabit}>New Habit</button>


                {this.state.allHabits.map(item => {
                    return(
                        <div 
                            className="habit"
                            key={item.id}
                        >
                            <div className="habit-icon">
                                habit name
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