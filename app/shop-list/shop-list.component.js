angular.
  module('shopList').
  component('shopsList', {
  	templateUrl: 'shop-list/shop-list.template.html',
    controller: function ShopsListController($scope) {
      $scope.shops = [
        { 
          number: 1,
          name: 'ТЦ RIGA',
          address: 'г. Минск, ул. Сурганова 50',
          working: '8:00-23:00',
          showProducts: false,
          editable: false,
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
          editable: false,
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
          editable: false,
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

      $scope.add = function(newShop) {
        if (newShop.name != ""){
          var shop = {};
          shop.name = newShop.name;
          shop.address = newShop.address;
          shop.working = newShop.working;
          shop.showProducts = false;
          shop.editable = false;
          shop.number = findMaxNumber($scope.shops)+1;
          $scope.shops.push(shop);
          newShop.name = "";
          newShop.address = "";
          newShop.working = "";
        }
      };

      function findMaxNumber(shops) {
        var result = 0;
        for (var i = 0; i < shops.length; i++) {
            var shop = shops[i];
            if (result == null || shop.number > result) {
                result = shop.number;
            }
        }
        return result;
      }
    }
  });
