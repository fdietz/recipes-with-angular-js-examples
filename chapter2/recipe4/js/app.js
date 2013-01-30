function MyCtrl($scope) {
  $scope.name = "";

  $scope.$watch("name", function(newValue, oldValue) {
    if (newValue.length > 0) {
      $scope.greeting = "Greetings " + newValue;
    }
  });
}