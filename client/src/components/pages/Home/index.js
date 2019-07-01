import React, { Component } from 'react';

// Importing Component CSS
import './Home.css';

// Importing child components
import Login from 'components/pages/Login';
import Nav from 'components/dumb/Nav';

// SVG Manipulation Tool
import { SvgLoader, SvgProxy } from 'react-svgmt';

// Importing SVG's
import logo from 'img/logo.svg';
// import tow from 'img/tow.svg';
import calendar from 'img/calendar.svg';
import handWrench from 'img/hand-wrench.svg';
import tool from 'img/tool.svg';

class Home extends Component {
    state = {
        loginVisible: false
    };

    componentDidMount() {
        console.log("Home page did mount");
    }

    handleLogin = () => {
        this.setState({
            loginVisible: true
        })
    }

    render() {
        return (
            <div className="home-page">
                {/* Login */}
                {this.state.loginVisible && ( <Login /> )}

                <Nav color="nav-red" page="home" signIn={this.handleLogin} />

                <div className="landing-div">
                    <div className="landing-left">
                        <div className="landing-title-wrapper">
                            <div className="landing-logo">
                                <SvgLoader path={logo}>
                                    <SvgProxy selector=".logo-top" fill="rgb(255, 92, 80)" />
                                    <SvgProxy selector=".logo-main" fill="rgb(255, 92, 80)" />
                                    <SvgProxy selector=".logo-accent" fill="#486791" />
                                </SvgLoader>
                            </div>
                            <div className="landing-title">Crushin' It!</div>
                        </div>
                        <div className="landing-description">
                            <strong>Building strong habits</strong> one day at a time
                        </div>
                    </div>
                    <div className="landing-right"></div>
                </div>
                <div className="home-divider">
                    divider
                </div>
                <div className="app-description-wrapper">
                    <div className="app-description">
                        <div className="description-left description">
                            <div className="description-icon">
                                <SvgLoader path={calendar}>
                                </SvgLoader>
                            </div>
                            <div className="description-title">Daily Check In</div>
                            <div className="description-text">
                                Create a new habit and check in daily to track progress.
                            </div>
                        </div>
                        <div className="description-middle description">
                            <div className="description-icon">
                                <SvgLoader className="hand-wrench" path={handWrench}>
                                </SvgLoader>
                            </div>
                            <div className="description-title">Work toward a goal</div>
                            <div className="description-text">
                                Choose how many days you want to challenge yourself to.
                                It only takes 21 days to build a habit. 
                            </div>
                        </div>
                        <div className="description-right description">
                            <div className="description-icon">
                                <SvgLoader path={tool}>
                                </SvgLoader>
                            </div>
                            <div className="description-title">Built-in Tools</div>
                            <div className="description-text">
                                Crushin' it! has a built-in todo list and time tracker.
                                Use these tools to better optimize your habits
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-divider">
                    divider
                </div>
            </div>
        )
    }
}

export default Home;