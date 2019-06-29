import React, { Component } from 'react';

// Importing packages
import moment from 'moment';

// Importing Utilities
import API from 'utils/API';

// Importing Components
import Habit from 'components/dumb/Habit';
import NewHabit from 'components/pages/Dashboard/DashboardPages/NewHabit';

// Importing Local CSS for Habits Page
import './Habits.css';

// Importing posed animation library
import posed from 'react-pose'

const StaggerParent = posed.div({
    open: {
        delayChildren: 250,
        staggerChildren: 500
    }
})

// Habits Page
class Habits extends Component{
    state = {
        allHabits: [],
        habitModal: false
    };

    componentDidMount(){
        API.findHabits(sessionStorage.getItem("habit-uid"))
            .then(res => {
                this.setState({
                    allHabits: res.data
                })
            })
            .catch(err => console.log(err));
    }

    // Takes in a timestamp, returns boolean
    isThisToday = (timestamp) => {
        if(moment().diff(moment(timestamp), 'days') === 0){
            return true
        }
        else{
            return false
        }
    }

    // Create a new habit
    createHabit = (obj) => {
        API.addHabit(sessionStorage.getItem("habit-uid"), obj)
            .then(res => {
                this.setState({
                    allHabits: this.state.allHabits.concat(res.data),
                    habitModal: false
                })
            })
            .catch(err => console.log(err));
    }

    // Update habit object in state
    updateHabitInState = (id, update) => {
        const updatedHabits = this.state.allHabits.map(obj => (obj._id === id ? {...obj, update } : obj));
        this.setState({
            allHabits: updatedHabits
        })
    }

    // Returns a habit object in state
    findHabitInState = (id) => {
        return this.state.allHabits.filter(obj => obj._id === id)[0];
    }

    // Takes in a habit object, returns object with progress data
    getProgress = (obj) => {
        // console.log(obj);

        return {
            goalDate: moment(obj.created).add(obj.goal, 'days').format(),
            daysComplete: moment().diff(obj.created, 'days'),
            daysRemaining: moment(obj.created).add(obj.goal, 'days').diff(moment(), 'days'),
            accuracy: Math.round((obj.progress.length / moment().diff(obj.created, 'days')) * 100),
            checkedInToday: obj.progress.length === 0 ? false : this.isThisToday(obj.progress.slice(-1)[0])
        }
    }

    habitCheckIn = event => {
        event.preventDefault();

        // Target habit object:
        const targetObj = this.findHabitInState(event.target.value);

        console.log(`Last check in: ${targetObj.progress.slice(-1)[0]}`);

        // If the user has already checked in this habit today
        if(targetObj.progress.length > 0 && this.isThisToday(targetObj.progress.slice(-1)[0])){
            alert("You have already checked in this habit today");
        }
        // If this is a valid check in
        else{
            // Update habit in front end
            this.updateHabitInState(event.target.value, { progress: targetObj.progress.push(moment().format()) });
           
            // Update habit in back end
            API.checkIn(event.target.value, moment().format())

            // If this habit was created today
            if(this.isThisToday(targetObj.created)){
                console.log("This habit was created today");
            }
        }
    }

    render(){
        return(
            <div className="habit-page">
                {this.state.habitModal ? <NewHabit createHabit={this.createHabit} /> : null}
                <button onClick={() => this.setState({ habitModal: true })}>New Habit</button>

                <StaggerParent className="stagger-parent" pose="open">
                    {this.state.allHabits.map(item => {
                        return (
                            <Habit 
                                key={item._id}
                                obj={item}
                                habitCheckIn={this.habitCheckIn}
                                progress={this.getProgress(item)}
                            />
                        )
                    })}
                </StaggerParent>
            </div>
        )
    }
}

export default Habits;