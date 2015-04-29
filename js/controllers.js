'use_strict';

var controllers = angular.module("dabbble.controllers", []);

controllers.controller("AppCtrl", function($scope){
  $scope.name = "Module";
});

controllers.controller("ShotsListCtrl", function($scope, $http, $routeParams, myConfig){

  $http({
    url: "https://api.dribbble.com/v1/shots",
    method: "GET",
    params: {
      access_token: myConfig.access_token,
      list: $routeParams.list || ""
      }
  }).success(
    function(data, status, headers, config){
            $scope.list = data;
    });
});

controllers.controller("ShotsCtrl", function($scope, $http, $routeParams, myConfig){
  $http({
    url: "https://api.dribbble.com/v1/shots/" + $routeParams.id,
    method: "GET",
    params: {
      access_token: myConfig.access_token
      }
  }).success(
    function(data, status, headers, config){
            $scope.shot = data;
            console.log(data);
    });

    $http({
      url: "https://api.dribbble.com/v1/shots/" + $routeParams.id + "/comments",
      method: "GET",
      params: {
        access_token: myConfig.access_token
        }
    }).success(
      function(data, status, headers, config){
              $scope.comments = data;
              console.log(data);
      });
});
