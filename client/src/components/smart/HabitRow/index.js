import React, { Component } from 'react';

// Importing component CSS
import './HabitRow.css';

// Importing child components
import ProgressBar from 'components/dumb/ProgressBar';

class HabitRow extends Component{
    state = {};

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
                        <div className="habit-icon">
                            Icon
                        </div>
                    </div>
                    {/* Habit visualization */}
                    <div className="habit-visualization">
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