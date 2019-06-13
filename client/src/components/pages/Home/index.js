import React, { Component } from 'react';

// Importing components
import ColumnButtons from '../../dumb/ColumnButtons';

// Importing Component CSS
import './Home.css';

class Home extends Component{
    state = {};

    componentDidMount(){
        console.log("Home page did mount");
    }

    render(){
        return(
            <div class="grid">
                <div className="nav-spacer"></div>
                <div className="left-panel">
                    <ColumnButtons />
                </div>
                <div className="page">
                    <div className="content">
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;