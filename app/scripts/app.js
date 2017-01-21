'use strict';

/**
 * @ngdoc overview
 * @name hallOfFameViewApp
 * @description
 * # hallOfFameViewApp
 *
 * Main module of the application.
 */
angular
  .module('hallOfFameViewApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
       redirectTo: '/overview'
      })
      .when('/profile/:id', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
       .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/overview', {
        templateUrl: 'views/overview.html',
        controller: 'OverviewCtrl',
        controllerAs: 'overview'
      })
      .otherwise({
        redirectTo: '/overview'
      });
  });
