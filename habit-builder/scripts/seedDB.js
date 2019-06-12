const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/habitbuildinglist"
);

const userSeed = [
  {
    username: "Henry Habit",
    password: "Habitual",
    created: Date.now
  }
]

const habitSeed = [
  {
    name: "CODE",
    category: "Technology",
    image: "https://411mania.com/wp-content/uploads/2018/01/Mark-Henry-645x370.jpg",
    frequency: "Daily",
    progress: [],
    goal: 30,
    created: Date.now
  }
];

db.User
  .remove({})
  .then(()=> db.User.collection.insertOne(userSeed))
  .then(data => {
    console.log(data.result.n + " person inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  