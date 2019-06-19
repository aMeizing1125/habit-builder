const db = require("../models");

// set the methods we'll use to access the Users collection

module.exports = {
    createUser: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findUser: function(req, res) {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findUserHabits: function(req, res){
        // Find the user from req.params.id
        db.User
            .findById(req.params.id)
            .then(dbUser => {
                return db.User.find({ _id: req.params.id }, { $push: { habit: dbUser.habit } }, { new: true })
            })
            .then(dbUser => {
                res.json(dbUser);
            })
            .catch(err => res.status(422).json(err));
    },

    // Jonathan testing----------------------------------------------------------------

    findUserByQuery: function(req, res){
        db.User 
            .findOne(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

    // --------------------------------------------------------------------------------

}