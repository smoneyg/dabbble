'use_strict';

var controllers = angular.module("dabbble.controllers", []);

controllers.controller("AppCtrl", function($scope){
  $scope.name = "Module";
});

controllers.controller("ShotsListCtrl", function($scope, $http, myConfig){
  $http.get("https://api.dribbble.com/v1/shots?access_token="+myConfig.access_token).then(function(data){
    $scope.list = data.data;
    console.log(data);
  });
});
