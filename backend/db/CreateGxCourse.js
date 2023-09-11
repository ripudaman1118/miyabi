const mongoose = require("mongoose");

const creategxcourseSchema = new mongoose.Schema({
    parent_SSC_or_marathon_level: String,
    is_available_for_iOS: String,
  tital: String,
  subtital: String,
  cost: String,
  usdcost: String,
  startdate: String,
  description: String,
  number_of_day: String,
  materialavailibilitydays: String,
  image: String,
  autocrop: String,
  
});

module.exports = mongoose.model("creategxcourses", creategxcourseSchema);
