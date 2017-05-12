'use strict';

app.controller('HomeCtrl', ['HomeModel', function (HomeModel) {
    HomeModel.getNearbyResturants();
 }]);
