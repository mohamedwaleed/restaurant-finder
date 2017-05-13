'use strict';
/* global returantFinderApp */

returantFinderApp.config(['$stateProvider',function ($stateProvider) {
    
      $stateProvider
      .state('app.restaurant_details', {
          url: 'details/:placeId',
          templateUrl: 'restaurant-details/html/restaurant-details.html',
          controller: 'RestaurantDetailsCtrl'
      });
  }]);