(function() {
  'use strict';

  angular.module('NarrowItDownApp')
    .directive('foundItems', foundItemsDirective);

  function foundItemsDirective() {
    var ddo = {
      templateUrl: 'templates/foundItems.html',
      scope: {
        menu: '<itemsFound',
        onRemove: '&'
      }
    };

    return ddo;
  }

})();
