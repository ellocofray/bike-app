'use strict';

angular.module('myApp.viewWheel', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewWheel', {
    templateUrl: 'viewWheel/viewWheel.html',
    controller: 'ViewWheelCtrl'
  });
}])

.controller('ViewWheelCtrl', [function(){} ]);