'use strict';

function ReviewModel(ReviewService) {
    var thisModel = this;

    this.getPlaceReviews = function(placeId, onSuccess, onFail) {
        var promise = ReviewService.get({placeId: placeId}).$promise;      
        promise.then(function(response) {
            if(onSuccess){
                onSuccess(response.result);
            }
        },function(err){
            if(onFail){
                onFail();
            }
        });
    }
    this.saveReview = function(data, onSuccess, onFail) {
        var promise = ReviewService.save({}, data).$promise; 
        promise.then(function(response) {
            if(onSuccess){
                if(response.success){
                    onSuccess();
                }else {
                    onFail();
                }
            }
        },function(err){
            if(onFail){
                onFail();
            }
        });
    };
}


app.factory('ReviewModel', ['ReviewService',
    function(ReviewService) {
        var reviewModel = new ReviewModel(ReviewService);
        return reviewModel;
    }]);