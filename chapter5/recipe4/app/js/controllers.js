var app = angular.module("MyApp", ["ngResource"]);

app.factory("TwitterAPI", function($resource) {
  return $resource("http://search.twitter.com/search.json",
    { callback: "JSON_CALLBACK" },
    { get: { method: "JSONP" }});
});

app.controller("MyCtrl", function($scope, TwitterAPI) {
  $scope.search = function() {
    $scope.searchResult = TwitterAPI.get({ q: $scope.searchTerm });
  };
});