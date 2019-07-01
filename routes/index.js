const path = require("path");
const router = require("express").Router();
const apiRoutes = require("../routes/api/apiRoutes.js");

// Pages
import Home from './components/pages/Home';
// import Dashboard from 'components/pages/Dashboard';
// import Login from './components/pages/Login';
// import Signup from './components/pages/Signup';
// import TestingPage from './components/pages/TestingPage';


//React Route
router.use("/reactroute", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

// API Routes
router.use("/api", apiRoutes);

//Home page
router.use("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/pages/home.html"));
});

// If no routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../public/pages/home.html"));
});

module.exports = router;

// Mei's Heroku Deployment
// Change AppSplash & AppDemo - Home
export default <Router history={hashHistory}>
  <Route path="/" component={Home}>
    <IndexRoute component={Home}/>
    <Route path="demo" component={AppDemo}/>
  </Route>
</Router>
// end of Mei's