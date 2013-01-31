var app = angular.module("MyApp", []);

app.directive("myWidget", function() {
  return {
    restrict: "E",
    template: "<p>Hello World</p>"
  };
});

app.directive("myWidgetReplace", function() {
  return {
    restrict: "E",
    replace: true,
    template: "<p>Hello World</p>"
  };
});

app.directive("myWidgetTemplate", function() {
  return {
    restrict: "E",
    replace: true,
    templateUrl: "widget.html"
  };
});