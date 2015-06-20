'use strict';

angular.module('mathsgymnasiamApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/contactus', {
        templateUrl: 'app/contactus/contactus.html',
        controller: 'ContactUsCtrl'
      });
  });