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
            .findbyId(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },
    createHabit: function (req, res) {
        db.Habit
            .create(req.body)
            .then(dbModel => res.json(dbModel))
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
    }
}