import React, { Component } from 'react';

// Importing component CSS
import './HabitRow.css';

// Importing child components
import ProgressBar from 'components/dumb/ProgressBar';

class HabitRow extends Component{
    state = {};

    componentDidMount(){
        console.log("This habit's progress: ");
        console.log(this.props.progress);
    }

    render(){
        return(
            <div className="habit-row">
                <div className="habit-top">
                    {/* Habit name, and more details button */}
                    <div className="habit-title">
                        {this.props.obj.name}
                    </div>
                    <div className="more-details">Details</div>
                </div>
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
                        {this.props.progress.daysComplete > 0 ? 
                            <div className="first-day">This habit was created today</div>
                            :
                            <div className="visualization-content flex space-between">
                            <div className="visualization-row">
                                <div className="visualization-title">Accuracy:</div>
                                <ProgressBar 
                                    progress={74} 
                                    fillColor="rgb(255, 92, 80)" 
                                />
                            </div>
                            <div className="visualization-row">
                                <div className="visualization-title">Something else:</div>
                                <ProgressBar progress={43} fillColor="rgb(0, 124, 162)" />
                            </div>
                        </div>
                        }
                    </div>
                    <div className="habit-right">
                        <div className="habit-check-in">
                            Check in
                            <div className="crushit"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HabitRow;