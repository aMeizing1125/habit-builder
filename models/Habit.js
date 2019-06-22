const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const HabitSchema = new Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
  },
  image: {
    type: Buffer
  },
  frequency: {
    type: String,
    required: true
  },
  progress: {
    type: Array,
    default: []
  },
  goal: {
    type: Number,
    required: true
  },  
  created: {
<<<<<<< HEAD
    type: String,
    required: true
=======
    type: String
>>>>>>> 7a63c6f777d80ded5a78bb520b0b2b123de0e8c6
  }
});


const Habit = mongoose.model("Habit", HabitSchema);


module.exports = Habit;
