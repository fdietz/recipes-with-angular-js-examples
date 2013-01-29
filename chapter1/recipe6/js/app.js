var app = angular.module("MyApp", []);

app.directive("helloWorld", function() {
  return {
    restrict: "E",
    replace: true,
    template: '<span>Hello World</span>'
  };
});
