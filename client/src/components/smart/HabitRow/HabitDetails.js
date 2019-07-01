import React from 'react';

// importing component CSS
import './HabitDetails.css';

import posed from 'react-pose';

const Expand = posed.div({
    on: { 
        // opacity: 1,
        height: "auto",
        // delay: 500,
        transition: {
            duration: 500,
            ease: 'anticipate'
        }
     },
    off: { 
        // opacity: 0,
        height: "0px", 
        transition: { 
            duration: 400,
            ease: 'linear'
        } 
    }
})

function HabitDetails(props){
    return(
        <Expand className="habit-details" initialPose="off" pose="on">
            <div className="details-div">
                <div className="details-row">
                    <div className="details-title">Days since start:</div>
                </div>
                <div className="details-row">
                    <div className="details-value">{props.progress.daysComplete}</div>
                </div>
                <div className="details-row">
                    <div className="details-title">Days until goal is reached:</div>
                </div>
                <div className="details-row">
                    <div className="details-value">{props.progress.daysRemaining}</div>
                </div>
                <div className="details-row">
                    <div classname="details-title">Last Check in:</div>
                </div>
                <div className="details-row">
                    <div className="details-value">
                        {props.progress.lastCheckIn}
                    </div>
                </div>
                <div className="details-row">
                    <div className="details-title">
                        Date created:
                    </div>
                </div>
                <div className="details-row">
                    <div className="details-value">
                        {props.progress.created}
                    </div>
                </div>
            </div>
        </Expand>
    )
}

export default HabitDetails;