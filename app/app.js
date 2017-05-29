(function() {
  
  'use strict';
  // Define the app module
  angular.module('myApp', [
    'ngMaterial',
    'ngRoute',
    'ngMessages'
  ]).config(['$routeProvider', '$locationProvider',
    function config($routeProvider, $locationProvider) {

      // $locationProvider.hashPrefix('');

      $routeProvider
        .when('/', {
          template: '',
          authenticated: false
        })
        .otherwise('/');

      $locationProvider.html5Mode(true);
    }
  ]);
})();
