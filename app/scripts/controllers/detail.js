'use strict';

/**
 * @ngdoc function
 * @name blockintelApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the blockintelApp
 */
angular.module('blockintelApp')
  .controller('DetailCtrl', function ($scope, $routeParams, transactions) {
    $scope.txn = transactions.get($routeParams.id);
  });
