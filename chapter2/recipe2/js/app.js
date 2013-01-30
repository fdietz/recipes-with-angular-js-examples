function MyCtrl($scope) {
  $scope.value = 1;

  $scope.incrementValue = function(value) {
    $scope.value += 1;
  };
}