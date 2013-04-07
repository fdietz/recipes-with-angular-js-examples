var app = angular.module("MyApp", []);

app.directive("show", function() {
  return {
    link: function(scope, element, attrs) {
      scope.$watch(attrs.show, function(value){
        element.css('display', value ? '' : 'none');
      });
    }
  };
});
