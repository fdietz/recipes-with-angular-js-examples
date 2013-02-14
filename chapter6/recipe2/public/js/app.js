'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ngResource']);

app.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.
    when("/persons", { templateUrl: "partials/index.jade", controller: "PersonIndexCtrl" }).
    when("/persons/:id", { templateUrl: "partials/show.jade", controller: "PersonShowCtrl" }).
    otherwise( { redirectTo: "/persons" });
});