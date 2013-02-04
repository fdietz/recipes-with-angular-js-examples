var app = angular.module("MyApp", []);

app.controller("PostsCtrl", function($scope, $http) {
  $http.defaults.headers.common["X-Custom-Header"] = "Angular.js";
  $http.get('data/posts.json').
    success(function(data, status, headers, config) {
      $scope.posts = data;
    });
});