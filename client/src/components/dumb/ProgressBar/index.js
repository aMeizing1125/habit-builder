import React from 'react';

// Importing ProgressBar Component CSS
import './ProgressBar.css';

function ProgressBar(props){
    // Setting up a percentage value of the width of the progress bar
    // based on the "progress" property
    const progress = props.progress + '%';

    return(
        <div className="progress-bar">
            <div 
                style={{ width : progress}}
                className="progress-fill"
            >
                {props.progress}%
            </div>
        </div>
    )
}

export default ProgressBar;