import React, { Component } from 'react';

// Importing component CSS
import './Skills.css';

// Importing child components
import Timer from 'components/smart/Timer';

class Skills extends Component{
    state = {
        modal: true,
    };

    componentDidMount = () => {
        console.log("Skills page did mount");
    }

    render(){
        return(
            <div className="skills-page">
                <form className="new-item">
                    <button 
                        className="todo-submit" 
                        type="submit"
                        onClick={this.handleFormSubmit}
                    >
                        +
                    </button>
                    <input 
                        className="todo-input" 
                        type="text" 
                        placeholder="Add a skill"
                        value={this.state.task}
                        onChange={this.handleInputChange}
                        name="task"
                    >
                    </input>
                </form>
                <div className="skill-div">
                    <div className="total-time">
                        <div className="total-title">
                            Total time:
                        </div>
                        <div className="time-amount">
                            6hr 42m
                        </div>
                    </div>
                    <div className="skill-data">
                        <div className="skill-title">Practice Guitar</div>
                        <div className="skill-graph">Graph</div>
                    </div>
                    <Timer />
                </div>
            </div>
        )
    }
}

export default Skills;