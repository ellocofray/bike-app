'use strict';

angular.module('myApp.viewReport', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewReport', {
    templateUrl: 'viewReport/viewReport.html',
    controller: 'ViewReportCtrl'
  });
}])

.controller('ViewReportCtrl', [function(){} ]);