'use strict';

angular.module('mathsgymnasiamApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/viewresults', {
        templateUrl: 'app/viewresults/viewresults.html',
        controller: 'ViewResultsCtrl'
      });
  });