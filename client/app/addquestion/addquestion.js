'use strict';

angular.module('mathsgymnasiamApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/addquestion', {
        templateUrl: 'app/addquestion/addquestion.html',
        controller: 'AddQuestionCtrl'
      });
  });