import React from 'react';

// React Router
import { BrowserRouter as Router, Route } from "react-router-dom";

// CSS
import './App.css';

// Pages
import Home from './components/pages/Home';
import Dashboard from 'components/pages/Dashboard';

function App() {
  return (
    <Router>

      <div className="app">
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;