'use strict';

describe('Filter: riskClass', function () {

  // load the filter's module
  beforeEach(module('blockintelApp'));

  // initialize a new instance of the filter before each test
  var riskClass;
  beforeEach(inject(function ($filter) {
    riskClass = $filter('riskClass');
  }));

  it('should return the input prefixed with "riskClass filter:"', function () {
    var text = 'angularjs';
    expect(riskClass(text)).toBe('riskClass filter: ' + text);
  });

});
