const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const HabitSchema = new Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: [true, 'Please name your habit']
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
    required: [true, 'You forgot to choose a goal!']
  },  
  created: {
    type: String,
    required: true
  }
});


const Habit = mongoose.model("Habit", HabitSchema);


module.exports = Habit;