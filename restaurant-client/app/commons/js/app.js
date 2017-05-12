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
    'ui.router'
  ]);

app.config(['$stateProvider', '$urlRouterProvider' , function ($stateProvider, $urlRouterProvider) {
    
      $stateProvider
      .state('app', {
          abstract: true,
          url: '/',
          templateUrl: 'commons/html/main.html',
          controller: 'MainCtrl'
      });

  }]);