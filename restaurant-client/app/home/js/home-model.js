'use strict';

function HomeModel(HomeService, GOOGLE_API_KEY) {
    this.nearbyResturants = [];
    var thisModel = this;
    this.getNearbyResturants = function(latitude, lognitude, onSuccess, onFail) {
       var location = latitude + ',' + lognitude;
       var promise =  HomeService.get({type:'restaurant',location:location,radius:'1000',key: GOOGLE_API_KEY}).$promise;
        promise.then(function(response) {
            angular.extend(thisModel.nearbyResturants, response.result.results);
            if(onSuccess){
                onSuccess();
            }
        }, function(err){
            if(onFail){
                onFail();
            }
            console.log(err);
        });
    };
}


app.factory('HomeModel', ['HomeService','GOOGLE_API_KEY',
    function(HomeService, GOOGLE_API_KEY) {
        var homeModel = new HomeModel(HomeService, GOOGLE_API_KEY);
        return homeModel;
    }]);