var app = angular.module("MyApp", []);

app.filter("reverse", function() {
  return function(input, options) {
    input = input || "";
    var result = "";
    var suffix = options["suffix"] || "";

    for (var i=0; i<input.length; i++) {
      result = input.charAt(i) + result;
    }

    if (input.length > 0) result += suffix;


    return result;
  };
});
