const mongoose = require("mongoose");

const createmarathonSchema = new mongoose.Schema({
  isPaid: String,
  is_available_for_iOS: String,
  tital: String,
  subtitle: String,
  description: String,
  image: String,
  number_of_day: String,
  cost: String,
  usdcost: String,
  materialavailibilitydays: String,
  ispublic: String,
  isdisplay: String,
  contest: String,
  comment: String,
  autocrop: String,
  language: String,
  parent_SSC_or_marathon_level: String,
  start_date: String,
  contest_upload_last_date: String,
  finalist_announcement_date: String,
  voting_last_date: String,
  winner_announcement_date: String,
});

module.exports = mongoose.model("createmarathons", createmarathonSchema);
