const mongoose = require('mongoose');

const manageextentionSchema = new mongoose.Schema({
    is_available_for_iOS:String,
    select_marathon:String,
    course_title: String,
    courseSub_title:String,
    tenure: String,
    cost: String,
    usd_cost: String
});

module.exports = mongoose.model("manageextentions", manageextentionSchema);

