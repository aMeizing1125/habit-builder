import React, { Component } from 'react';

// Importing packages
import moment from 'moment';

// Importing Utilities
import API from 'utils/API';

// Importing Components
import HabitRow from 'components/smart/HabitRow';
import NewHabit from 'components/pages/Dashboard/DashboardPages/NewHabit';
import AddGear from 'components/dumb/AddGear';

// Importing Local CSS for Habits Page
import './Habits.css';

// SVG Manipulation Tool
// import { SvgLoader, SvgProxy } from 'react-svgmt';

// Importing SVGs
// import addGear from 'img/addGear.svg';

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
        return {
            goalDate: moment(obj.created).add(obj.goal, 'days').format(),
            daysComplete: moment().diff(obj.created, 'days'),
            daysRemaining: moment(obj.created).add(obj.goal, 'days').diff(moment(), 'days'),
            accuracy: Math.round((obj.progress.length / moment().diff(obj.created, 'days')) * 100),
            percentageToGoal: Math.round(((moment().diff(obj.created, 'days') + 1) / obj.goal) * 100),
            checkedInToday: obj.progress.length === 0 ? false : this.isThisToday(obj.progress.slice(-1)[0]),
            lastCheckIn: obj.progress.length > 0 ? moment(obj.progress.slice(-1)[0]).format("MM/DD/YYYY") : "no check-ins",
            created: moment(obj.created).format("MM/DD/YYYY")
        }
    }

    habitCheckIn = event => {
        event.preventDefault();

        // Target habit object:
        const targetObj = this.findHabitInState(event.target.value);

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

    displayModal = () => {
        this.setState({
            habitModal: true
        })
    }

    closeModal = () => {
        this.setState({
            habitModal: false
        })
    }

    render(){
        return(
            <div className="habit-page">
                {this.state.habitModal && <NewHabit createHabit={this.createHabit} closeModal={this.closeModal}/>}

                <AddGear click={this.displayModal} />

                {/* Does the user have any habits? */}
                {this.state.allHabits.length === 0 ? 
                    
                    <div className="no-habits">This user has no habits</div>
                    :
                    <StaggerParent className="stagger-parent" pose="open">
                        {this.state.allHabits.map((item, index) => {
                            return (
                                <HabitRow 
                                    key={index}
                                    obj={item} 
                                    progress={this.getProgress(item)}
                                    habitCheckIn={this.habitCheckIn}
                                />
                            )
                        })}
                    </StaggerParent>
                }
            </div>
        )
    }
}

export default Habits;