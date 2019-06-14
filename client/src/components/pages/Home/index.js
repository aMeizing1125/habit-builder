import React, { Component } from 'react';

// Importing Component CSS
import './Home.css';

// Importing child components
import Button from 'components/dumb/Button';

class Home extends Component{
    state = {};

    componentDidMount(){
        console.log("Home page did mount");
    }

    render(){
        return(
            <div className="home-page">
                <div className="landing-div">
                    <div className="landing-nav">
                       <div className="home-title">App Name</div>
                       <div className="sign-up">
                            <Button css="button transparent" text="Sign in"></Button>
                       </div>
                    </div>
                    <div className="landing-content">
                        <div className="header">
                            Application details are here.  This is placeholder text that has been typed
                        </div>
                        <div className="description">
                            This is a description about the application.
                            This application can do this, and it can do that.  But most importantly,
                            this application is perfect for people who need this and that and this.
                        </div>
                        <button className="sign-up-button button-green">Sign Up</button>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon fill="white" points="0,100 100,0 100,100"/>
                    </svg>

                </div>

                <div className="container">
                    <div className="container-content">
                        <div className="header">Title of something</div>
                        <div className="description">
                            This is a description about the application. This application can do this, and it can do that. But most importantly, this application is perfect for people who need this and that and this.
                        </div>
                        <div className="description">
                            This is a description about the application. This application can do this, and it can do that. But most importantly, this application is perfect for people who need this and that and this.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;