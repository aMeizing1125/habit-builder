import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

// Importing components
import ColumnButtons from 'components/dumb/ColumnButtons';
import Navbar from 'components/dumb/Navbar';

// Importing Dashboard Pages
import Habit from 'components/pages/Dashboard/DashboardPages/Habit';

// Importing Component CSS
import './Dashboard.css';

class Dashboard extends Component{
    state = {
        redirect: false,
        user: {}
    };

    componentDidMount(){
        console.log("Home page did mount");

        const uid = localStorage.getItem("habit-uid");

        if(uid){
            console.log("Uid: " + uid);
        }
        else{
            console.log("User is not signed in");
            this.setState({
                redirect: true
            })
        }
    }

    render(){
        if (this.state.redirect) {
            return <Redirect push to="/signup" />;
        }

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