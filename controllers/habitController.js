const db = require("../models");

// set the methods we'll use to access the Habits collection

module.exports = {
    findAll: function (req, res) {
        // findAll to list habits, sort by created: 1 to make the longest habit appear at top
        db.Habit
            .find(req.query)
            .sort({ created: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findbyId: function (req, res) {
        db.Habit
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createHabit: function (req, res) {
        db.Habit
            .create(req.body)
            .then(dbHabit => {
                res.send(dbHabit)
                return db.User.findOneAndUpdate({ _id: req.params.id }, { $push: { habit: dbHabit._id } }, { new: true })
            })
            .catch(err => res.status(422).json(err));
    },
    updateHabit: function (req, res) {
        db.Habit
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    removeHabit: function (req, res) {
        db.Habit
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    checkIn: function (req, res){
        db.Habit
            .update({ _id: req.params.id }, { $push: { progress: req.body.timestamp } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}