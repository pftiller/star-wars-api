const mongoose = require('mongoose');

let schema = new mongoose.Schema(
    {
        url: {type: String, required: true}
    }
)

module.exports = schema;