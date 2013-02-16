var app = angular.module("MyApp", ["ui", "ui.directives"]);

app.controller("User", function($scope) {
  $scope.user = {};
  $scope.wasSubmitted = false;

  $scope.blacklist = ['idiot','loser'];

  $scope.notBlackListed = function(value) {
    return $scope.blacklist.indexOf(value) === -1;
  };

  $scope.submit = function() {
    $scope.wasSubmitted = true;
  };
});