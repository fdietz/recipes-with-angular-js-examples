var app = angular.module("MyApp", []);

app.factory("Item", function() {

  var items = [];
  for (var i=0; i<50; i++) {
    items.push({ id: i, name: "name "+ i, description: "description " + i });
  }

  return {
    get: function(offset, limit) {
      return items.slice(offset, offset+limit);
    },
    total: function() {
      return items.length;
    }
  };
});

app.controller("PaginationCtrl", function($scope, Item) {

  $scope.itemsPerPage = 5;
  $scope.currentPage = 0;
  $scope.total = Item.total();
  $scope.pagedItems = Item.get($scope.currentPage*$scope.itemsPerPage, $scope.itemsPerPage);

  $scope.loadMore = function() {
    $scope.currentPage++;
    var newItems = Item.get($scope.currentPage*$scope.itemsPerPage, $scope.itemsPerPage);
    $scope.pagedItems = $scope.pagedItems.concat(newItems);
  };

  $scope.nextPageDisabledClass = function() {
    return $scope.currentPage === $scope.pageCount()-1 ? "disabled" : "";
  };

  $scope.pageCount = function() {
    return Math.ceil($scope.total/$scope.itemsPerPage);
  };

});