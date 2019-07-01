import React from 'react';

// importing component CSS
import './HabitDetails.css';

import posed from 'react-pose';

const Expand = posed.div({
    on: { 
        // opacity: 1,
        height: "150px",
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
        <Expand className="habit-details"initialPose="off" pose="on">
            Habit details
        </Expand>
    )
}

export default HabitDetails;