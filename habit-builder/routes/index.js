const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./routes/api/apiRoutes.js");
const htmlRoutes = require ("./routes/html/htmlRoutes.js")

// API Routes
router.use("/api", apiRoutes);

//HTML Routes
router.use("/", htmlRoutes)

// If no routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

module.exports = router;
