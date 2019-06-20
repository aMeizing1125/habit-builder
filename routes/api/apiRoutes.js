const router = require("express").Router();
const habitController = require("../../controllers/habitController");
const userController = require("../../controllers/userController");

//Check user id and password on login
router
  .route("/user")
  .get(userController.authenticate)

//create User
router
  .route("/newuser")
  .post(userController.createUser)

// Add Habit
router
  .route("/addhabit/:id")
  .post(habitController.createHabit)

// Display Habits
router
  .route("/habits/:id")
  .get(habitController.findAll)

// Edit habits
router
  .route("/habit/:id")
  .put(habitController.updateHabit)

// Delete habits
router
  .route("/remove/:id")
  .delete(habitController.removeHabit)

// Jonathan testing----------------------------------------------------------------
router
  .route("/userhabits/:id")
  .get(userController.findUserHabits);

router
  .route("/finduserbyquery")
  .post(userController.findUserByQuery);
// --------------------------------------------------------------------------------

module.exports = router;