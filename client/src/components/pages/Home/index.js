import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Importing Component CSS
import './Home.css';

// Importing child components
import Button from 'components/dumb/Button';

class Home extends Component {
    state = {

    };

    componentDidMount() {
        console.log("Home page did mount");
    }

    render() {
        return (
            <div className="home-page">
                <div className="landing-div">
                    <div className="landing-nav">
                        <div className="home-title">Crushin'it</div>
                        <div className="log-in">
                            <Link to="/login">
                                <Button css="button transparent" text="Log in"/>
                            </Link>
                        </div>
                    </div>
                    <div className="landing-content">
                        <div className="header">
                            Crushin’it lets you develop long term habits and get more done.
                        </div>
                        <div className="description">
                             Our checking-in method enables you to focus on the process of building 
                            habits daily instead of the results. This makes it a lasting change. Don't punish
                            yourself for missing, reward yourself for achieving.
                        </div>
                        <Link to="/signup">
                            <button className="sign-up-button button-green">Sign Up</button>
                        </Link>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon fill="white" points="0,100 100,0 100,100" />
                    </svg>

                </div>

                {/* <div className="container">
                    <div className="container-content">
                        <div className="header">Title of something</div>
                        <div className="description">
                            This is a description about the application. This application can do this, and it can do that. But most importantly, this application is perfect for people who need this and that and this.
                        </div>
                        <div className="description">
                            This is a description about the application. This application can do this, and it can do that. But most importantly, this application is perfect for people who need this and that and this.
                        </div>
                    </div>
                </div> */}
                
                <div className="step2">
                    <h2 className="step2-option">
                        How to Build Long Term Habits 
                    </h2>
                    <h4>
                        Studies have said most people build a longer term habit in 66 days. 
                    </h4>
                    
                    <div className="step2-option option1 "> 
                        <h4>
                            Process Oriented
                        </h4>
                        <h6>
                            Building long term habits means being okay with admitting you missed a day. Focus on building the process. Successful people 
                        </h6>
                    </div>
                    
                    <div className="step2-option option2"> 
                        <img src="https://i.imgur.com/ADaGV5U.png" alt="truck with 3 stacks"/>
                        <h2>
                            Results Oriented
                        </h2>
                        <h4>
                            If you're motivated by seeing results, we recommend you use the 3 sets of 21 days method. This way if you miss a check-in you'll have a chance to reset. This is a useful technique when utilizing habits. 
                        </h4>
                    </div>        
               </div> 
                <div className="type-of-habit">
                    <div>         
                        <img src="https://i.imgur.com/S8K9Z2u.png" alt="piggie bank"/> 
                        <h6>Money</h6> 
                        <p>We all can improve and save more or spend less. Maybe ask yourself daily, "Did you make smart financial decisions today?"  </p>
                    </div>
                    <div>         
                        <img src="https://i.imgur.com/9XP3Ymb.png" alt="apple"/> 
                        <h6>Nutrition</h6> 
                        <p>Do you want to be what you eat? We are what we eat. So let's eat some delicious goodness. Try focusing on your food as you eat it with no distractions. Spending time really tasting and appreciating a small act like eating can bring more mindfullnes to your life everywhere. </p>
                    </div>
                    <div>         
                        <img src="https://i.imgur.com/WSUzocz.png" alt="an atomic symbol inside of a head"/> 
                        <h6>Skill</h6> 
                        <p>Want to juggle, play piano, or yo-yo? There are plenty of skills out there. Useful or just fun, keeping your learning muscles active is never a bad thing. Remember the more times you drop the balls, the more likely you'll learn to juggle.</p>            
                    </div>
                    <div>         
                        <img src="https://i.imgur.com/GfaXP27.png" alt="people talking" /> 
                        <h6>Social</h6> 
                        <p>When life is so busy, it is often hard to make time for friends and family. If we spend a little time thinking about them, often, we see them more. Have you seen been kind to someone you know today?</p>
                    </div>
                    <div>         
                        <img src="https://i.imgur.com/OoGL2lL.png" alt="graduation cap"/> 
                        <h6>Study</h6> 
                        <p>Studying doesn't always mean you are learning a new language. Being continuous to add more knowledge to yourself  With content everywhere, when was the last time you read a book or newspaper? </p>
                    </div>
                    <div>         
                        <img src="https://i.imgur.com/crrEN9O.png" alt="bottle of water"/> 
                        <h6>Water</h6> 
                        <p>Drink more water. This helps resolve` so many ways. Less likely to over eat, prevents kidney stones, get rid of headaches. Most people drink drinks that dehydrate them. Our bodies are up to 60% water. Are you hydrated, today? </p>
                    </div>
                    <div>         
                        <img src="https://i.imgur.com/zG1bIfX.png" alt="briefcase"/> 
                        <h6>Work</h6>
                        <p>Hi ho, it is off to work we go. Everyone has to work, but what can you do that proactively makes your worklife better? Prep documents? Pack your briefcase ahead of time? Arrive early and take 10 minutes to relax before </p>
                    </div>
                </div>  

                <div className="signUp">
                    <h2>
                        Start being your best self today! 
                    </h2>
                    <h4>
                        Change happens by checking in daily. Let us help with that. 
                    </h4>
                    <button>
                        Sign Up  
                    </button>
                </div>
            </div>
        )
    }
}

export default Home;