app.factory("Person", function() {

  var persons = [
    { name: "Peter", age: 25, id: 1 },
    { name: "Stefan", age: 35, id: 2 },
    { name: "Agnes", age: 22, id: 3 }
  ];

  return {
    all: function() {
      return persons;
    },
    get: function(id) {
      var result = null;
      angular.forEach(persons, function(p) {
        if (p.id == id) result = p;
      });
      return result;
    }
  };
});

app.controller("PersonIndexCtrl", function($scope, Person) {
  $scope.persons = Person.all();
});

app.controller("PersonShowCtrl", function($scope, $routeParams, Person) {
  $scope.person = Person.get($routeParams.id);
});