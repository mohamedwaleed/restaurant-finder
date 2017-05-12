var review = require('../model/review');
var reviewService =  (function () {
    var publicApi = {
        saveReview: function(data, onSuccess, onFail) {
            review.saveReview(data, onSuccess, onFail);
        },
        getPlaceReviews: function(placeId, onSuccess, onFail) {
            review.getPlaceReviews(placeId, onSuccess, onFail);
        }
    };
    return publicApi;
})();

module.exports = reviewService;
