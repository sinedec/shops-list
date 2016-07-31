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
          showProducts: true,
          editable: false,
          products: [
            { 
              name: 'Golden Alps',
              description: 'Шоколад с чем-то',
              editable: false
            }, {
              name: 'Shoulders & Head',
              description: 'Шампунь против волос.',
              editable: false
            }, {
              name: 'Daniel Jackson',
              description: 'Шотландский самогон.',
              editable: false
            }
          ]
        }, {
          number: 2,
          name: 'супермаркет BIGZZ',
          address: 'г. Минск, ул. Логойский тракт 37',
          working: 'круглосуточно',
          showProducts: false,
          editable: true,
          products: [
            { 
              name: 'Syal',
              description: 'Картофельные чипсы',
              editable: false
            }, {
              name: 'Cola-Coca',
              description: 'Средство от ржавчины.',
              editable: false
            }, {
              name: 'GateCol',
              description: 'Зубная паста.',
              editable: false
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
              description: 'Драже с шоколадом и орехом',
              editable: false
            }, {
              name: 'Pedigrie',
              description: 'Корм для собак',
              editable: false
            }, {
              name: 'Cola-Coca',
              description: "Средство от ржавчины. Купили в BIGZZ'е",
              editable: false
            }
          ]
        }
      ];

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
      $scope.rewriteShop = function(shop,editShop) {
        for (var i=0; i < $scope.shops.length; i++) {
          if($scope.shops[i].number === shop.number) {
            if(editShop == true) {
              $scope.shops[i].editable = !$scope.shops[i].editable;
              break;
            } else {
              $scope.shops.splice(i,1);
              break;
            } 
          }
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

      $scope.addProduct = function(newProduct,shop){
        if (newProduct.name != ""){
          var product = {};
          product.name = newProduct.name;
          product.description = newProduct.description;
          product.editable = false;
          shop.products.push(product);
          newProduct.name = "";
          newProduct.description = "";
        }
      }

      $scope.rewriteProduct = function(shop,product,editProduct) {
        for (var i=0; i < $scope.shops.length; i++) {
          if($scope.shops[i].number === shop.number) {
            for (var j=0; j < $scope.shops[i].products.length; j++) {
              if($scope.shops[i].products[j].name === product.name){
                if(editProduct == true) {
                  $scope.shops[i].products[j].editable = !$scope.shops[i].products[j].editable;
                  break;
                } else {
                  $scope.shops[i].products.splice(j,1);
                  break;
                } 
              }
            }
          }
        }
      };
    }
  });
