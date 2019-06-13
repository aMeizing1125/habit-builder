import React from 'react';

// React Router
import { BrowserRouter as Router, Route } from "react-router-dom";

// CSS
import './App.css';

// Components
// import Home from './components/pages/Home';
import Dashboard from 'components/pages/Dashboard';
import Navbar from 'components/dumb/Navbar';

function App() {
  return (
    <Router>

      <div className="app">
        <Navbar />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;