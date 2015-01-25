'use strict';

angular.module('myApp.viewInfo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewInfo', {
    templateUrl: 'viewInfo/viewInfo.html',
    controller: 'ViewInfoCtrl'
  });
}])

.controller('ViewInfoCtrl', [function(){} ]);