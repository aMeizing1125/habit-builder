import React, { Component } from 'react';

// Importing components
import ColumnButtons from 'components/dumb/ColumnButtons';
import Navbar from 'components/dumb/Navbar';

// Importing Dashboard Pages
import Habit from 'components/pages/Dashboard/DashboardPages/Habit';

// Importing Component CSS
import './Dashboard.css';

class Dashboard extends Component{
    state = {};

    componentDidMount(){
        console.log("Home page did mount");
    }

    render(){
        return(
            <div className="grid">
                <Navbar />
                <div className="nav-spacer"></div>
                <div className="left-panel">
                    <ColumnButtons />
                </div>
                <div className="page">
                    <div className="page-title">Habits</div>
                    <div className="page-content">
                        <Habit />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;