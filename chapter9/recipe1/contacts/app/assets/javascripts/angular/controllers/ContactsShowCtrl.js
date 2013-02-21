app.controller("ContactsShowCtrl", function($scope, $routeParams, Contact) {
  $scope.contact = Contact.show({ id: $routeParams.id });
});