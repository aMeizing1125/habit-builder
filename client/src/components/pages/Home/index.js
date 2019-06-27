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
                             Our check-in method enables you to focus on the process of building 
                            habits daily to create a lasting change. Don't focus on what you are forgetting,
                            focus on what you are acheiving.
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
                        Studies have shown that it takes most people 66 days to form a long-term habit. 
                    </h4>
                    
                    <div className="step2-option option1 "> 
                        <h4>
                            Progress Oriented
                        </h4>
                        <h6>
                            Building long-term habits means you can't beat yourself up over a missed a day. Focus on the progress you are making to motivate you. 
                        </h6>
                    </div>
                    
                    <div className="step2-option option2"> 
                        <img src="https://i.imgur.com/ADaGV5U.png" alt="truck with 3 stacks"/>
                        <h2>
                            Goal Oriented
                        </h2>
                        <h4>
                            If you're motivated by seeing results, we recommend you use the 21 days method. 
                            This breaks down your progress in to 21 day cycles, preventing scattered missed days from seeming as damaging.
                            If you miss a day, finish your current cycle and start with a clean slate. This is a useful technique to keep your focus on the positive. 
                        </h4>
                    </div>        
               </div> 
                <div className="type-of-habit">
                    <div>         
                        <img src="https://i.imgur.com/S8K9Z2u.png" alt="piggie bank"/> 
                        <h6>Money</h6> 
                        <p>We can all improve ourspending habits. Maybe ask yourself daily, "Did I make smart financial decisions today?"  </p>
                    </div>
                    <div>         
                        <img src="https://i.imgur.com/9XP3Ymb.png" alt="apple"/> 
                        <h6>Nutrition</h6> 
                        <p> We are what we eat, so let's make sure we are healthy. 
                            Keep track of every day you have a healthy snack or meal to create a healthier diet.</p>
                    </div>
                    <div>         
                        <img src="https://i.imgur.com/WSUzocz.png" alt="an atom symbol inside of a head"/> 
                        <h6>Skill</h6> 
                        <p> Have you always wanted to juggle, play piano, or yo-yo? 
                            Useful or just for fun, keeping your learning muscles active is never a bad thing. 
                            Remember to practice everyday and you will have that new skill in no time.</p>            
                    </div>
                    <div>         
                        <img src="https://i.imgur.com/GfaXP27.png" alt="people talking" /> 
                        <h6>Social</h6> 
                        <p> Life is busy, it can often be hard to make time for friends and family. 
                            Reach out to or meet up with a friend or family member every day to stay in touch. 
                            Have you seen been kind to someone you know today?</p>
                    </div>
                    <div>         
                        <img src="https://i.imgur.com/OoGL2lL.png" alt="graduation cap"/> 
                        <h6>Study</h6> 
                        <p> Studying keeps your mind sharp and reinforces topics that you have been taught.
                            It can also just be a reminder to make time to read or write.   
                            With content everywhere, when was the last time you read a book? </p>
                    </div>
                    <div>         
                        <img src="https://i.imgur.com/crrEN9O.png" alt="bottle of water"/> 
                        <h6>Water</h6> 
                        <p> Drink more water. Water helps your body and mind in many ways. Did you know that your bodys response to dehydration and hunger are the same?
                            You may need water, not food to satisfy that craving. Sugary drinks actually dehydrate you, so pure water intake is incredibly important. 
                            Our bodies are up to 60% water. Have you hydrated, today? </p>
                    </div>
                    <div>         
                        <img src="https://i.imgur.com/zG1bIfX.png" alt="briefcase"/> 
                        <h6>Work</h6>
                        <p> Hi ho, it's off to work we go. Everyone has to work, but are you working efficiently? 
                            Build habits to leaeve on time and prepared! </p>
                    </div>
                </div>  

                <div className="signUp">
                    <h2>
                        Start being your best self today! 
                    </h2>
                    <h4>
                        Change happens by checking-in daily. Let us help with that. 
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