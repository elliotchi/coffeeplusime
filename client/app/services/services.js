angular.module('coffeetime.services', [])

.factory('Coffee', function($http){
  var getAllData = function(){
    return $http({
      method: 'GET',
      url: 'api/coffee'
    });
  }
  var sendFilterParams = function(entry){
    return $http({
      method: 'POST',
      url: 'api/coffee',
      data: entry
    });
  }
  return {
    getAllData: getAllData,
    sendFilterParams: sendFilterParams
  }
});