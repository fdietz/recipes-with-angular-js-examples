app.factory("Person", function($resource) {
  return $resource("/api/persons/:id");
});

app.controller("PersonIndexCtrl", function($scope, Person) {
  Person.query(function(data) {
    $scope.persons = data;
  });
});

app.controller("PersonShowCtrl", function($scope, $routeParams, Person) {
  Person.get({ id: $routeParams.id }, function(data) {
    $scope.person = data;
  });
});