const mongoose = require('mongoose');

const newuserSchema = new mongoose.Schema({
    name: String,
    last_name:String,
    email: String,
    password: String,
    confirm_password: String
});

module.exports = mongoose.model("newusers", newuserSchema);

