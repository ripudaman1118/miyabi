const mongoose = require('mongoose');

const createruleSchema = new mongoose.Schema({
    marathon:String,
    date:String,
    rule:String
   
});

module.exports = mongoose.model("createrules", createruleSchema);

