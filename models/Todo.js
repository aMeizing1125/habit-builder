const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  rank: {
    type: Number,
  },
  created: {
    type: String,
  },
  complete: {
    type: Boolean,
  }
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
