'use_strict';

var controllers = angular.module("dabbble.controllers", []);

controllers.controller("AppCtrl", function($scope){
  $scope.name = "Module";
});

controllers.controller("ShotsListCtrl", function($scope, $routeParams, $location, dribbble){
  $scope.page = $routeParams.page;

  dribbble.list($routeParams).success(
    function(data, status, headers, config){
      $scope.list = data;
    });

  $scope.loadNextPage = function(){
    var pageNo = getNextPageNo();

    dribbble.list({list: $routeParams.list, page: pageNo}).success(
      function(data, status, headers, config){
        $location.search("page", pageNo);
        $routeParams.page = pageNo;
        $scope.list = data;
      });
  };

  function getNextPageNo(){
    return $routeParams.page == undefined ? 2 : parseInt($routeParams.page) + 1;
  }

  $scope.loadPreviousPage = function(){
    var pageNo = getPreviousPageNo();

    if(pageNo != 0){
      dribbble.list({list: $routeParams.list, page: pageNo}).success(
        function(data, status, headers, config){
          $location.search("page", pageNo);
          $routeParams.page = pageNo;
          $scope.list = data;
        });
    }
  };

  function getPreviousPageNo(){console.log($routeParams.page);
    return $routeParams.page == undefined || $routeParams.page == 1 ? 0 : parseInt($routeParams.page) - 1;
  }
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

  $scope.getImgUrl = function(imgUrl) {
    if(imgUrl != undefined && imgUrl.endsWith("_1x.gif")){
      return imgUrl.replace("_1x.gif", ".gif");
    }
    else{
      return imgUrl;
    }
  };
});
