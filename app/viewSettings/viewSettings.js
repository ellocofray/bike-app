'use strict';

angular.module('myApp.viewSettings', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewSettings', {
    templateUrl: 'viewSettings/viewSettings.html',
    controller: 'ViewSettingsCtrl'
  });
}])

.controller('ViewSettingsCtrl', [function(){} ]);