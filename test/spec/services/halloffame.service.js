'use strict';

describe('Service: hallOfFame.service', function () {

  // load the service's module
  beforeEach(module('hallOfFameViewApp'));

  // instantiate service
  var hallOfFame.service;
  beforeEach(inject(function (_hallOfFame.service_) {
    hallOfFame.service = _hallOfFame.service_;
  }));

  it('should do something', function () {
    expect(!!hallOfFame.service).toBe(true);
  });

});
