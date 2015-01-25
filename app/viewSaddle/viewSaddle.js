'use strict';

angular.module('myApp.viewSaddle', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewSaddle', {
    templateUrl: 'viewSaddle/viewSaddle.html',
    controller: 'ViewSaddleCtrl'
  });
}])

.controller('ViewSaddleCtrl', [function(){} ]);