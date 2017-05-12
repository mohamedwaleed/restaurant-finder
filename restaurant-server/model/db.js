var mongoose = require('mongoose');
var config = require('../config.json');
var reviewSchema = new mongoose.Schema({
    placeId: String,
    date: Date,
    name: String,
    description: String,
    rating: Number
});
mongoose.model('Review', reviewSchema);
mongoose.connect('mongodb://localhost/restaurant_finder');