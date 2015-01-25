'use strict';

angular.module('myApp.viewFrame', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewFrame', {
    templateUrl: 'viewFrame/viewFrame.html',
    controller: 'ViewFrameCtrl'
  });
}])

.controller('ViewFrameCtrl', ['$scope',function($scope) {
    $scope.items = [];

        var items = [];
        items.push('Author2011');
        items.push('Author2012');
        items.push('Author2013');
        items.push('Author2014');
        items.push('Agang2010');
        items.push('Agang2011');
        items.push('Agang2012');
        items.push('Agang2013');
        items.push('BH2012');
        items.push('Dema2013');
        items.push('Felt2013');
        items.push('GT2010');
        items.push('GT2012');
        items.push('GT2013');
        items.push('GT2014');
        items.push('Scott2012');
        items.push('Scott2013');
        items.push('Superior2011');
        items.push('Superior2012');

        $scope.items = items;

    }]);