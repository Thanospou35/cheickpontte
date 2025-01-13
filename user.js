const mongoose = require('mongoose');

const modelSchemas = mongoose.Schema({
    nom: String,
    prenom: String,
    email: { type: String, required: true, minLength: 10, maxLength: 100, unique: true },
    age: Number,
    favoriteFoods: [String],
});

const model = mongoose.models.User || mongoose.model("User", modelSchemas);

module.exports = model;
