'use strict';

angular.module('myApp.viewSkeleton', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewSkeleton', {
    templateUrl: 'viewSkeleton/viewSkeleton.html',
    controller: 'ViewSkeletonCtrl'
  });
}])

.controller('ViewSkeletonCtrl', ['$scope','crossbar',function($scope,crossbar) {

        $scope.items = [];
        $scope.items.push({id: 'Inseam',label: "skeleton.inseam",  help:"skeleton.inseamH", value: undefined, min:50,max:100});
        $scope.items.push({id: 'Height',label: "skeleton.height",help:"skeleton.heightH", value:undefined, min:140, max:200});
        $scope.items.push({id: 'Torso',label: "skeleton.torso",help:"skeleton.torsoH", value :undefined, min:30,max:80});
        $scope.items.push({id: 'ArmElbowLength',label: "skeleton.arm",help:"skeleton.armH", value:undefined, min:30, max:80});


        $scope.getMess = function (id) {
            var item = _.find($scope.items, function (item) {
                return item.id == id
            });
            return item !== undefined?item.value:"??";
        }
        $scope.current = $scope.items[0];

        var koty = [];
        koty.push({x1: 180, y1: 35, x2: 180, y2: 1550, id: "Height", label: "skeleton.height"});
        koty.push({x1: 250, y1: 630, x2: 250, y2: 1000, id: "ArmElbowLength", label: "skeleton.arm"});
        koty.push({x1: 920, y1: 330, x2: 920, y2: 720, id: "Torso", label: "skeleton.torso"});
        koty.push({x1: 920, y1: 930, x2: 920, y2: 1550, id: "Inseam", label: "skeleton.inseam"});
        $scope.koty = koty;


        $scope.$watch('current',function(){
            $scope.compute()
        },true);

        $scope.compute = function(){
            $scope.measure = {
                FigureMeasure: {
                    Height: $scope.items[1].value,
                    Inseam: $scope.items[0].value,
                    ShouldersWidth: 64,
                    Torso: $scope.items[2].value,
                    ArmElbowLength: $scope.items[3].value,
                    FootSize: 21,
                    Weight: 21,
                    Flexibility: 3
                },
                CyclingTarget: 10,
                SaddleLength: 28
            }
            $scope.result = crossbar.CreateMTB($scope.measure);
        }


        $scope.selectCurrent = function (id) {
            $scope.current = _.find($scope.items, function (item) {
                return item.id == id
            });
            $scope.compute();
        }

    }]);