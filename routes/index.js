const path = require("path");
const router = require("express").Router();
const apiRoutes = require("../routes/api/apiRoutes.js");


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
