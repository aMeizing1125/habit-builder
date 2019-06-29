import React from 'react';

// Importing child components
import ProgressBar from 'components/dumb/ProgressBar';

import posed from 'react-pose';

const StaggerChild = posed.div({
    on: { scale: 1 },
    off: { 
        scale: .9, 
        transition: { type: "spring" } 
    }
})

function Habit(props){
    console.log(props.progress);

    return(
        <StaggerChild initialPose="off" pose="on" className="habit">
            <div className="habit-icon">
                {props.obj.name}
            </div>
            <div className="habit-progress">
                {/* If the habit was created today, and the user has not checked in */}
                {props.progress.daysComplete > 0 ? 
                    <ProgressBar progress={props.progress.accuracy} />
                    :
                    // Habit was created today, and the user has not checked in 
                    props.obj.progress.length === 0 ?
                        "Habit created today, not checked in"
                        :
                        <ProgressBar progress={100} />
                }
            </div>
            <div className="habit-checkin">
                <input 
                    className="checkbox" 
                    type="checkbox" 
                    onClick={props.habitCheckIn}
                    value={props.obj._id}
                    checked={props.progress.checkedInToday === true ? true : false}
                />
            </div>
        </StaggerChild>
    )
}

export default Habit;