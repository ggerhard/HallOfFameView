'use strict';

/**
 * @ngdoc service
 * @name hallOfFameViewApp.hallOfFame.service
 * @description
 * # hallOfFame.service
 * Service in the hallOfFameViewApp.
 */
angular.module('hallOfFameViewApp')
  .service('HallOfFame', function ($http) {

    this.query = function() {
        var promise = $http({
            method : "GET",
            url : "https://raw.githubusercontent.com/1ppm/1ppmLog/master/api/HallOfFame.json"
        }).then(function mySucces(response) {
            return response.data;
        }, function myError(response) {
            console.log("Could not find HalloOfFame" + response);
            return [];
        });
        return promise;
      }
  });
