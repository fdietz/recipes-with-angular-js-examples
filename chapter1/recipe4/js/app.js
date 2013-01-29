function MyCtrl($scope) {
  $scope.visible = true;

  $scope.toggle = function() {
    $scope.visible = !$scope.visible;
  };

  $scope.isVisible = function() {
    return $scope.visible === true;
  };
}