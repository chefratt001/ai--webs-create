const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    brand: { type: String, required: true },
    referrer: { type: String, required: true }
});

module.exports = mongoose.model('Lead', leadSchema);