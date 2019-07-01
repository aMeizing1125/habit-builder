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
    const fillColor = { backgroundColor: props.fillColor };

    return(
        <div className="progress-bar">
            <Fill 
                className="progress-fill"
                progress={props.progress} 
                style={fillColor} 
                initialPose="closed" 
                pose="open"
            >
                {props.progress}%
            </Fill>
        </div>
    )
}

export default ProgressBar;