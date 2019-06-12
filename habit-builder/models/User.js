const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const UserSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  habit: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Habit'
    }
  ],
  created: {
    type: Date,
    default: Date.now
  }
});


const User = mongoose.model("User", UserSchema);


module.exports = User;