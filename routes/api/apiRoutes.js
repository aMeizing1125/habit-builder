const router = require("express").Router();
const habitController = require("../../controllers/habitController");
const userController = require("../../controllers/userController");
const todoController = require("../../controllers/todoController");
const skillController = require('../../controllers/skillController');


//Check user id and password on login
router
  .route("/user")
  .post(userController.authenticate)

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

router
  .route("/checkin/:id")
  .post(habitController.checkIn);
// --------------------------------------------------------------------------------

// Adding code for functionality of the todo controller
// find to dos
router
  .route("/todo/:id")
  .get(todoController.findTodos);

// create new todo
router
  .route("/newtodo/:id")
  .post(todoController.createTodo);

// update a todo
router
  .route("/updatetodo/:id")
  .put(todoController.updateTodo)

// remove a todo
router
  .route("/removetodo/:id")
  .delete(todoController.removeTodo);

// Skills routes--------------------------------
router 
  .route("/skills/:id")
  .get(skillController.findSkills);

module.exports = router;