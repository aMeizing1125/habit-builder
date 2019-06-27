import React from 'react';

// Importing component CSS
import './Alert.css';

function Alert(props){
    return(
        <div className="alert-modal">
            <div className="alert-content">{props.message}</div>
        </div>
    )
}

export default Alert;