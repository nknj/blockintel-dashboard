'use strict';

/**
 * @ngdoc service
 * @name blockintelApp.transactions
 * @description
 * # transactions
 * Service in the blockintelApp.
 */
angular.module('blockintelApp')
  .service('transactions', function () {

    var DEFAULT_TXNS = {
      'Bitstamp': {
        'score': 84,
        'txns': [
          {
            id: 'AX3294',
            risk: 3,
            category: 'Terrorism'
          },
          {
            id: '34967A',
            risk: 2,
            category: 'Mixer'
          }
        ]
      },
      'BTC-E': {
        'score': 22,
        'txns': [
          {
            id: 'TYDD09',
            risk: 3,
            category: 'Terrorism'
          },
          {
            id: 'FRR2300',
            risk: 2,
            category: 'Laundering'
          }
        ]
      },
      'Coinbase':  {
        'score': 98,
        'txns': [
          {
            id: 'RDU900',
            risk: 1,
            category: 'Gambling'
          }
        ]
      }
    };

    var getClients = function () {
      return Object.keys(DEFAULT_TXNS);
    };

    var getClientScore = function (client) {
      return DEFAULT_TXNS[client].score;
    };

    var getClientTxns = function (client) {
      return DEFAULT_TXNS[client].txns;
    };

    var getTxn = function (id) {
      var clients = getClients();
      for (var i = 0; i < clients.length; i++) {
        var clientTxns = getClientTxns(clients[i]);
        for (var j = 0; j < clientTxns.length; j++) {
          if (clientTxns[j].id === id) {
            return {
              id: clientTxns[j].id,
              exchange: clients[i],
              risk: clientTxns[j].risk,
              category: clientTxns[j].category
            };
          }
        }
      }
    };

    return {
      getClients: function () {
        return getClients();
      },
      getClientScore: function (client) {
        return getClientScore(client);
      },
      getClientTxns: function (client) {
        return getClientTxns(client);
      },
      getTxn: function (id) {
        return getTxn(id);
      }
    };
  });
