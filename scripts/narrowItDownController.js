(function() {
  'use strict';

  angular.module('NarrowItDownApp')
    .controller('NarrowItDownController', NarrowItDownController);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;

    menu.search = function () {
      if ((menu.searchTerm) === ''){
        menu.found.splice(0, menu.found.length);
      } else {
        menu.found = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
      }
    };

    menu.removeItem = function (itemIndex) {
      MenuSearchService.removeItem(itemIndex);
    };
  }
})();
