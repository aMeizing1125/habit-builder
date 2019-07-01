import React, { Component } from 'react';

// Importing component CSS
import './HabitRow.css';

// Importing child components
import ProgressBar from 'components/dumb/ProgressBar';
import HabitDetails from './HabitDetails';

class HabitRow extends Component{
    state = {
        showDetails: false
    };

    componentDidMount(){
        console.log("This habit's progress: ");
        console.log(this.props.progress);
    }

    toggleDetails = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    render(){
        return(
            <div className="habit-row">
                <div className="habit-top">
                    {/* Habit name, and more details button */}
                    <div className="habit-title">
                        {this.props.obj.name}
                    </div>
                    <div className="more-details" onClick={this.toggleDetails}>Details</div>
                </div>
                {/* {this.state.showDetails && <HabitDetails />} */}
                <div className="habit-grid">
                    <div className="habit-left">
                        <div className="days-left-title">
                            Days until goal:
                        </div>
                        <div className="habit-days">
                            {this.props.progress.daysRemaining}
                        </div>
                    </div>
                    {/* Habit visualization */}
                    <div className="habit-visualization">
                        {/* If the habit was created today, and the user has not checked in */}
                        {this.props.progress.daysComplete === 0 && this.props.progress.checkedInToday === false ? 
                            <div className="first-day">This habit was created today</div>
                            :
                            // Habit was created today, and the user has checked in 
                            this.props.progress.daysComplete === 0 && this.props.progress.checkedInToday === true ?
                                <div className="visualization-content flex space-between">
                                    <div className="visualization-row">
                                        <div className="visualization-title">Accuracy:</div>
                                        <ProgressBar progress={100} fillColor="rgb(255, 92, 80)" />
                                    </div>
                                    <div className="visualization-row">
                                        <div className="visualization-title">Percentage to goal:</div>
                                        <ProgressBar progress={this.props.progress.percentageToGoal} fillColor="rgb(0, 124, 162)" />
                                    </div>
                                </div>
                                :
                                <div className="visualization-content flex space-between">
                                    <div className="visualization-row">
                                        <div className="visualization-title">Accuracy:</div>
                                        <ProgressBar progress={this.props.progress.accuracy} fillColor="rgb(255, 92, 80)" />
                                    </div>
                                    <div className="visualization-row">
                                        <div className="visualization-title">Percentage to goal:</div>
                                        <ProgressBar progress={this.props.progress.percentageToGoal} fillColor="rgb(0, 124, 162)" />
                                    </div>
                                </div>
                            } 
                    </div>
                    <div className="habit-right">
                        <div className={'habit-check-in ' + (this.props.progress.checkedInToday && "complete")}>
                            {this.props.progress.checkedInToday ? "Checked in" : "Check in"}
                            <input 
                                type="checkbox" 
                                className="crushit"
                                defaultChecked={this.props.progress.checkedInToday}
                                onClick={this.props.habitCheckIn}
                                value={this.props.obj._id}
                            />
                        </div>
                    </div>
                </div>
                {/* End of Habit grid */}
                {this.state.showDetails && <HabitDetails progress={this.props.progress} obj={this.props.obj}/>}
            </div>
        )
    }
}

export default HabitRow;