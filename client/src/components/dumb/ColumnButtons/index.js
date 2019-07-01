import React from 'react';

// Local component CSS
import './ColumnButtons.css'

// SVG Manipulation Tool
import { SvgLoader, SvgProxy } from 'react-svgmt';

import habitIcon from 'img/habit.svg';
import todoIcon from 'img/todo.svg';

function ColumnButtons(props){
    return(
        <div className="column-buttons">
            <div 
                className={'column-tab ' + (props.currentPage === 'habits' ? "active" : null)}
                onClick={() => props.selectPage("habits")
            }>
                <div className="tab-title">
                    Habits
                </div>
                <div className="tab-icon tab-habit">
                    <SvgLoader path={habitIcon}>
                        <SvgProxy selector=".path" fill="white">
                        </SvgProxy>
                    </SvgLoader>
                </div>
            </div>
            <div 
                className={'column-tab ' + (props.currentPage === 'todo' ? "active" : null)}
                onClick={() => props.selectPage("todo")}
            >
                <div className="tab-title">
                    Todo
                </div>
                <div className="tab-icon tab-todo">
                    <SvgLoader path={todoIcon}>
                    </SvgLoader>
                </div>
            </div>
            <div className="column-tab">
                <div className="tab-title">
                    Time Tracking
                </div>
                <div className="tab-icon">
                    icon
                </div>
            </div>
        </div>
    )
}

export default ColumnButtons;