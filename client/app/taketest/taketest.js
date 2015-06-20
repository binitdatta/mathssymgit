'use strict';

angular.module('mathsgymnasiamApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/takeatest', {
        templateUrl: 'app/taketest/taketest.html',
        controller: 'TakeTestCtrl'
      });
  });