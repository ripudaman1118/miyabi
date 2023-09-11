const mongoose = require('mongoose');

const createcourseSchema = new mongoose.Schema({
    marathan:String,
    coursetype:String,
    parentSSCormarathonlevel: String,
    tital:String,
    subtital: String,
    cost: String,
    startdate: String,
    description: String,
    planid: String,
    image: String,
});

module.exports = mongoose.model("createourses", createcourseSchema);

