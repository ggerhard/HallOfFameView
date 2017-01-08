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

      var user =  {
        "username": "aguaviva",
        "githubUrl": "https://github.com/aguaviva",
        "otherUrl": "",
        "projects": [
            {
                    "month": "01", 
                    "year": "2016",
                    "name": "Physics engine",
                    "description": "Physics engine, along with a short tutorial on constraints (runs in browser)",
                    "status": "Released"
                
            },
            {
                    "month": "02",
                    "year": "2016",
                    "name": "Neural network",
                    "description": "Neural network classifier, includes tutorial on backpropagation (runs in browser)",
                    "status": "Released"
                
            }
        ]
    };
    
    $scope.user = user;

    var profile_url = "https://api.github.com/users/" + user.username;

 $http({
        method : "GET",
        url : profile_url
    }).then(function mySucces(response) {
        $scope.github_profile = response.data;
    }, function myError(response) {
        $scope.hof = response.statusText;
    });

      $http({
        method : "GET",
        url : "https://raw.githubusercontent.com/1ppm/1ppmLog/master/api/HallOfFame.json"
    }).then(function mySucces(response) {
        $scope.hof = response.data.users;
    }, function myError(response) {
        $scope.hof = response.statusText;
    });
    
  });
