'use strict';

/**
 * @ngdoc filter
 * @name blockintelApp.filter:risk
 * @function
 * @description
 * # risk
 * Filter in the blockintelApp.
 */
angular.module('blockintelApp')
  .filter('riskClass', function () {
    return function (input) {
      switch(input) {
        case 1:
          return 'info';
        case 2:
          return 'warning';
        case 3:
          return 'danger';
        default:
          return input;
      }
    };
  })
  .filter('riskLevel', function () {
    return function (input) {
      switch(input) {
        case 1:
          return 'Low';
        case 2:
          return 'Medium';
        case 3:
          return 'High';
        default:
          return input;
      }
    };
  })
  .filter('riskTrace', function () {
    return function (input) {
      switch(input) {
        case 0:
          return '';
        case 1:
          return '- (Exchange)';
        case 2:
          return '- (Suspect)';
        default:
          return input;
      }
    };
  });
