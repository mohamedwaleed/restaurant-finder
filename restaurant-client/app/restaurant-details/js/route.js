app.config(['$stateProvider', '$urlRouterProvider' ,function ($stateProvider, $urlRouterProvider) {
    
      $stateProvider
      .state('app.restaurant_details', {
          url: 'details/:placeId',
          templateUrl: 'restaurant-details/html/restaurant-details.html',
          controller: 'RestaurantDetailsCtrl'
      });
  }]);