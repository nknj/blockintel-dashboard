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

    var DEFAULT_TXNS = [
      {
        id: 'AX3294',
        exchange: 'BTC-E',
        risk: 3,
        category: 'Terrorism'
      },
      {
        id: '34967A',
        exchange: 'Bitstamp',
        risk: 2,
        category: 'Mixer'
      },
      {
        id: 'TYDD09',
        exchange: 'Bitstamp',
        risk: 3,
        category: 'Terrorism'
      },
      {
        id: 'FRR2300',
        exchange: 'BTC-E',
        risk: 2,
        category: 'Laundering'
      },
      {
        id: 'RDU900',
        exchange: 'Coinbase',
        risk: 1,
        category: 'Gambling'
      }
    ];

    var get = function (id) {
      for (var i = 0; i < DEFAULT_TXNS.length; i++) {
        if (DEFAULT_TXNS[i].id === id) {
          return DEFAULT_TXNS[i];
        }
      }
    };

    return {
      getAll: function () {
        return DEFAULT_TXNS;
      },
      get: function (id) {
        return get(id);
      }
    };
  });
