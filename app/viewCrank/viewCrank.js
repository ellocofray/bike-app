'use strict';

angular.module('myApp.viewCrank', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewCrank', {
    templateUrl: 'viewCrank/viewCrank.html',
    controller: 'ViewCrankCtrl'
  });
}])

.controller('ViewCrankCtrl', [function(){} ]);