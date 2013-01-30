function MyCtrl($scope) {
  $scope.value = 1;

  $scope.getIncrementedValue = function() {
    return $scope.value + 1;
  };
}