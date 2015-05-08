'use strict';

/**
 * @ngdoc function
 * @name blockintelApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blockintelApp
 */
angular.module('blockintelApp')
  .controller('MainCtrl', function ($scope, $location) {

    var DEFAULT_USER = {
      username: 'dbsadmin',
      password: 'qwerty'
    };
    
    $scope.login = function () {
      $scope.err = false;
      if ($scope.login.username === DEFAULT_USER.username && $scope.login.pass === DEFAULT_USER.password) {
        console.log('here');
        $location.path('/transactions');
      } else {
        $scope.err = true;
      }
    };
  });
