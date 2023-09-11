const mongoose = require('mongoose');

const createcategorySchema = new mongoose.Schema({
    category_name:String,
    category_image:String,
    language: String
});

module.exports = mongoose.model("createcategorys", createcategorySchema);

