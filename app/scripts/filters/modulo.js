'use strict';

/**
 * @ngdoc filter
 * @name hallOfFameViewApp.filter:modulo
 * @function
 * @description
 * # modulo
 * Filter in the hallOfFameViewApp.
 */
angular.module('hallOfFameViewApp')
  .filter('modulo', function () {
     return function (arr, num, val) {
      debugger;
      return arr.filter(function(item, index){
          return index % num === (val || 0);
      })
  };

  });
