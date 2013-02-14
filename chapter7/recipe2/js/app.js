var app = angular.module("MyApp", []);

app.controller("User", function($scope) {
  $scope.user = {};
  $scope.wasSubmitted = false;

  $scope.submit = function() {
    $scope.wasSubmitted = true;
  };
});