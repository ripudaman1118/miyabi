const mongoose = require('mongoose');

const creategreatextensionSchema = new mongoose.Schema({
    select_marathon:String,
    select_great_extension:String,
    tital:String,
    subtital: String,
    tenure: String,
    cost: String,
    usdcost: String,
    description: String,
});

module.exports = mongoose.model("creategreatextensions", creategreatextensionSchema);

