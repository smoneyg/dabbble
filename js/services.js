'use_strict';

var services = angular.module('dabbble.services', []);

services.constant("myConfig", {
  "access_token": [YOUR_DRIBBBLE_ACCESS_TOKEN]
});

services.factory('dribbble', function($http, myConfig){
    return {
      list: function(type){
              return $http({
                  url: "https://api.dribbble.com/v1/shots",
                  method: "GET",
                  params: {
                  access_token: myConfig.access_token,
                  list: type
                    }
                });
      },

      shot: function(id){
              return $http({
                  url: "https://api.dribbble.com/v1/shots/" + id,
                  method: "GET",
                  params: {
                  access_token: myConfig.access_token
                    }
                });
      },
      comments: function(id){
                  return $http({
                      url: "https://api.dribbble.com/v1/shots/" + id + "/comments",
                      method: "GET",
                      params: {
                      access_token: myConfig.access_token
                        }
                    });
      }
    }

});
