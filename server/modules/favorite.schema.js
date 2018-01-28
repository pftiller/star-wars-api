const mongoose = require('mongoose');

let schema = new mongoose.Schema(
    {
        url: {type: String, unique: true, required: true},
        title: {type: String, unique: false, required: false},
        episode_id: {type: Number, unique: false, required: false},
        director: {type: String, unique: false, required: false},
        name: {type: String, unique: false, required: false},
        birth_year: {type: Number, unique: false, required: false},
        eye_color: {type: String, unique: false, required: false},
        gender: {type: String, unique: false, required: false},
        population: {type: Number, unique: false, required: false},
        terrain: {type: String, unique: false, required: false},
        classification: {type: String, unique: true, required: false},
        language: {type: String, unique: false, required: false},
        model: {type: String, unique: false, required: false},
        manufacturer: {type: String, unique: false, required: false},
        class: {type: String, unique: false, required: false}
    }
)

module.exports = schema;