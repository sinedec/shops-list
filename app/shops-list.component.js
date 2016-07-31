'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('shopsListApp').
  component('shopsList', {
    template:
      '<div class="panel-group" id="accordion">' +
        '<div class="panel panel-default"' +
          '<div ng-repeat="shop in shops">' +
            '<div class="panel-heading">'+
              '<h4 class="panel-title">{{shop.number + " " + shop.name + ", адрес: " + shop.address + ", время работы: " + shop.working}}</h4>' +
              '<button ng-click="shop.showProducts = !shop.showProducts">Show products</button>' +
            '</div>' +
              '<ul ng-show="shop.showProducts" class="list-group">' +
                '<li class="list-group-item" ng-repeat="product in shop.products"><span>{{product.name + ", описание:" + product.description}}</span></li>'+
              '</ul>' +
          '</div>' +
        '</div>' +
      '</div>',
    controller: function ShopsListController($scope) {
      $scope.shops = [
        { 
          number: 1,
          name: 'ТЦ RIGA',
          address: 'г. Минск, ул. Сурганова 50',
          working: '8:00-23:00',
          showProducts: false,
          products: [
            { 
              name: 'Golden Alps',
              description: 'Шоколад с чем-то'
            }, {
              name: 'Shoulders & Head',
              description: 'Шампунь против волос.'
            }, {
              name: 'Daniel Jackson',
              description: 'Шотландский самогон.'
            }
          ]
        }, {
          number: 2,
          name: 'супермаркет BIGZZ',
          address: 'г. Минск, ул. Логойский тракт 37',
          working: 'круглосуточно',
          showProducts: false,
          products: [
            { 
              name: 'Syal',
              description: 'Картофельные чипсы'
            }, {
              name: 'Cola-Coca',
              description: 'Средство от ржавчины.'
            }, {
              name: 'GateCol',
              description: 'Зубная паста.'
            }
          ]
        }, {
          number: 3,
          name: 'супермаркет Белмаркет',
          address: 'г. Минск, ул. Куйбышева 46',
          working: '8:00-23:00',
          showProducts: false,
          products: [
            { 
              name: "M's&M",
              description: 'Драже с шоколадом и орехом'
            }, {
              name: 'Pedigrie',
              description: 'Корм для собак'
            }, {
              name: 'Cola-Coca',
              description: "Средство от ржавчины. Купили в BIGZZ'е"
            }
          ]
        }
      ];
      $scope.products = [
        { 
          id: 1,
          name: 'Golden Alps',
          description: 'Шоколад с чем-то'
        }, {
          id: 2,
          name: 'Shoulders & Head',
          description: 'Шампунь против волос.'
        }, {
          id: 3,
          name: 'Daniel Jackson',
          description: 'Шотландский самогон.'
        }
      ];
      $scope.shopProducts = function () {
        return $scope.products.filter(function (product) {
          return $scope.shops['products'].indexOf(product.id) !== -1;
        });
      };
    }
  });
