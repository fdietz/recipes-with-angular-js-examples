function MyCtrl($scope) {
  $scope.style = "";

  $scope.showAlert = function() {
    $scope.style = "error-alert";
  };
}