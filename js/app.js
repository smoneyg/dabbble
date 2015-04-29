'use_strict';

var app = angular.module("dabbble", ["dabbble.controllers", 'ngRoute', 'ngSanitize', 'angularMoment', 'dabbble.services']);

app.config(function($routeProvider){
  $routeProvider
  .when("/shots/:id", {controller:"ShotsCtrl", templateUrl: "partials/shot.html"})
  .when("/shots", {controller:"ShotsListCtrl", templateUrl: "partials/shots_list.html"})
  .otherwise({redirectTo: "/shots"});
});
