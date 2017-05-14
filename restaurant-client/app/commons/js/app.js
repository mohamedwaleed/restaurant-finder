'use strict';

/**
 * @ngdoc overview
 * @name returantFinderApp
 * @description
 * # returantFinderApp
 *
 * Main module of the application.
 */
 
var returantFinderApp = angular
  .module('returantFinderApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'jkAngularRatingStars',
    'ngMap',
    'gm'
  ]);

returantFinderApp.config(['$stateProvider', '$urlRouterProvider' , '$animateProvider', function ($stateProvider, $urlRouterProvider, $animateProvider) {
    
      $stateProvider
      .state('app', {
          abstract: true,
          url: '/',
          templateUrl: 'commons/html/main.html',
          controller: 'MainCtrl'
      });
       $animateProvider.classNameFilter(/^((?!(fa-spinner)).)*$/);

  }]);