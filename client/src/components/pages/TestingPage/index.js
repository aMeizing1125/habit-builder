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
            </div>
        )
    }
}

export default TestingPage;