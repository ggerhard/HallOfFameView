'use strict';

/**
 * @ngdoc function
 * @name hallOfFameViewApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the hallOfFameViewApp
 */
angular.module('hallOfFameViewApp')
  .controller('ProfileCtrl', function ($scope, $http, HallOfFame, $routeParams, $location) {

      var currentUserIndex = 0;
      $scope.previousUser = null;
      $scope.nextUser = null;
     
      $scope.hof = HallOfFame.query().then(function(data) {
           $scope.hof = data;
           
           if ($routeParams.id) {
               // $scope.user = $filter('filter')($scope.hof, function (u) {return u.username == $routeParams.id;})[0];
               for (var i = 0; i < data.length; i++) {
                    if (data[i].username == $routeParams.id) {
                        currentUserIndex = i;
                        $scope.user = data[i];
                        break;
                    }
                }
                if (currentUserIndex < data.length - 1) {
                    $scope.nextUser = $scope.hof[currentUserIndex +1].username;
                }
                if (currentUserIndex > 0) {
                    $scope.previousUser = $scope.hof[currentUserIndex - 1].username;
                } 
               
            } else {
               $scope.user = $scope.hof[currentUserIndex];
               if ($scope.hof.length > 1) {
                $scope.nextUser = $scope.hof[currentUserIndex +1].username;
               }
           }

           var rows = [];
           var row = [];
           for (var i = 0; i < $scope.user.projects.length; i++) {
               var dat = $scope.user.projects[i].date; 
               var year = "";
               var month = "";

               if (i % 3 == 0) {
                    row = [];
                    rows.push(row);
               }

               if (dat.startsWith('20')) {
                    year = dat.slice(0,4);
                    month = dat.slice(4,6);
               } else {
                    month = dat.slice(0,2);
                    year = dat.slice(2,6);
               }
               $scope.user.projects[i].date = year + " | " + month;
               row.push($scope.user.projects[i]);
             
            }

            $scope.rows = rows;


           var profile_url = "https://api.github.com/users/" + $scope.user.username;

           $http({
                method : "GET",
                url : profile_url
            }).then(function mySucces(response) {
                $scope.github_profile = response.data;
            }, function myError(response) {
                $scope.hof = response.statusText;
            });
        });
     

    //   var user =  {
    //     "username": "aguaviva",
    //     "githubUrl": "https://github.com/aguaviva",
    //     "otherUrl": "",
    //     "projects": [
    //         {
    //                 "month": "01",
    //                 "year": "2016",
    //                 "name": "Physics engine",
    //                 "description": "Physics engine, along with a short tutorial on constraints (runs in browser)",
    //                 "status": "Released"

    //         },
    //         {
    //                 "month": "02",
    //                 "year": "2016",
    //                 "name": "Neural network",
    //                 "description": "Neural network classifier, includes tutorial on backpropagation (runs in browser)",
    //                 "status": "Released"

    //         }
    //     ]
    // }; 

    // $scope.next = function next() {
    //   console.log("next")
    //   if (currentUserIndex < $scope.hof.length) {
    //       currentUserIndex = currentUserIndex + 1;
    //       var next = $scope.hof[currentUserIndex];
    //       $location.path("/prof/" + next.username);
    //   }
    // }

    // $scope.prev = function prev() {
    //   console.log("prev")
    //   if (currentUserIndex > 0) {
    //       currentUserIndex = currentUserIndex - 1;
    //       var prev = $scope.hof[currentUserIndex];
    //       $location.path("/prof/" + prev.username);
    //   }
    // }
    

  });
