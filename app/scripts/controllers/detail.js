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
    $scope.txn = transactions.getTxn($routeParams.id);

    /*
    * Types
    * Normal: 0
    * Exchange: 1
    * Risky: 2
    */
    $scope.trace = [
      {
        address: '1PoVHFFCkCwZ8RDnbG5UYgbwVKz2ZsFhDJ',
        risk: 'high',
        type: 2
      },
      {
        address: '1Aed4iVjWkjSJryu5PjMhgTXfm5Mdv9EDK',
        risk: 'low',
        type: 0
      },
      {
        address: '1DxnDQCmPABnUnrThpamS2WCaBLrUoZ1X',
        risk: 'low',
        type: 0
      },
      {
        address: '1MTD65HbynEJzaGz6ojktZ1gMfvTc4dBmo',
        risk: 'low',
        type: 1
      },
      {
        address: '1AigSM87h2xykM5QugLFuYSMh8VhM6itER',
        risk: 'high',
        type: 1
      }
    ];

    var s = new sigma('graphcontainer');

    for (var i = 0; i < $scope.trace.length; i++) {

      var color;
      switch ($scope.trace[i].type) {
        case 1:
          color = '#00f';
          break;
        case 2:
          color = '#f00';
          break;
        default:
          color = '#000';
      }

      if (i < 2) {
        console.log('added n' + i);
        s.graph.addNode({
          id: 'n' + i, //n0, n1
          label: $scope.trace[i].address, //1, 2
          x: i, //0, 1
          y: (i%2) ? 0.5 : 0, //0, 0.5
          size: 1,
          color: color
        });

        if (i === 1) {
          console.log('added edge' + i);
          s.graph.addEdge({
            id: 'e' + i,
            source: 'n' + (i - 1),
            target: 'n' + i,
            color: '#000'
          });
        }
      } else {
        console.log('added n' + i + ' and e' + i);
        s.graph.addNode({
          id: 'n' + i,
          label: $scope.trace[i].address,
          x: i,
          y: (i%2) ? 0.5 : 0,
          size: 1,
          color: color
        }).addEdge({
          id: 'e' + i,
          source: 'n' + (i - 1),
          target: 'n' + i
        });
      }
    }

    s.settings({});

    s.refresh();
  });
