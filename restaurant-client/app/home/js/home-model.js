'use strict';

function HomeModel(HomeService) {
    this.getNearbyResturants = function() {
       var promise =  HomeService.get({type:'restaurant',location:'29.99382,31.16988',radius:'10000',key:'AIzaSyBvh95idRI46rYYWqQpoHatZve2GoWIfUg'}).$promise;
        promise.then(function(result) {
            console.log(result);
        }, function(result){
            console.log(result);
        });
    };
}


app.factory('HomeModel', ['HomeService',
    function(HomeService) {
        var homeModel = new HomeModel(HomeService);
        return homeModel;
    }]);