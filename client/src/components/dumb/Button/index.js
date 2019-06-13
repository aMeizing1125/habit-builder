import React from 'react';

// Component CSS
import './Button.css'

function Button(props){
    return(
        <button className={props.css}>{props.text}</button>
    )
}

export default Button;