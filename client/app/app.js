angular.module('coffeetime', [
  'coffeetime.services',
  'coffeetime.entry',
  'ngRoute',
  'ui.router'
  ])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('entry', {
        templateUrl: 'app/entry/entry.html',
        url: '/',
        controller: 'EntryController'
      });
      // .state('result', {
      //   templateUrl: 'app/result/result.html',
      //   url: '/result',
      //   controller: 'resultController'
      // })
});