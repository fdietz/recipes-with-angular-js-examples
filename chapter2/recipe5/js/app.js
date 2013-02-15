var app = angular.module("MyApp", []);

app.controller("MyCtrl", function($scope) {
  $scope.name = "Peter";
  $scope.user = {
    name: "Parker"
  };
});

app.controller("MyNestedCtrl", function($scope) {
});