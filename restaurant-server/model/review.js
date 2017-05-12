var mongoose = require('mongoose');
exports.saveReview = function saveReview(reviewData, onSuccess, onFail) {
    var review = mongoose.model('Review');
    var newReview = new review(reviewData);
    newReview.save(function(err){
        if(err) {
            onFail();
        }
        else {
            onSuccess();
        }
    });
};
exports.getPlaceReviews = function(placeId, onSuccess, onFail) {

    var review = mongoose.model('Review');

    review.find({
        'placeId': placeId
    },function(err, reviews){

        if(err) {
            onFail();
        }
        else {
            onSuccess(reviews);
        }

    });

};