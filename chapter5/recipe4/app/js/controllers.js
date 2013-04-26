var app = angular.module("MyApp", []);

app.controller("MyCtrl", function($scope, $q, $http, $timeout) {

  $scope.nestedTest = function() {
    tmp = [];

    $http.get("/app/data/first.json").success(function(data) {
      tmp.push(data);
      $http.get("/app/data/second.json").success(function(data) {
        tmp.push(data);
        $http.get("/app/data/third.json").success(function(data) {
          tmp.push(data);
          $scope.combinedNestedResult = tmp.join(", ");
        });
      });
    });
  };

  $scope.allTest = function() {
    var first  = $http.get("/app/data/first.json"),
        second = $http.get("/app/data/second.json"),
        third  = $http.get("/app/data/third.json");

    $q.all([first, second, third]).then(function(result) {
      var tmp = [];
      angular.forEach(result, function(response) {
        tmp.push(response.data);
      });
      return tmp;
    }).then(function(result) {
      $scope.combinedResult = result.join(", ");
    });
  };

  $scope.startDeferredTimer = function(success) {
    deferredTimer(success).then(
      function(data) {
        $scope.deferredTimerResult = "Successfully finished: " + data.message;
      },
      function(data) {
        $scope.deferredTimerResult = "Failed: " + data.message;
      }
    );
  };

  function deferredTimer(success) {
    var deferred = $q.defer();

    $timeout(function() {
      if (success) {
        deferred.resolve({ message: "This is great!" });
      } else {
        deferred.reject({ message: "Really bad" });
      }
    }, 1000);

    return deferred.promise;
  }

});
