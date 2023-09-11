const mongoose = require('mongoose');

const faqtagSchema = new mongoose.Schema({
 tag:String
});

module.exports = mongoose.model("faqtags", faqtagSchema);

