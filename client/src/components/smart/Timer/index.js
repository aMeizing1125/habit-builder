import React, { Component } from 'react';

// Importing component's CSS
import './Timer.css';

class Timer extends Component{
    state = {
        count: false,
        counter: 0,
        formattedTime: "0h 0m 0s",
    };

    componentDidMount(){
        console.log("Timer did mount");

        // const interval = setInterval(this.runTimer, 1000);
    }

    runTimer = () => {
        if(this.state.count === true){
            let count = this.state.counter + 1;

            let hours = Math.floor(count / (60 * 60));
        
            let divisor_for_minutes = count % (60 * 60);
            let minutes = Math.floor(divisor_for_minutes / 60);
        
            let divisor_for_seconds = divisor_for_minutes % 60;
            let seconds = Math.ceil(divisor_for_seconds);

            this.setState({
                formattedTime: `${hours}h ${minutes}m ${seconds}s`,
                counter: this.state.counter + 1
            })
        }
    }

    handleTimer = (event) => {
        console.log(event.target.value);
        this.setState({
            count: event.target.value === "start" ? true : false
        }, function(){
            console.log("count: " + this.state.count);
        })
    }

    render(){
        return(
            <div className="timer">
                <div className="timer-title">Timer</div>
                <div className="timer-display">{this.state.formattedTime}</div>
                <div className="timer-running-buttons">

                    {/* If timer is running */}
                    {this.state.count ? 
                        <div className="timer-running-buttons">
                            {/* Pause button */}
                            <button 
                                className="timer-stop timer-button"
                                value="pause"
                                onClick={this.handleTimer}
                            >Pause
                            </button>
                            {/* Stop button */}
                            <button 
                                className="timer-stop timer-button"
                                value="stop"
                                onClick={this.handleTimer}
                            >Stop
                            </button>
                        </div>
                        :
                        <button 
                            className="timer-start timer-button"
                            value="start"
                            onClick={this.handleTimer}
                        >Start
                        </button>
                    }
                    {/* End of ternary expression */}
                </div>
            </div>
        )
    }
}

export default Timer;