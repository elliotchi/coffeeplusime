angular.module('coffeetime.entry', [])

.controller('EntryController', function ($scope, $location, Coffee){
  $scope.coffee = {};

  $scope.onlyNumbers = /^\d+$/;

  $scope.sendFilterParams = function(){
    Coffee.sendFilterParams($scope.coffee)
      .then(function(res){
        for(var i = 0; i < res.data.length; i++){
          if($scope.coffee.brewMethod === res.data[i].brewMethod){
            $scope.coffee.filteredData = res.data[i];
          }
        }
      });
  }

  $scope.getAllData = function(){
    Coffee.getAllData()
      .then(function(res){
        $scope.coffee.allBrewMethods = {};
        for (var i = 0; i < res.data.length; i++){
          $scope.coffee.allBrewMethods[res.data[i].brewMethod] = res.data[i].instructions;
        }
        $scope.coffee.methodKeys = Object.keys($scope.coffee.allBrewMethods);
        console.log($scope.coffee.methodKeys);
      });
  }
});