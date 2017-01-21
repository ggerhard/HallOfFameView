'use strict';

describe('Filter: modulo', function () {

  // load the filter's module
  beforeEach(module('hallOfFameViewApp'));

  // initialize a new instance of the filter before each test
  var modulo;
  beforeEach(inject(function ($filter) {
    modulo = $filter('modulo');
  }));

  it('should return the input prefixed with "modulo filter:"', function () {
    var text = 'angularjs';
    expect(modulo(text)).toBe('modulo filter: ' + text);
  });

});
