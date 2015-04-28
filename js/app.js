'use_strict';

var app = angular.module("dabbble", ["dabbble.controllers", 'ngRoute']);

app.constant("myConfig", {
  "access_token": [YOUR_DRIBBBLE_ACCESS_TOKEN]
});

app.config(function($routeProvider){
  $routeProvider
  .when("/shots/:id", {controller:"ShotsCtrl", templateUrl: "partials/shot.html"})
  .when("/shots", {controller:"ShotsListCtrl", templateUrl: "partials/shots_list.html"})
  .otherwise({redirectTo: "/shots"});
});
