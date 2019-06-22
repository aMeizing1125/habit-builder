import React, { Component } from 'react';

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
        API.findHabits("5d0a62f084fa054d84c56277")
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            })
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