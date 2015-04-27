'use_strict';

var app = angular.module("dabbble", ["dabbble.controllers", 'ngRoute']);

app.constant("myConfig", {
  "access_token": [YOUR_DRIBBBLE_ACCESS_TOKEN]
});

app.config(function($routeProvider){
  $routeProvider
  .when("/:list", {controller:"ShotsListCtrl", templateUrl: "partials/shots_list.html"})
  .otherwise({redirectTo: "/shots"});
});
