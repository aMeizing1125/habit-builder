const router = require("express").Router();
const habitRoutes = require("./apiRoutes.js");

// Habit routes
router.use("/habits", habitRoutes);

module.exports = router;
