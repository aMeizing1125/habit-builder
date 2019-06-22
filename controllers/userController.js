const db = require("../models");

// set the methods we'll use to access the Users collection

module.exports = {
    createUser: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    authenticate: function(req, res) {
        User.findOne(
            {username: req.body.username},
            function(err, user) {
                if (err) throw err;
                if (user) {
                    user.comparePassword(req.body.password, function(err, isMatch) {
                        if (err) throw err;
                        res.json(user);
                    });
                } else {
                    res.status(404).redirect("/");
                };
            }
        )
    },
    findUser: function(req, res) {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // Find all habits associated with the _id of a user
    findUserHabits: function(req, res){
        db.User
            .findById(req.params.id)
            .then(dbUser => {
                return db.Habit.find( { _id: { $in: dbUser.habit }})
            })
            .then(dbHabits => {
                res.json(dbHabits);
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