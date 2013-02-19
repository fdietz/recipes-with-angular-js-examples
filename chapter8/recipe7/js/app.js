var app = angular.module("MyApp", ["ui.bootstrap.modal"]);

app.controller("MyCtrl", function($scope) {

  $scope.open = function () {
    $scope.showModal = true;
  };

  $scope.close = function () {
    $scope.showModal = false;
  };

});

