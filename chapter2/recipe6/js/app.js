var app = angular.module("MyApp", []);

app.factory("UserService", function() {
  var users = ["Peter", "Daniel", "Nina"];

  return {
    all: function() {
      return users;
    },
    first: function() {
      return users[0];
    }
  };
});

app.controller("MyCtrl", function($scope, UserService) {
  $scope.users = UserService.all();
});

app.controller("AnotherCtrl", function($scope, UserService) {
  $scope.firstUser = UserService.first();
});