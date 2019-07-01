import React from 'react';

// Importing component CSS
import './ExitButton.css';

// Pose animation library
import posed from 'react-pose';

const Exit = posed.div({
    hoverable: true,
    pressable: true,
    init: {
        scale: 1,
        transition: {
            type: "spring"
        }
    },
    hover: {
        scale: 1.1
    },
    press: {
        scale: .9
    }
})

function ExitButton(props){
    return(
        <Exit 
            className="exit-button"
            onClick={props.click}
        >X</Exit>
    )
}

export default ExitButton;