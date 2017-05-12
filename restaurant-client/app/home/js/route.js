app.config(['$stateProvider', '$urlRouterProvider' ,function ($stateProvider, $urlRouterProvider) {
    
      $stateProvider
      .state('app.home', {
          url: 'home',
          templateUrl: 'home/html/home.html',
          controller: 'HomeCtrl'
      });
      $urlRouterProvider.otherwise('/home');
  }]);