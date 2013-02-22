app.controller("ContactsIndexCtrl", function($scope, $location, Contact) {
  $scope.contacts = Contact.index();

  $scope.new = function() {
    $location.path("/contacts/new");
  };
});