import React, { Component } from 'react';

class TestingPage extends Component{
    state = {};

    componentDidMount(){
        console.log("testing page did mount");
    }

    render(){
        return(
            <div className="testing-page">
                <div className="testing-title">Testing Page</div>
                <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/money_box-512.png"></img>
            </div>
        )
    }
}

export default TestingPage;