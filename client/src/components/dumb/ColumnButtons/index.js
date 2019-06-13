import React from 'react';

// Local component CSS
import './ColumnButtons.css'

function ColumnButtons(props){
    return(
        <div className="column-buttons">
            <div className="column-tab active">Habits</div>
            <div className="column-tab"></div>
            <div className="column-tab"></div>
            <div className="column-tab"></div>
        </div>
    )
}

export default ColumnButtons;