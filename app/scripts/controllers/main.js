'use strict';

/**
 * @ngdoc function
 * @name hallOfFameViewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hallOfFameViewApp
 */
angular.module('hallOfFameViewApp')
  .controller('MainCtrl', function ($scope, $http) {
      $scope.hof = [];
      $http({
        method : "GET",
        url : "https://raw.githubusercontent.com/1ppm/1ppmLog/master/api/HallOfFame.json"
    }).then(function mySucces(response) {
        $scope.hof = response.data.users;
    }, function myError(response) {
        $scope.hof = response.statusText;
    });
    
  });
