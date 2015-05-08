'use strict';

/**
 * @ngdoc function
 * @name blockintelApp.controller:TransactionsCtrl
 * @description
 * # TransactionsCtrl
 * Controller of the blockintelApp
 */
angular.module('blockintelApp')
  .controller('TransactionsCtrl', function ($scope, transactions) {
    $scope.transactions = transactions.getAll();
  });
