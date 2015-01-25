'use strict';

angular.module('myApp.viewBicycle', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewBicycle', {
    templateUrl: 'viewBicycle/viewBicycle.html',
    controller: 'ViewBicycleCtrl'
  });
}])

.controller('ViewBicycleCtrl', ["$scope",'$translate','$locale','$rootScope','$location', function ($scope,$translate,$locale,$rootScope,$location) {


        $scope.langKey = $locale.id;

        $scope.changeLanguage = function (langKey) {
            $translate.use(langKey);
        };


        $rootScope.$on('$translateChangeEnd', function (event, args) {

            console.log('new language: ', args.language);
        });
        $scope.navigateTo = function(id){
            //alert(id);

            if (id === 'bike.frame')   $location.path("/viewFrame");
            else if (id === 'bike.frontSet')   $location.path("/viewInfo");
            else if (id === 'bike.saddle')  $location.path("/viewSaddle");
            else if (id === 'bike.crankArm')  $location.path("/viewCrank");
            else if (id === 'bike.saddleArea')  $location.path("/viewSaddle");
            else if (id === 'bike.wheel')   $location.path("/viewWheel");
        }

    } ]);