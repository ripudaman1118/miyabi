const mongoose = require('mongoose');

const createexerciseSchema = new mongoose.Schema({
    exercise_name:String,
    exercise_description:String,
    language: String
});

module.exports = mongoose.model("createexercises", createexerciseSchema);

