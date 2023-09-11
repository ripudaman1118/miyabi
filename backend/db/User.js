const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_role:String,
    language:String,
    name: String,
    last_name:String,
    email: String,
    password: String,
    confirm_password: String
});

module.exports = mongoose.model("users", userSchema);

