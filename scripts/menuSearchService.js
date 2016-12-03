(function() {
  'use strict';

  angular.module('NarrowItDownApp')
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
    .service('MenuSearchService', MenuSearchService);

  MenuSearchService.$inject = ['$http', 'ApiBasePath']
  function MenuSearchService($http, ApiBasePath) {
    var service = this;
    var foundItems = [];

    service.getMatchedMenuItems = function (searchTerm) {
      var itemResponse = $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json")
      });

      itemResponse.then(function (response) {
          var items = response.data.menu_items;

          foundItems.splice(0, foundItems.length);
          for (var i = 0; i < items.length; i++) {
            var description = items[i].description;
            if (description.toLowerCase().indexOf(searchTerm.toLowerCase().trim()) !== -1) {
              var item = {
                short_name: items[i].short_name,
                name: items[i].name,
                description: description
              };
              foundItems.push(item);
            }
          }
        })
        .catch(function (error) {
          console.log("Something went terribly wrong.");
        });
      return foundItems;
    };

    service.removeItem = function (itemIndex) {
      foundItems.splice(itemIndex, 1);
    };
  }
})();
