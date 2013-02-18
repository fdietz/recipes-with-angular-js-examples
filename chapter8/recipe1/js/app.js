var app = angular.module("MyApp", []);

app.controller("MyCtrl", function($scope) {

  $scope.friends = [
    { name: "Peter" },
    { name: "Pablo" },
    { name: "Linda" },
    { name: "Marta" },
    { name: "Othello" },
    { name: "Markus" }
  ];

});