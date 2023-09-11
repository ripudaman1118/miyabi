const mongoose = require('mongoose');

const appSettingSchema = new mongoose.Schema({
androidVersion:String,
cloud:String,
email:String,
emailPassword:String,
iosVersion:String,
massageReminderMessage:String,
minAndroidVersion:String,
minIosVersion:String,
morningReminderMessage:String,
passforAPI:String,
paypal:String,
paypalCLIENT_ID:String,
paypalCLIENT_SECRET:String,
publicID:String,
robokassa:String,
stripe:String,
sUBSCRIPTION_KEY:String,
termCondtion:String
});

module.exports = mongoose.model("appsettings", appSettingSchema);

