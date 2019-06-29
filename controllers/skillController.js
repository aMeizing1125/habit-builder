const db = require("../models");

module.exports = {
    findSkills: function(req, res){
        db.User
          .findById(req.params.id)
          .then(dbUser => {
            return db.Todo.find( { _id: { $in: dbUser.todo }})
          })
          .then(dbTodo => {
            res.json(dbTodo);
          })
          .catch(err => res.status(422).json(err));
    },
    newSkill: function(req, res){
        db.Skill
            .create(req.body)
            .then(dbSkill => {
                res.json(dbSkill)
                return db.User.findOneAndUpdate({ _id: req.params.id }, { $push: { todo: dbTodo._id } }, { new: true })
            })
            .catch(err => res.status(422).json(err))
    },
    removeSkill: function(req, res){
        db.Skill
            .findById(req.params.id)
            .then(dbSkill => dbSkill.remove())
            .then(dbSkill => res.json(dbSkill))
            .catch(err => res.status(422).json(err));
    }
}