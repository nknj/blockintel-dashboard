'use strict';

/**
 * @ngdoc function
 * @name blockintelApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the blockintelApp
 */
angular.module('blockintelApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
