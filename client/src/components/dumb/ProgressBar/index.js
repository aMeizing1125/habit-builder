import React from 'react';

// Importing ProgressBar Component CSS
import './ProgressBar.css';

// Importing pose animation library
import posed from 'react-pose';

const Fill = posed.div({
    open: { 
        width: ({ progress }) => `${progress}%`,
        delay: 500,
        transition: {
            duration: 700
        }
    },
    closed: { 
        width: "5%",
        transition: {
            type: 'physics'
        }
    }
})

function ProgressBar(props){
    return(
        <div className="progress-bar">
            <Fill initialPose="closed" pose="open" progress={props.progress} className="progress-fill">
                {props.progress}%
            </Fill>
        </div>
    )
}

export default ProgressBar;