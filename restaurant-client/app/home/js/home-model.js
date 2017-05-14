'use strict';
/* global returantFinderApp */

function HomeModel(HomeService, GOOGLE_API_KEY) {
    this.getNearbyResturants = function(latitude, lognitude, onSuccess, onFail) {
       var location = latitude + ',' + lognitude;
       var promise =  HomeService.get({type:'restaurant',location:location,radius:'1000',key: GOOGLE_API_KEY}).$promise;
        promise.then(function(response) {
            if(onSuccess){
                onSuccess(response.result.results);
            }
        }, function(err){
            if(onFail){
                onFail();
            }
            console.log(err);
        });
    };
}


returantFinderApp.factory('HomeModel', ['HomeService','GOOGLE_API_KEY',
    function(HomeService, GOOGLE_API_KEY) {
        var homeModel = new HomeModel(HomeService, GOOGLE_API_KEY);
        return homeModel;
    }]);