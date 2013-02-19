var app = angular.module("MyApp", ["ngResource"]);

app.config(function ($httpProvider) {
  $httpProvider.responseInterceptors.push('myHttpInterceptor');

  var spinnerFunction = function spinnerFunction(data, headersGetter) {
    $("#spinner").show();
    return data;
  };

  $httpProvider.defaults.transformRequest.push(spinnerFunction);
});

app.factory('myHttpInterceptor', function ($q, $window) {
  return function (promise) {
    return promise.then(function (response) {
      $("#spinner").hide();
      return response;
    }, function (response) {
      $("#spinner").hide();
      return $q.reject(response);
    });
  };
});

app.controller("MyCtrl", function($scope, $resource, $rootScope) {

  $scope.resultsPerPage = 5;
  $scope.page = 1;
  $scope.searchTerm = "angularjs";

  $scope.twitter = $resource('http://search.twitter.com/search.json',
    { callback:'JSON_CALLBACK', page: $scope.page, rpp: $scope.resultsPerPage, q: $scope.searchTerm },
    { get: { method:'JSONP' } });

  $scope.load = function() {
    $scope.twitter.get(function(data) {
      $scope.tweets = data.results;
    });
  };
});