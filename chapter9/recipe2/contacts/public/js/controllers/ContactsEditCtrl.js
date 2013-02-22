app.controller("ContactsEditCtrl", function($scope, $routeParams, $location, Contact) {

  if ($routeParams.id) {
    $scope.contact = Contact.show({ id: $routeParams.id });
  } else {
    $scope.contact = new Contact();
  }

  $scope.submit = function() {
    console.log("submit")

    function success(response) {
      console.log("success", response)
      $location.path("/contacts");
    }

    function failure(response) {
      console.log("failure", response)

      _.each(response.data, function(errors, key) {
        if (errors.length > 0) {
          _.each(errors, function(e) {
            $scope.form[key].$dirty = true;
            $scope.form[key].$setValidity(e, false);
          });
        }
      });
    }

    if ($routeParams.id) {
      Contact.update($scope.contact, success, failure);
    } else {
      Contact.create($scope.contact, success, failure);
    }

  };

  $scope.cancel = function() {
    $location.path("/contacts/"+$scope.contact._id);
  };

  $scope.errorClass = function(name) {
    var s = $scope.form[name];
    return s.$invalid && s.$dirty ? "error" : "";
  };

  $scope.errorMessage = function(name) {
    var s = $scope.form[name].$error;
    result = [];
    _.each(s, function(key, value) {
      result.push(value);
    });
    return result.join(", ");
  };
});