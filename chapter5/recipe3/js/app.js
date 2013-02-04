var app = angular.module("MyApp", ["ngResource"]);

function MyCtrl($scope, $resource) {
  $scope.twitterAPI = $resource("http://search.twitter.com/search.json",
    { callback: "JSON_CALLBACK" },
    { get: { method: "JSONP" }});

  $scope.search = function() {
    $scope.searchResult = $scope.twitterAPI.get({ q: $scope.searchTerm });
  };
}
