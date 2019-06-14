import React, { Component } from 'react';

// React Router
import { BrowserRouter as Router, Route } from "react-router-dom";

// CSS
import './App.css';

// Pages
import Home from './components/pages/Home';
import Dashboard from 'components/pages/Dashboard';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';

class App extends Component {

  componentDidMount(){
    console.log("App.js is now stateful");
  }

  render(){
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
        </div>
      </Router>
    );
  }
}

export default App;