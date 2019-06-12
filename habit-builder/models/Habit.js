const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;


const HabitSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
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
  progress: [
    {
      type: Date,
    }
  ],
  goal: {
    type: Number,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});


const Habit = mongoose.model("Habit", HabitSchema);


module.exports = Habit;
