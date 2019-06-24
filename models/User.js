const mongoose = require("mongoose");

const Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
const saltRounds = 10;


const UserSchema = new Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  username: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
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
  todo: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Todo'
    }
  ],
  created: {
    type: String
  }
});

UserSchema.pre('save', function(next) {
  let User = this;
//only hash the password if it is new or modified
  if (!User.isModified('password')) return next();
  //generate salt (Yo mamas so fat Thanos had to snap twice)
  bcrypt.genSalt(saltRounds, function(err, salt) {
    if (err) return next (err);
    //hash the password using our new salt
    bcrypt.hash(User.password, salt, function(err, hash) {
      if (err) return next(err);
      //override the cleartext password with the hashed one
      User.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

 User = mongoose.model("User", UserSchema);


module.exports = User;
