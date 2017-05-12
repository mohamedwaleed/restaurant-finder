'use strict';

/**
 * @ngdoc overview
 * @name desktopApp
 * @description
 * # desktopApp
 *
 * Main module of the application.
 */
var app = angular
  .module('returantFinderApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'jkAngularRatingStars',
    'ngMap'
  ]);

app.config(['$stateProvider', '$urlRouterProvider' , '$animateProvider', function ($stateProvider, $urlRouterProvider, $animateProvider) {
    
      $stateProvider
      .state('app', {
          abstract: true,
          url: '/',
          templateUrl: 'commons/html/main.html',
          controller: 'MainCtrl'
      });
       $animateProvider.classNameFilter(/^((?!(fa-spinner)).)*$/);

  }]);