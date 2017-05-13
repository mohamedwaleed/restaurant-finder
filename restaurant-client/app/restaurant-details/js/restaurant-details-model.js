'use strict';
/* global returantFinderApp */

function RestaurantDetailsModel(restaurantDetailsService, GOOGLE_API_KEY) {
    this.resturantDetails = {};
    var thisModel = this;

    this.getRestaurantDetails = function(placeId, onSuccess, onFail) {
        var promise = restaurantDetailsService.get({placeId:placeId,key:GOOGLE_API_KEY}).$promise;
        promise.then(function(response) {
            angular.extend(thisModel.resturantDetails, response.result.result);
            if(onSuccess){
                onSuccess(response.result.result);
            }
        }, function(err) {
            if(onFail){
                onFail();
            }
            console.log(err);
        });
    };
}


returantFinderApp.factory('RestaurantDetailsModel', ['RestaurantDetailsService', 'GOOGLE_API_KEY',
    function(RestaurantDetailsService, GOOGLE_API_KEY) {
        var restaurantDetailsModel = new RestaurantDetailsModel(RestaurantDetailsService, GOOGLE_API_KEY);
        return restaurantDetailsModel;
    }]);