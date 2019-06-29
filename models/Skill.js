const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    progress: {
        type: Array,
        default: []
    },
    created: {
        type: String
    }
})

const Skill = mongoose.model("Skill", SkillSchema);

module.exports = Skill;