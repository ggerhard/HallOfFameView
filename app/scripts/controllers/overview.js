'use strict';

/**
 * @ngdoc function
 * @name hallOfFameViewApp.controller:OverviewCtrl
 * @description
 * # OverviewCtrl
 * Controller of the hallOfFameViewApp
 */
angular.module('hallOfFameViewApp')
  .controller('OverviewCtrl', function ($scope, HallOfFame) {
    
    $scope.hof = HallOfFame.query().then(function(data) {
           $scope.hof = data;
          
        });

  });
