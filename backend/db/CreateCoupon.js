const mongoose = require('mongoose');

const createcouponSchema = new mongoose.Schema({
    coupons:String,
    create_date:String,
    discount: String,
    discount_type:String,
    marathon_name: String,
    order_number: String,
    number_of_uses: String,
    consumed_count: String,
    valid: String
});

module.exports = mongoose.model("createcoupons", createcouponSchema);

