'use_strict';

var controllers = angular.module("dabbble.controllers", []);

controllers.controller("AppCtrl", function($scope){
  $scope.name = "Module";
});

controllers.controller("ShotsListCtrl", function($scope, $routeParams, dribbble){
  dribbble.list($routeParams.list).success(
    function(data, status, headers, config){
            $scope.list = data;
    });
});

controllers.controller("ShotsCtrl", function($scope, $routeParams, dribbble){
  dribbble.shot($routeParams.id).success(
    function(data, status, headers, config){
            $scope.shot = data;
    });

    dribbble.comments($routeParams.id).success(
      function(data, status, headers, config){
              $scope.comments = data;
      });
});
