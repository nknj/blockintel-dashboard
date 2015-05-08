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
    $scope.clients = transactions.getClients();

    $scope.getClientScore = function (client) {
      return transactions.getClientScore(client);
    };

    $scope.getClientTxns = function (client) {
      return transactions.getClientTxns(client);
    };
  });
