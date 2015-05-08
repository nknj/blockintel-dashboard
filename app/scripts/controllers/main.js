'use strict';

/**
 * @ngdoc function
 * @name blockintelApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blockintelApp
 */
angular.module('blockintelApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
